import AppContext from '@/lib/AppContext';
import { getTeamById } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import Image from 'next/image';
import { useContext, useState } from 'react';
import MatchResults from './MatchResults';

const AddGameResult = () => {
  const { seasonSchedule, teams } = useContext(AppContext);

  const selectedSchedule = seasonSchedule[1];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const homeTeam = getTeamById(teams, selectedSchedule.homeTeamId);
  const awayTeam = getTeamById(teams, selectedSchedule.awayTeamId);
  return (
    <div className="mx-5">
      <h3 className="text-black text-xs text-center font-medium mt-[33px] leading-relaxed tracking-wide">
        Add Game Result
      </h3>

      <h2 className="text-black text-xs font-medium leading-relaxed tracking-wide mt-11">
        Select Match
      </h2>
      {/* <div className='border-[1px] border-neutral-600 rounded p-3 mt-3'>
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
            <Image
              src={'/images/down.png'}
              width={31}
              height={31}
              alt="team logo"
            />
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



      <div className='border border-blue-900 rounded mt-2 bg-blue-100'>
      <div className='border-neutral-600/30 border-b p-3'>
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
      <div className='border-neutral-600/30 border-b p-3'>
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
      <div className='border-neutral-600/30 border-b p-3'>
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
      </div> */}

      <div className="relative">
        <button
          className="border-[1px] border-neutral-600 rounded p-3 mt-3 flex justify-between items-center w-full"
          onClick={toggleDropdown}>
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
            <Image
              src={'/images/down.png'}
              width={31}
              height={31}
              alt="team logo"
            />
          </div>
        </button>
        {isOpen && (
          <div className="border border-blue-900 rounded mt-2 bg-blue-100 absolute w-full z-10">
            <div className="border-neutral-600/30 border-b p-3">
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
            <div className="border-neutral-600/30 border-b p-3">
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
            <div className="border-neutral-600/30 border-b p-3">
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
          </div>
        )}
      </div>

      <Tabs defaultValue="homeTeam" className="mt-6">
        <TabsList className="rounded-3xl border-2 border-blue-900/25 w-fit">
          <TabsTrigger
            value="homeTeam"
            className="rounded-3xl px-8 py-2 data-[state=active]:bg-blue-300 m-1">
            {/* {homeTeam.shortName} */}
            Spartan
          </TabsTrigger>
          <TabsTrigger
            value="awayTeam"
            className="rounded-3xl px-8 py-2 data-[state=active]:bg-blue-300 m-1 ">
            {/* {awayTeam.shortName} */}
            Lanham
          </TabsTrigger>
        </TabsList>
        <TabsContent value="homeTeam" className="">
          <MatchResults schedule={selectedSchedule} teamId={homeTeam.id} />
        </TabsContent>
        <TabsContent value="awayTeam">
          <MatchResults schedule={selectedSchedule} teamId={awayTeam.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AddGameResult;
