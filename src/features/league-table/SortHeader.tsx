import { TableStats } from '@/data/types';
import { Button } from '@/features/common/ui/Button';
import { Column } from '@tanstack/react-table';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const SortHeader = ({
  heading,
  column,
}: {
  heading: string;
  column: Column<TableStats>;
}) => {
  const handleClick = () => {
    column.toggleSorting(column.getIsSorted() === 'asc');
  };

  return (
    <Button className="m-0 p-0" size="sm" onClick={handleClick} variant="ghost">
      <span className="w-full text-left  text-sm">{heading}</span>
      {column.getIsSorted() === 'asc' && (
        <ChevronDownIcon className="ml-1 h-4 w-4" />
      )}
      {column.getIsSorted() === 'desc' && (
        <ChevronUpIcon className="ml-1 h-4 w-4" />
      )}
    </Button>
  );
};

export default SortHeader;
