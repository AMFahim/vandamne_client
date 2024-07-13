import { Schedule, TeamID } from '@/data/types';
import { LOGO_DIR } from '@/lib/const';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { Button } from '../common/ui/Button';
import UiModal from '../common/ui/UiModal';
import MatchResultSection from './MatchResultSection';
import Link from 'next/link';

type T = {
  name: string;
  category: string;
  icon: ReactNode;
  addName: string;
  resultRecord: ResultRecord[];
};

const sections = ['goals', 'redCards', 'yellowCards'] as const;

type SectionInfo = Record<(typeof sections)[number], T>;

const sectionInfo: SectionInfo = {
  goals: {
    name: 'Goals scored',
    category: 'goals',
    icon: (
      <Image
        className="h-3 w-4"
        alt="ball"
        width={4}
        height={4}
        src={`${LOGO_DIR}/soccer-ball.svg`}
      />
    ),
    addName: 'Goal',
    resultRecord: [],
  },
  redCards: {
    name: 'Red cards issued',
    category: 'redCards',
    icon: <div className="w-3 h-4 bg-red-600 rounded-sm" />,
    // icon: <RectangleVerticalIcon fill="red" className="h-5 w-5 rotate-12" />,
    addName: 'Card',
    resultRecord: [],
  },
  yellowCards: {
    name: 'Yellow cards issued',
    category: 'yellowCards',
    icon: <div className="w-3 h-4 bg-yellow-400 rounded-sm" />,
    // icon: <RectangleVerticalIcon fill="yellow" className="h-5 w-5 rotate-12" />,
    addName: 'Card',
    resultRecord: [],
  },
};

type ResultRecord = {
  playerName: string;
  count: number;
};

const getGoals = (teamId: TeamID, schedule: Schedule): ResultRecord[] => {
  const result: ResultRecord[] = [];
  if (teamId === schedule.homeTeamId) {
    schedule.matchResult?.goalScorers?.home.forEach((item) =>
      result.push({ playerName: item.name ?? 'player', count: 1 }),
    );
  } else {
    schedule.matchResult?.goalScorers?.away.forEach((item) =>
      result.push({ playerName: item.name ?? 'player', count: 1 }),
    );
  }
  return result;
};

const getCards = (
  teamId: TeamID,
  schedule: Schedule,
  key: 'yellowCards' | 'redCards',
): ResultRecord[] => {
  const result: ResultRecord[] = [];
  if (teamId === schedule.homeTeamId) {
    result.push({
      playerName: 'unknown',
      count: schedule.matchResult?.[key]?.home.length ?? 0,
    });
  } else {
    result.push({
      playerName: 'unknown',
      count: schedule.matchResult?.[key]?.away.length ?? 0,
    });
  }
  return result;
};

const MatchResults = ({
  schedule,
  teamId,
}: {
  schedule: Schedule;
  teamId: TeamID;
}) => {
  const [publishGameResult, setPublishGameResult] = useState(false);
  const data = { ...sectionInfo };
  if (schedule.matchResult?.goalScorers !== undefined) {
    data.goals.resultRecord = getGoals(teamId, schedule);
    data.yellowCards.resultRecord = getCards(teamId, schedule, 'yellowCards');
    data.redCards.resultRecord = getCards(teamId, schedule, 'redCards');
  }

  const closeModal = () => {
    setPublishGameResult(false);
  };
  return (
    <div className="flex flex-col gap-8 py-4">
      {sections.map((section) => (
        <MatchResultSection key={section} {...data[section]} />
      ))}
      <Button
        onClick={() => setPublishGameResult(true)}
        className="bg-blue-900 rounded text-base font-medium">
        Publish Game Results
      </Button>
      {publishGameResult && (
        <UiModal isOpen={publishGameResult} onClose={closeModal}>
          <div className="w-[322px]">
            <div className="p-3 bg-blue-100 rounded-xl">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                  <Image
                    src={'/images/spartan.png'}
                    width={31}
                    height={31}
                    alt="team logo"
                  />
                  <h3 className="text-black text-sm font-normal">Spartan</h3>
                </div>
                <div>VS</div>

                <div className="flex gap-2 items-center">
                  <Image
                    src={'/images/Lanham.png'}
                    width={31}
                    height={31}
                    alt="team logo"
                  />
                  <h3 className="text-black text-sm font-normal leading-relaxed">
                    Lanham
                  </h3>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <span className="text-black text-[10px] font-bold leading-relaxed tracking-wide">
                  07:30
                </span>
                <span>|</span>
                <span className="text-neutral-600 text-[10px] font-semibold leading-relaxed tracking-wide">
                  20 OCT
                </span>
              </div>
            </div>

            <div className='p-3 border border-blue-900 mt-3 rounded-xl'>
           <div className='flex justify-center gap-3'>
           <Image
                  src={'/images/football.png'}
                  width={22}
                  height={22}
                  alt="team logo"
                />
                <span>Goals Scored</span>
           </div>

              <div className="flex justify-between mt-3">
                <h2>Paul Dan 17’</h2>
                <Image
                  src={'/images/football.png'}
                  width={22}
                  height={22}
                  alt="team logo"
                />
                <h2>Marcus Lee 21’</h2>
              </div>
            </div>
            <div className='p-3 border border-blue-900 mt-3 rounded-xl'>
           <div className='flex justify-center items-center gap-3'>
           <div className="w-3 h-4 bg-red-600 rounded-sm" />
                <span>Red Cards Issued</span>
           </div>

              <div className="flex justify-between items-center mt-3">
                <h2>Paul Dan 17’</h2>
                <div className="w-3 h-4 bg-red-600 rounded-sm" />
                <h2>Marcus Lee 21’</h2>
              </div>
            </div>
            <div className='p-3 border border-blue-900 mt-3 rounded-xl'>
           <div className='flex justify-center items-center gap-3'>
           <div className="w-3 h-4 bg-yellow-400 rounded-sm" />
                <span>Yellow Cards Issued</span>
           </div>

              <div className="flex justify-between items-center mt-3">
                <h2>Paul Dan 17’</h2>
                <div className="w-3 h-4 bg-yellow-400 rounded-sm" />
                <h2>Marcus Lee 21’</h2>
              </div>
            </div>

            <div className='flex justify-between mt-7 gap-7'>
              <Link href={"/successful"} className='w-full '><Button className='w-full bg-blue-900' onClick={() => setPublishGameResult(false)}>Publish</Button></Link>
              <Button onClick={() => setPublishGameResult(false)} className='w-full bg-white border border-blue-900 text-blue-900 font-medium'>Cancel</Button> 
            </div>

            {/* <div>
            <Button onClick={() => setPublishGameResult(false)} className='w-[256px] mt-7 bg-blue-400 rounded-lg text-black text-sm font-medium'>Add Goal</Button>
            </div> */}
          </div>
        </UiModal>
      )}
    </div>
  );
};

export default MatchResults;
