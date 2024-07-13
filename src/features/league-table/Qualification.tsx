import { SquareIcon } from 'lucide-react';
import MatchFormRecord, { GameResult } from './MatchFormRecord';

const qualificationLabels2023 = [
  { color: 'dodgerblue', label: 'Group winner' },
  { color: 'darkorange', label: 'Overall 4th place' },
];
const qualificationLabels2024 = [
  { color: 'dodgerblue', label: 'Advances to Quarter-final' },
];

const qualificationTitle2023 = 'Semi-final qualification';
const qualificationTitle2024 = 'Quarter-final qualification';

const matchFormLabels: { value: GameResult; label: string }[] = [
  { value: 'W', label: 'Win' },
  { value: 'D', label: 'Draw' },
  { value: 'L', label: 'Loss' },
  { value: '-', label: 'Not Played' },
];

const Qualification = ({ year }: { year: number }) => {
  let qualificationTitle = qualificationTitle2024;
  let qualificationLabels = qualificationLabels2024;

  if (year === 2023) {
    qualificationTitle = qualificationTitle2023;
    qualificationLabels = qualificationLabels2023;
  }

  return (
    <div className="flex flex-col gap-4 rounded-sm border-2 bg-gray-100 p-4 text-xs">
      <div>
        <div className="mb-2 font-medium ">{qualificationTitle}</div>
        <div className="flex flex-col gap-1">
          {qualificationLabels.map((item) => (
            <div key={item.label}>
              <div className="flex gap-4">
                <div className="w-6">
                  <SquareIcon size={24} color={item.color} fill={item.color} />
                </div>
                <div className="self-center">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 font-medium">Form</div>
        <div className="flex flex-col gap-1">
          {matchFormLabels.map((item) => (
            <div key={item.label}>
              <div className="flex gap-4">
                <div className="w-6">
                  <MatchFormRecord small record={item.value} />
                </div>
                <div className="self-center">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
