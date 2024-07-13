import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const ScoreCard = ({
  penalties,
  children,
}: {
  penalties?: boolean;
  children: ReactNode;
}) => (
  <span
    className={cn(
      'min-w-fit rounded-sm bg-gray-100 p-2 text-xl font-semibold tabular-nums shadow-inner',
      penalties ? 'font-light' : 'font-semibold',
    )}>
    {children}
  </span>
);

export default ScoreCard;
