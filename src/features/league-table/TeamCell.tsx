import AppContext from '@/lib/AppContext';
import { LOGO_DIR } from '@/lib/const';
import { getTeamById } from '@/lib/utils';
import Image from 'next/image';
import { useContext } from 'react';

const TeamCell = ({
  teamId,
  position,
  isQualified,
  isAlternateQualified,
}: {
  teamId: number;
  position: number;
  isQualified?: boolean;
  isAlternateQualified?: boolean;
}) => {
  const { teams } = useContext(AppContext);
  const team = getTeamById(teams, teamId);
  let color = 'border-transparent';
  if (isQualified) {
    color = 'border-blue-400';
  }
  if (isAlternateQualified) {
    color = 'border-orange-400';
  }
  return (
    <div className="w-44 md:w-60">
      <div className={`flex gap-4 border-l-4 ${color} p-4 pr-0`}>
        <div className="self-center">{position}</div>
        <Image
          className="h-6 w-6"
          alt="logo"
          src={`${LOGO_DIR}/${team.logoId}`}
          width={24}
          height={24}
        />
        <span className="hidden self-center align-middle sm:flex">
          {team.name}
        </span>
        <span className="self-center align-middle sm:hidden">
          {team.shortName}
        </span>
      </div>
    </div>
  );
};

export default TeamCell;
