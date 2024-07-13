import Image from "next/image";

const MatchOverviewCard = () => {
    return (
        <div className="p-4 border border-0.5 rounded shadow mt-5">
            <div className="grid grid-cols-3 gap-4 justify-center">
                <div className="mx-auto my-auto">
                    <Image 
                    src={'/images/spartan.png'}
                    width={48}
                    height={48}
                    alt="team logo"
                    />
                    <h3 className="text-black text-base font-normal leading-relaxed mt-3">Spartan</h3>
                </div>
                <div className="text-center">
                    <p className="text-black text-sm font-bold">07:30</p>
                    <p className="text-neutral-600 text-xs">20 OCT</p>
                    <p className="text-black text-[32px] font-bold">3 : 2</p>
                    <p className="text-black text-[10px] font-normal">Emirates Stadium, London</p>
                </div>
                <div className="mx-auto my-auto">
                    <Image 
                    src={'/images/Lanham.png'}
                    width={48}
                    height={48}
                    alt="team logo"
                    />
                    <h3 className="text-black text-base font-normal leading-relaxed mt-3">Spartan</h3>
                </div>

            </div>

            <div>
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
                <div className="flex justify-between mt-3">
                   <div className="w-[27%]"></div>
                    {/* <Image 
                    src={'/images/football.png'}
                    width={22}
                    height={22}
                    alt="team logo"
                    /> */}
                    <div className="w-3 h-4 origin-top-left rotate-[15deg] bg-red-600 rounded-sm" />
                    <h2>Marcus Lee 21’</h2>
                </div>
            </div>
        </div>
    );
};

export default MatchOverviewCard;