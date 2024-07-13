import { cn } from '@/lib/utils';

export type GameResult = 'W' | 'L' | 'D' | '-';

const getColor = (record: GameResult): string => {
  switch (record) {
    case 'W':
      return 'bg-green-500';
    case 'L':
      return 'bg-red-500';
    case 'D':
      return 'bg-gray-600';
    case '-':
    default:
      return 'bg-gray-300';
  }
};
const MatchFormRecord = ({
  record,
  small,
}: {
  record: GameResult;
  small?: boolean;
}) => {
  const color = getColor(record);
  return (
    <div
      className={cn(
        'flex h-6 w-6 items-center justify-center rounded-full p-4 text-sm font-bold text-white',
        color,
        small && 'h-2 w-2 p-3',
      )}>
      <span>{record}</span>
    </div>
  );
};

export default MatchFormRecord;
