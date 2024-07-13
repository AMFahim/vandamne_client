import { Team, TeamID } from '@/data/types';
import { LOGO_DIR } from '@/lib/const';
import { cn } from '@/lib/utils';
import { RectangleVerticalIcon, ShirtIcon } from 'lucide-react';
import Image from 'next/image';

export type BadgePosition = 'left' | 'right' | 'above';

const NameSpan = ({
  name,
  className,
  redCardCount = 0,
  isWinner,
}: {
  name: string;
  className?: string;
  redCardCount?: number;
  isWinner?: boolean;
}) => (
  <span
    className={cn(
      'flex gap-1 items-center md:w-full truncate px-2 font-medium lg:text-lg',
      isWinner && 'font-semibold',
      className,
    )}>
    {name}
    {redCardCount !== 0 && (
      <div className="flex gap-0">
        {Array.from({ length: redCardCount }).map((item, idx) => (
          <RectangleVerticalIcon
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            strokeWidth={1}
            className="h-4 w-4 rotate-12"
            fill="red"
          />
        ))}
      </div>
    )}
  </span>
);

const getFillColor = (teamId: TeamID): string => {
  switch (teamId) {
    case TeamID.BLUE:
      return 'lightblue';
    case TeamID.RED:
      return 'salmon';
    default:
      return 'lightgray';
  }
};

const shirtLogos = [TeamID.BLUE, TeamID.RED, TeamID.DEFAULT];

const TeamWithBadge = ({
  team,
  badgePosition = 'above',
  className,
  redCardCount,
  isWinner,
}: {
  team: Team;
  badgePosition?: BadgePosition;
  className?: string;
  redCardCount?: number;
  isWinner?: boolean;
}) => {
  const fillColor = getFillColor(team.id);

  return (
    <div
      className={cn(
        'flex md:w-full gap-2 lg:gap-4',
        badgePosition === 'above' && 'flex-col',
        className,
      )}>
      {badgePosition === 'right' && (
        <NameSpan
          name={team.name}
          redCardCount={redCardCount}
          isWinner={isWinner}
          className="justify-end"
        />
      )}
      <div className="w-10">
        {shirtLogos.includes(team.id) ? (
          <ShirtIcon fill={fillColor} size={40} strokeWidth={1} />
        ) : (
          <Image
            className="h-10 w-10"
            alt="logo"
            src={`${LOGO_DIR}/${team.logoId}`}
            width={30}
            height={30}
          />
        )}
      </div>

      {badgePosition === 'above' && <span>{team.shortName}</span>}
      {badgePosition === 'left' && (
        <NameSpan
          name={team.name}
          redCardCount={redCardCount}
          isWinner={isWinner}
          className="justify-start"
        />
      )}
    </div>
  );
};

export default TeamWithBadge;
