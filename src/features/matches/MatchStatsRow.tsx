import { Schedule } from '@/data/types';
import { LOGO_DIR } from '@/lib/const';
import { RectangleVerticalIcon } from 'lucide-react';
import Image from 'next/image';
import CardRow from './CardRow';

const MatchStatsRow = ({ schedule }: { schedule: Schedule }) => {
  const goalScorers = schedule.matchResult?.goalScorers;
  const redCards = schedule.matchResult?.redCards;
  const yellowCards = schedule.matchResult?.yellowCards;

  return (
    <div className="flex flex-col gap-3">
      {goalScorers && (
        <CardRow matchInfo={goalScorers} showFullCount>
          <Image
            className="h-4 w-4"
            alt="ball"
            width={4}
            height={4}
            src={`${LOGO_DIR}/soccer-ball.svg`}
          />
        </CardRow>
      )}
      {yellowCards && (
        <CardRow matchInfo={yellowCards}>
          <RectangleVerticalIcon
            className="h-4 w-4 rotate-12"
            fill="yellow"
            strokeWidth={1}
          />
        </CardRow>
      )}
      {redCards && (
        <CardRow matchInfo={redCards}>
          <RectangleVerticalIcon
            className=" h-4 w-4 rotate-12"
            fill="red"
            strokeWidth={1}
          />
        </CardRow>
      )}
    </div>
  );
};

export default MatchStatsRow;
