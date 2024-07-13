import { cn } from '@/lib/utils';

const ValueCell = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => <div className={cn('ml-3 h-14 px-1 py-4', className)}>{value}</div>;

export default ValueCell;
