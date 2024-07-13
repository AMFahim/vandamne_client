import Image from 'next/image';
import Link from 'next/link';

const AddGameSection = () => {
  return (
    <Link href={"/referee/addgameresult"}>
      <div className="w-[353px] h-[105px] relative bg-blue-900 rounded-xl px-[20px] mr-5 md:mr-0">
        <Link href={"/referee/addgameresult"} className="left-[57px] top-[41px] absolute justify-start items-center gap-5 inline-flex">
          <div className="w-6 h-6 relative" />
          <div className="text-white text-base font-normal font-['Roboto'] leading-relaxed tracking-wide">
            + Add Game Result
          </div>
        </Link>

        {/* <Image 
            src={"/images/circle_line.png"}
            width={214}
            height={160}
            alt="circle line"
            /> */}
        <div className=" h-40 left-[272px] top-[19px] absolute">
          {/* <div className="w-40 h-40 left-0 top-0 absolute rounded-full border border-white/opacity-30" />
          <div className="w-40 h-40 left-[14.26px] top-0 absolute rounded-full border border-white/opacity-30" />
          <div className="w-40 h-40 left-[27.72px] top-0 absolute rounded-full border border-white/opacity-30" />
          <div className="w-40 h-40 left-[41.19px] top-0 absolute rounded-full border border-white/opacity-30" />
          <div className="w-40 h-40 left-[54.65px] top-0 absolute rounded-full border border-white/opacity-30" /> */}

          <Image
            src={'/images/circle_line2.png'}
            width={214}
            height={160}
            alt="circle line"
          />
        </div>
        <div className=" h-40 left-[-59px] absolute">
          {/* <div className="w-40 h-40 left-0 top-0 absolute rounded-full border border-white/opacity-30" />
          <div className="w-40 h-40 left-[14.26px] top-0 absolute rounded-full border border-white/opacity-30" />
          <div className="w-40 h-40 left-[27.72px] top-0 absolute rounded-full border border-white/opacity-30" />
          <div className="w-40 h-40 left-[41.19px] top-0 absolute rounded-full border border-white/opacity-30" />
          <div className="w-40 h-40 left-[54.65px] top-0 absolute rounded-full border border-white/opacity-30" /> */}

          <Image
            src={'/images/circle_line.png'}
            width={214}
            height={160}
            alt="circle line"
          />
        </div>
      </div>
    </Link>
  );
};

export default AddGameSection;
