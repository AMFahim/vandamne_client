import { Schedule } from '@/data/types';
import AppContext from '@/lib/AppContext';
import { cn, getTeamById } from '@/lib/utils';
import { useContext } from 'react';
import { useToggle } from 'usehooks-ts';
import MatchDayTime from './MatchDayTime';
import MatchRowCollapsible from './MatchRowCollapsible';
import MatchScoreTime from './MatchScoreTime';
import MatchStatsRow from './MatchStatsRow';
import ScoreCard from './ScoreCard';
import TeamWithBadge from './TeamWithBadge';
const MatchRow = ({
  schedule,
  className,
  enableDetails,
}: {
  schedule: Schedule;
  className?: string;
  enableDetails?: boolean;
}) => {
  const [displayMatchDetails, toggleDisplayMatchDetails] = useToggle(false);

  const { teams } = useContext(AppContext);
  const homeTeam = getTeamById(teams, schedule.homeTeamId);
  const awayTeam = getTeamById(teams, schedule.awayTeamId);
  const showToggle =
    schedule.matchResult?.goalScorers !== undefined ||
    schedule.matchResult?.yellowCards !== undefined ||
    schedule.matchResult?.redCards !== undefined;

  const matchResult = schedule.matchResult;
  const penalties = schedule.matchResult?.penalties;
  const isHomeTeamWinner =
    (matchResult?.score.home ?? 0) > (matchResult?.score.away ?? 0);
  const isAwayTeamWinner =
    (matchResult?.score.away ?? 0) > (matchResult?.score.home ?? 0);

  const underReview = schedule.underReview;

  return (
    <>
      {/* Desktop */}
      <div
        className={cn(
          'hidden flex-col border bg-white p-5 md:flex  w-full',
          className,
          schedule.stage === 'final' && 'border-t-4 border-amber-400',
        )}>
        <MatchRowCollapsible schedule={schedule} />
      </div>

      {/* Mobile */}
      <div
        className={cn(
          'flex flex-col gap-2 rounded-lg border bg-white p-4 md:hidden',
          className,
          schedule.stage === 'final' && 'border-t-4 border-amber-400',
          underReview && 'border-orange-300 border-2',
        )}>
        <MatchDayTime
          tag={schedule.tag}
          kickoffTime={schedule.time}
          underReview={underReview}
          showToggle={showToggle && enableDetails}
          handleDisplayToggle={toggleDisplayMatchDetails}
        />
        {displayMatchDetails ? (
          <div className="flex flex-col justify-between gap-2">
            <div className="grid grid-cols-12">
              <TeamWithBadge
                badgePosition="above"
                team={homeTeam}
                className="col-span-5 items-start"
                isWinner={isHomeTeamWinner}
              />
              <div className="col-span-2 flex flex-col gap-2 px-2 ">
                <div className="flex gap-2 self-center">
                  <ScoreCard>{matchResult?.score.home}</ScoreCard>
                  <ScoreCard>{matchResult?.score.away}</ScoreCard>
                </div>
                {penalties && (
                  <div className="flex gap-2">
                    <ScoreCard penalties>{`(${penalties.home})`}</ScoreCard>
                    <ScoreCard penalties>{`(${penalties.away})`}</ScoreCard>
                  </div>
                )}
              </div>
              <TeamWithBadge
                badgePosition="above"
                team={awayTeam}
                isWinner={isAwayTeamWinner}
                className="col-span-5 items-end"
              />
            </div>
            <div className="divider m-0"></div>
            <MatchStatsRow schedule={schedule} />
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-4">
              <TeamWithBadge
                badgePosition="left"
                redCardCount={matchResult?.redCards?.home.length}
                team={homeTeam}
                isWinner={isHomeTeamWinner}
              />
              <TeamWithBadge
                badgePosition="left"
                redCardCount={matchResult?.redCards?.away.length}
                team={awayTeam}
                isWinner={isAwayTeamWinner}
              />
            </div>
            <MatchScoreTime schedule={schedule} />
          </div>
        )}
      </div>
    </>
  );
};

export default MatchRow;
