import { Button } from '@/features/common/ui/Button';
import { PlusIcon } from 'lucide-react';
import { ReactNode, useState } from 'react';
import UiModal from '../common/ui/UiModal';

type ResultRecord = {
  playerName: string;
  count: number;
};
const MatchResultSection = ({
  name,
  category,
  addName,
  icon,
  resultRecord,
}: {
  name: string;
  category: string;
  icon: ReactNode;
  addName: string;
  resultRecord: ResultRecord[];
}) => {
  const [addGoalModal, setAddGoalModal] = useState(false);
  const [addRedCardModal, setAddRedCardModal] = useState(false);
  const [addYellowCardModal, setAddYellowCardModal] = useState(false);
  const handleAddButton = () => {
    if (category === 'goals') {
      setAddGoalModal(true);
      console.log('goals clicked', category);
    }
    if (category === 'redCards') {
      setAddRedCardModal(true);
      console.log('redCards clicked', category);
    }
    if (category === 'yellowCards') {
      setAddYellowCardModal(true);
      console.log('yellowCards clicked', category);
    }
  };

  const closeModal = () => {
    if (category === 'goals') {
      setAddGoalModal(false);
    }
    if (category === 'redCards') {
      setAddRedCardModal(false);
    }
    if (category === 'yellowCards') {
      setAddYellowCardModal(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-medium">
            {icon}
            <p>{name}</p>
          </div>
          <Button
            onClick={handleAddButton}
            className="h-8 gap-2 rounded-3xl bg-blue-300 text-black font-bold">
            <PlusIcon className="h-4 w-4" /> Add {addName}
          </Button>
        </div>
        <div className=" flex rounded-lg bg-white">
          {resultRecord.length !== 0 && (
            <div className="flex w-full flex-col gap-2 p-4">
              {resultRecord.map(({ playerName, count }) => (
                <div
                  key={`${playerName}${count}`}
                  className="flex w-full justify-between">
                  <p>{playerName}</p>
                  <p>{count}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>          

      {addGoalModal && (
        <UiModal isOpen={addGoalModal} onClose={closeModal}>
          <div className='mx-auto'>
            <h1 className="text-black text-xs font-medium text-center">
             Add Goal
            </h1>
            <p className="text-black text-xs font-normal mt-6">
              Number of Goals
            </p>
            <input
              type="text"
              className="rounded-lg border border-black h-9 mt-3 w-[256px] "
            />
            <p className="text-black text-xs font-normal mt-3">
              Player
            </p>
            <input
              type="text"
              className="rounded-lg border border-black h-9 mt-3 w-[256px] "
            />
            <div>
            <Button onClick={() => setAddGoalModal(false)} className='w-[256px] mt-7 bg-blue-400 rounded-lg text-black text-sm font-medium'>Add Goal</Button>
            </div>
          </div>
        </UiModal>
      )}
      {addRedCardModal && (
        <UiModal isOpen={addRedCardModal} onClose={closeModal}>
          <div className='mx-auto'>
            <div className="text-black text-xs font-medium flex justify-center gap-2">
            <span>{icon}</span> <span>Add Red Card</span>
            </div>
            <p className="text-black text-xs font-normal mt-6">
              Number of Red Cards
            </p>
            <input
              type="text"
              className="rounded-lg border border-black h-9 mt-3 w-[256px] "
            />
            <p className="text-black text-xs font-normal mt-3">
              Player
            </p>
            <input
              type="text"
              className="rounded-lg border border-black h-9 mt-3 w-[256px] "
            />
            <div>
            <Button onClick={() => setAddRedCardModal(false)} className='w-[256px] mt-7 bg-blue-400 rounded-lg text-black text-sm font-medium'>Add Card</Button>
            </div>
          </div>
        </UiModal>
      )}
      {addYellowCardModal && (
        <UiModal isOpen={addYellowCardModal} onClose={closeModal}>
          <div className='mx-auto'>
            <div className="text-black text-xs font-medium flex justify-center gap-2">
            <span>{icon}</span> <span>Add Yellow Card</span>
            </div>
            <p className="text-black text-xs font-normal mt-6">
              Number of Yellow Cards
            </p>
            <input
              type="text"
              className="rounded-lg border border-black h-9 mt-3 w-[256px] "
            />
            <p className="text-black text-xs font-normal mt-3">
              Player
            </p>
            <input
              type="text"
              className="rounded-lg border border-black h-9 mt-3 w-[256px] "
            />
            <div>
            <Button onClick={() => setAddYellowCardModal(false)} className='w-[256px] mt-7 bg-blue-400 rounded-lg text-black text-sm font-medium'>Add Card</Button>
            </div>
          </div>
        </UiModal>
      )}
    </div>
    // <div className="flex flex-col gap-4">
    //   <div className="flex items-center justify-between">
    //     <div className="flex items-center gap-2 text-lg font-medium">
    //       {icon}
    //       <p>{name}</p>
    //     </div>
    //     <Button className="h-8 gap-2 rounded-3xl bg-blue-300 text-neutral">
    //       <PlusIcon className="h-4 w-4" /> Add {addName}
    //     </Button>
    //   </div>
    //   <div className="min-h-16 flex rounded-lg bg-white">
    //     {resultRecord.length === 0 ? (
    //       <div className="flex items-center justify-center self-center align-middle">
    //         <p className="flex justify-center self-center text-center align-middle">
    //           Not Entered
    //         </p>
    //       </div>
    //     ) : (
    //       <div className="flex w-full flex-col gap-2 p-4">
    //         {resultRecord.map(({ playerName, count }) => (
    //           <div
    //             key={`${playerName}${count}`}
    //             className="flex w-full justify-between">
    //             <p>{playerName}</p>
    //             <p>{count}</p>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default MatchResultSection;
