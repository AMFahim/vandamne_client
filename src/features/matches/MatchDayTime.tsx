import { Tag } from '@/data/types';
import { Button } from '@/features/common/ui/Button';
import { format } from 'date-fns';
import { ToggleLeftIcon, ToggleRightIcon } from 'lucide-react';
import { useToggle } from 'usehooks-ts';

const MatchDayTime = ({
  kickoffTime,
  tag,
  showToggle,
  underReview,
  handleDisplayToggle,
}: {
  kickoffTime: string | Date;
  tag: Tag;
  showToggle?: boolean;
  underReview?: boolean;
  handleDisplayToggle?: () => void;
}) => {
  const [on, toggle] = useToggle(false);
  const dateString = format(new Date(kickoffTime), 'EE, MMM d yyyy - kk:mm');

  const togglePressed = () => {
    toggle();
    handleDisplayToggle?.();
  };
  return (
    <div className="mb-1 flex items-center justify-between align-middle text-xs uppercase text-gray-600 md:mb-0 md:flex-col md:self-center">
      <div>
        <div className="flex w-full">
          <p className="rounded-md bg-blue-100 p-1 px-2">{tag}</p>
          <div className="divider divider-horizontal m-0 md:hidden"></div>
          <p className="p-1">{dateString}</p>
        </div>
      </div>
      {underReview && (
        <p className=" rounded-md bg-orange-300 p-1 px-2 text-start lowercase">
          Under Review
        </p>
      )}
      {showToggle && (
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-inherit"
          onClick={() => togglePressed()}>
          {on ? (
            <ToggleRightIcon
              className="mr-2 h-10 w-10 text-blue-800 hover:cursor-pointer"
              fill="lightblue"
            />
          ) : (
            <ToggleLeftIcon className="mr-2 h-10 w-10 hover:cursor-pointer" />
          )}
        </Button>
      )}
    </div>
  );
};

export default MatchDayTime;
