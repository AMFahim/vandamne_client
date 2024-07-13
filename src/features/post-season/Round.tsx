import { Schedule } from '@/data/types';
import AppContext from '@/lib/AppContext';
import { LOGO_DIR } from '@/lib/const';
import { getTeamById } from '@/lib/utils';
import Image from 'next/image';
import { useContext } from 'react';

const Round = ({ schedule }: { schedule: Schedule }) => {
  const { teams } = useContext(AppContext);
  const homeTeam = getTeamById(teams, schedule.homeTeamId);
  const awayTeam = getTeamById(teams, schedule.awayTeamId);
  let homeTeamScore = schedule.matchResult?.score.home.toString() ?? '~';
  let awayTeamScore = schedule.matchResult?.score.away.toString() ?? '~';
  if (schedule.matchResult?.penalties) {
    homeTeamScore += `(${schedule.matchResult.penalties.home})`;
    awayTeamScore += `(${schedule.matchResult.penalties.away})`;
  }
  const data = [
    {
      team: homeTeam,
      score: homeTeamScore,
    },
    { team: awayTeam, score: awayTeamScore },
  ];
  return (
    <div
      className={`flex w-44 flex-col rounded-lg border bg-white p-1 py-2 shadow-lg  md:w-60 ${
        schedule.stage === 'final' ? 'border-t-4 border-amber-400' : ''
      }`}>
      {schedule.stage === 'final' && (
        <div className="pb-2 text-center font-semibold">Finals</div>
      )}
      {schedule.stage === 'third-place' && (
        <div className="pb-2 text-center font-semibold ">Third Place</div>
      )}
      {data.map(({ team, score }) => (
        <div key={team.id} className="flex justify-between gap-4 p-1">
          <div className="flex gap-4">
            <Image
              className="h-6 w-6"
              alt="logo"
              src={`${LOGO_DIR}/${team.logoId}`}
              width={24}
              height={24}
            />
            <span className="hidden self-center align-middle ordinal sm:flex">
              {team.name}
            </span>
            <span className="self-center align-middle ordinal sm:hidden">
              {team.shortName}
            </span>
          </div>
          <span className="justify-end self-center px-2 text-lg font-semibold">
            {score}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Round;
