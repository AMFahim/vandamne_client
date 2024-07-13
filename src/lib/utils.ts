import { Schedule, TableStats, Team, TeamID } from '@/data/types';
import { ClassValue, clsx } from 'clsx';
import { isAfter, isSameDay } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { EXHIBIT_GROUP_NAME } from './const';

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const defaultTeam: Team = {
  id: 0,
  name: 'Team',
  shortName: 'Team',
  abbr: 'TM',
  logoId: 'logo.png',
};

const getTeamById = (teams: Team[], teamId: TeamID): Team =>
  teams.find((team) => team.id === teamId) ?? defaultTeam;

const teamCompare = (teamA: TableStats, teamB: TableStats): number => {
  // TODO use yellow/red cards in comparison?
  if (teamA.points !== teamB.points) {
    return teamB.points - teamA.points;
  }
  if (teamA.goalsDifference !== teamB.goalsDifference) {
    return teamB.goalsDifference - teamA.goalsDifference;
  }
  // No further tie breakers for now
  return teamB.goalsFor - teamA.goalsFor;
};

const setPosition = (games: TableStats[], numQualified: number) => {
  games.sort(teamCompare);

  games.forEach((game, index) => {
    game.position = index + 1;
    game.isQualified = game.position <= numQualified;
  });
};

const updateForm = (form: string, gamesPlayed: number, result: string) => {
  if (gamesPlayed <= form.length) {
    return (
      form.substring(0, gamesPlayed - 1) +
      result +
      form.substring(gamesPlayed, form.length)
    );
  } else {
    return form.substring(0, form.length - 1) + result;
  }
};

const setMatchStats = (stats: TableStats[], schedule: Schedule) => {
  if (schedule.group === EXHIBIT_GROUP_NAME) {
    return;
  }
  const defaultStats: TableStats = {
    position: 0,
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalsDifference: 0,
    points: 0,
    form: '----',
    teamId: TeamID.DEFAULT,
    yellowCards: 0,
    redCards: 0,
  };

  let homeTeamStats = stats.find((stat) => stat.teamId === schedule.homeTeamId);
  let awayTeamStats = stats.find((stat) => stat.teamId === schedule.awayTeamId);

  if (homeTeamStats === undefined) {
    homeTeamStats = Object.assign({}, defaultStats);
    homeTeamStats.teamId = schedule.homeTeamId;
    stats.push(homeTeamStats);
  }
  if (awayTeamStats === undefined) {
    awayTeamStats = Object.assign({}, defaultStats);
    awayTeamStats.teamId = schedule.awayTeamId;
    stats.push(awayTeamStats);
  }
  if (schedule.matchResult?.score === undefined) {
    return;
  }

  homeTeamStats.gamesPlayed++;
  homeTeamStats.yellowCards +=
    schedule.matchResult.yellowCards?.home.length ?? 0;
  homeTeamStats.redCards += schedule.matchResult.redCards?.home.length ?? 0;

  awayTeamStats.gamesPlayed++;
  awayTeamStats.yellowCards +=
    schedule.matchResult.yellowCards?.home.length ?? 0;
  awayTeamStats.redCards += schedule.matchResult.redCards?.home.length ?? 0;

  const homeScore = schedule.matchResult.score.home;
  const awayScore = schedule.matchResult.score.away;

  const goalsDifference = homeScore - awayScore;
  if (goalsDifference > 0) {
    homeTeamStats.points += 3;
    homeTeamStats.wins++;
    awayTeamStats.losses++;
  } else if (goalsDifference < 0) {
    awayTeamStats.points += 3;
    awayTeamStats.wins++;
    homeTeamStats.losses++;
  } else {
    homeTeamStats.draws++;
    homeTeamStats.points++;
    awayTeamStats.draws++;
    awayTeamStats.points++;
  }

  homeTeamStats.goalsAgainst += awayScore;
  homeTeamStats.goalsFor += homeScore;
  homeTeamStats.goalsDifference += goalsDifference;
  awayTeamStats.goalsAgainst += homeScore;
  awayTeamStats.goalsFor += awayScore;
  awayTeamStats.goalsDifference += -goalsDifference;
  homeTeamStats.form = updateForm(
    homeTeamStats.form,
    homeTeamStats.gamesPlayed,
    goalsDifference === 0 ? 'D' : goalsDifference > 0 ? 'W' : 'L',
  );
  awayTeamStats.form = updateForm(
    awayTeamStats.form,
    awayTeamStats.gamesPlayed,
    goalsDifference === 0 ? 'D' : goalsDifference < 0 ? 'W' : 'L',
  );
};

const getTableStatsFromSchedule = (
  schedule: Schedule[],
  numQualified: number,
  group?: string,
): TableStats[] => {
  const results: TableStats[] = [];

  schedule
    .filter(
      (item) =>
        (item.tag === 'dmvvl' && item.stage === 'season') ||
        (group !== undefined && item.group === group),
    )
    .forEach((scheduleItem) => setMatchStats(results, scheduleItem));
  setPosition(results, numQualified);

  return results;
};

const getTableStatsGroups = (
  schedule: Schedule[],
  numQualified: number,
  groups: string[],
): TableStats[][] => {
  const tableDataList = groups.map((group) =>
    getTableStatsFromSchedule(schedule, numQualified, group),
  );

  // Alternative qualified
  const groupWinners: number[] = [];
  tableDataList.forEach((tableData) => groupWinners.push(tableData[0].teamId));

  const results: TableStats[] = [];
  schedule.forEach((scheduleItem) => setMatchStats(results, scheduleItem));
  setPosition(results, numQualified);
  const alternativeQualified = results
    .filter((item) => !groupWinners.includes(item.teamId))
    .sort(teamCompare)[0];
  tableDataList.forEach((resultList) => {
    resultList.forEach((teamStat) => {
      if (teamStat.teamId === alternativeQualified.teamId) {
        teamStat.isAlternateQualified = true;
      }
    });
  });
  return tableDataList;
};

const getTableStats = (
  schedule: Schedule[],
  numQualified: number,
): TableStats[][] => {
  const tableDataList = [undefined].map((group) =>
    getTableStatsFromSchedule(schedule, numQualified, group),
  );

  return tableDataList;
};

const getPrevAndNextMatchDays = (curDate: Date, schedule: Schedule[]) => {
  const result = { prev: -1, next: -1 };
  const lastFixture = schedule.at(-1);

  const sameDay = schedule.find((item) =>
    isSameDay(new Date(item.time), curDate),
  );
  const test = schedule.find((item) => isAfter(new Date(item.time), curDate));

  if (sameDay !== undefined) {
    result.next = sameDay.matchDay;
    result.prev = result.next - 1;
  } else {
    result.next = test?.matchDay ?? -1;
    result.prev = result.next - 1;
  }

  if (result.next === 1) {
    result.prev = -1;
  }
  if (result.next === -1) {
    result.prev = lastFixture?.matchDay ?? -1;
  }

  return result;
};

export {
  getTableStats,
  getTableStatsGroups,
  getTableStatsFromSchedule,
  getTeamById,
  cn,
  getPrevAndNextMatchDays,
};
