import { MatchResultInfo } from '@/data/types';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const getCount = (count: number, showFullCount?: boolean) => {
  const result = `x${count}`;
  if (showFullCount || count > 1) {
    return result;
  }

  return ' ';
};
const Row = ({
  result,
  showFullCount,
  className,
}: {
  result: MatchResultInfo[];

  showFullCount?: boolean;
  className?: string;
}) => (
  <div className={cn('flex flex-col', className)}>
    {result.map(({ shirtNumber, name, count, ownGoal }, index) => (
      <span
        key={`${shirtNumber ?? 0}${name ?? '/'}${count}`}
        className={cn('w-full line-clamp-1 opacity-80 text-xs')}>
        {ownGoal && '(OG)'} {shirtNumber && `#${shirtNumber}`}{' '}
        {name && `${name}`} {`${getCount(count, showFullCount)}`}
        {!shirtNumber && !name && `Player ${index + 1}`}
      </span>
    ))}
  </div>
);

const CardRow = ({
  matchInfo,
  showFullCount,
  children,
}: {
  matchInfo: { home: MatchResultInfo[]; away: MatchResultInfo[] };

  showFullCount?: boolean;
  children: ReactNode;
}) => (
  <div className="grid grid-cols-12">
    <Row
      showFullCount={showFullCount}
      result={matchInfo.home}
      className="col-span-5 text-left"
    />
    <div className="col-span-2 flex justify-center pt-1 align-middle">
      {children}
    </div>
    <Row
      showFullCount={showFullCount}
      result={matchInfo.away}
      className="col-span-5 text-right"
    />
  </div>
);

export default CardRow;
