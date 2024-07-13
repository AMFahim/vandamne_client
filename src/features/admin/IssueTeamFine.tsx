import { ChevronDown, DollarSign } from 'lucide-react';
import Image from 'next/image';
import LeftArmIcon from 'src/icons/LeftArmIcon';
import { Button } from '../common/ui/Button';
import { useState, useRef   } from 'react';
import { format } from "date-fns";



const IssueTeamFine = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [formattedDate, setFormattedDate] = useState<string>("");
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const date = event.target.value;
    const formatted = format(new Date(date), "dd MMMM yyyy");
    setFormattedDate(formatted);
  };

  const handleDateClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };


  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="mx-5 mt-3">
      <div>
        <LeftArmIcon />
        <h3 className="text-center mt-[-25px]">Issue Team Fine</h3>
      </div>
      <div>
        <h2 className="text-black text-xs font-medium mb-4 mt-11">
          Select Team
        </h2>
      </div>

      <div>
      <div 
        className="flex justify-between px-3 border border-neutral-600 rounded py-3 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex gap-2">
          <Image
            src={'/images/spartan.png'}
            height={28}
            width={28}
            alt="logo"
          />
          <span>Spartan</span>
        </div>
        <ChevronDown />
      </div>

      {isOpen && (
        <div className='border border-blue-900 bg-blue-100 rounded mt-3'>
          <div className="flex gap-2 px-3 py-3 border-b-[0.5px] border-neutral-600">
            <Image
              src={'/images/spartan.png'}
              height={28}
              width={28}
              alt="logo"
            />
            <span>Spartan</span>
          </div>
          <div className="flex gap-2 px-3 py-3 border-b-[0.5px] border-neutral-600">
            <Image
              src={'/images/spartan.png'}
              height={28}
              width={28}
              alt="logo"
            />
            <span>Spartan</span>
          </div>
          <div className="flex gap-2 px-3 py-3">
            <Image
              src={'/images/spartan.png'}
              height={28}
              width={28}
              alt="logo"
            />
            <span>Spartan</span>
          </div>
        </div>
      )}
    </div>


      {/* Fine category  */}
      <div>
      <div>
        <h2 className="text-black text-xs font-medium mb-4 mt-7">
          Fine category
        </h2>
      </div>
      <div 
        className="flex justify-between px-3 border border-neutral-600 rounded py-3 cursor-pointer"
        onClick={toggleCategoryDropdown}
      >
        <div className="flex gap-2 items-center">
          <div className="w-3 h-4 rounded-sm border border-black" />
          <span>Card</span>
        </div>
        <ChevronDown />
      </div>

      {isCategoryOpen && (
        <div className='border border-blue-900 bg-blue-100 rounded mt-3'>
          <div className="flex gap-2 px-3 py-3 border-b-[0.5px] border-neutral-600">
            <Image
              src={'/images/football.png'}
              height={28}
              width={28}
              alt="logo"
            />
            <span>Penalty</span>
          </div>
          <div className="flex gap-2 px-3 py-3 border-b-[0.5px] border-neutral-600">
            <Image
              src={'/images/spartan.png'}
              height={28}
              width={28}
              alt="logo"
            />
            <span>Other</span>
          </div>
        </div>
      )}
    </div>


        {/* Amout to be paid  */}
        <div>
        <h2 className="text-black text-xs font-medium mb-4 mt-7">
        Amout to be paid
        </h2>
        <input type='text' placeholder={'$'} className='w-full p-3 border border-neutral-600 rounded'/>
      </div>
      {/* Date due  */}
        <div>
        <h2 className="text-black text-xs font-medium mb-4 mt-7">
        Date due
        </h2>
{/* 
        <div className="flex items-center border border-neutral-600 rounded-lg px-3 py-3">
      <input
        type="date"
        className="w-full outline-none"
      />
    
    </div> */}

{/* <div className="flex items-center border border-neutral-600 rounded-lg px-3 py-3">
      <input
        type="date"
        className="w-full outline-none"
        onChange={handleDateChange}
        value={selectedDate}
      />
      <div className="ml-2">
        {selectedDate}
      </div>
    </div> */}



    <div className="relative flex items-center border border-neutral-600 rounded-lg px-3 py-3 bg-white">
      <input
        type="text"
        className="w-full outline-none bg-transparent"
        value={formattedDate}
        placeholder="Select a date"
        readOnly
        onClick={handleDateClick}
      />
      <input
        type="date"
        className="absolute inset-0 opacity-0 cursor-pointer bg-white"
        onChange={handleDateChange}
        ref={dateInputRef}
        style={{ backgroundColor: "white" }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500 absolute right-3"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={handleDateClick}
      >
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 7v10h12V7H4z"
          clipRule="evenodd"
        />
      </svg>
    </div>
      </div>

      <Button className='w-full mt-20 bg-blue-900'>Submit</Button>
    </div>
  );
};

export default IssueTeamFine;
