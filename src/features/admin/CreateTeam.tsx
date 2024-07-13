import LeftArmIcon from 'src/icons/LeftArmIcon';
import { Plus, Minus  } from 'lucide-react';
import { Button } from '../common/ui/Button';


const CreateTeam = () => {
  return (
    <div className="mx-5 mt-3">
      <div>
        <LeftArmIcon />
        <h3 className="text-center mt-[-25px]">Create team</h3>
      </div>

      <div>
        <h2 className="text-black text-xs font-medium mb-4 mt-7">
          Enter Team Name
        </h2>
        <input
          type="text"
          placeholder={''}
          className="w-full p-3 border border-neutral-600 rounded"
        />
      </div>

      <div>
        <h2 className="text-black text-xs font-medium mb-4 mt-7">
          Games Played
        </h2>
        <div className='flex justify-between'>
          <div className="w-10 h-10 p-2 rounded border border-neutral-600 justify-start items-center gap-7 inline-flex">
          <Plus />
          </div>
          <div className="text-black text-2xl font-normal leading-relaxed tracking-wide">1</div>
          <div className="w-10 h-10 p-2 rounded border border-neutral-600 justify-start items-center gap-7 inline-flex">
          <Minus />
          </div>
        </div>
      </div>


      <div>
        <h2 className="text-black text-xs font-medium mb-4 mt-7">
          Goals Scored
        </h2>
        <div className='flex justify-between'>
          <div className="w-10 h-10 p-2 rounded border border-neutral-600 justify-start items-center gap-7 inline-flex">
          <Plus />
          </div>
          <div className="text-black text-2xl font-normal leading-relaxed tracking-wide">1</div>
          <div className="w-10 h-10 p-2 rounded border border-neutral-600 justify-start items-center gap-7 inline-flex">
          <Minus />
          </div>
        </div>
      </div>



      <div>
        <h2 className="text-black text-xs font-medium mb-4 mt-7">
          Fines Issued
        </h2>
        <div className='flex justify-between'>
          <div className="w-10 h-10 p-2 rounded border border-neutral-600 justify-start items-center gap-7 inline-flex">
          <Plus />
          </div>
          <div className="text-black text-2xl font-normal leading-relaxed tracking-wide">1</div>
          <div className="w-10 h-10 p-2 rounded border border-neutral-600 justify-start items-center gap-7 inline-flex">
          <Minus />
          </div>
        </div>
      </div>


      <div>
        <h2 className="text-black text-xs font-medium mb-4 mt-7">
          Fines Paid
        </h2>
        <div className='flex justify-between'>
          <div className="w-10 h-10 p-2 rounded border border-neutral-600 justify-start items-center gap-7 inline-flex">
          <Plus />
          </div>
          <div className="text-black text-2xl font-normal leading-relaxed tracking-wide">1</div>
          <div className="w-10 h-10 p-2 rounded border border-neutral-600 justify-start items-center gap-7 inline-flex">
          <Minus />
          </div>
        </div>
      </div>

      <Button className='w-full bg-blue-900 mt-[85px] mb-3'>Create Team</Button>
    </div>
  );
};

export default CreateTeam;
