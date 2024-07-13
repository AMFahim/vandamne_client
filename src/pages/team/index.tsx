import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mx-5'>
        <h1 className='text-center mt-6'>Select Team</h1>

        <div>
        <h2 className="text-black text-xs font-medium mb-4 mt-8">
          Select Team
        </h2>
      </div>
      <div
        className="flex justify-between px-3 border border-neutral-600 rounded py-3 cursor-pointer"
        onClick={toggleDropdown}>
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
        <div className="border border-blue-900 bg-blue-100 rounded mt-3">
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
  );
};

export default index;
