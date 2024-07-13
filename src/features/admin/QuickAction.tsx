import Image from "next/image";
import Link from "next/link";

const QuickAction = () => {
    return (
     <div className="mx-5 mt-[34px]">
        <h1 className="mb-5">Quick Actions</h1>
         <div className="grid grid-cols-2 gap-3">
          <Link href={"/admin/issueteamfine"}>
      <div className="w-full h-[61px] relative bg-blue-900 rounded px-[20px] mr-5 md:mr-0">
        <Link href={"/admin/issueteamfine"} className=" top-[20px] absolute justify-start items-center gap-5 inline-flex">
          <div className="w-6 h-6 relative " />
          <div className="text-white text-sm font-normal relative left-[-25px] w-full ">
          Issue Team Fine
          </div>
        </Link>


        <div className=" h-20 top-[40px] absolute">
          <Image
            src={'/images/blueCircle2.png'}
            width={214}
            height={160}
            alt="circle line"
          />
        </div>
        <div className=" h-20 left-0 absolute">
          <Image
            src={'/images/blueCircle.png'}
            width={214}
            height={160}
            alt="circle line"
          />
        </div>
      </div>
    </Link>
          <Link href={"/admin/createteam"}>
      <div className="w-full h-[61px] relative bg-blue-400 rounded px-[20px] mr-5 md:mr-0">
        <Link href={"/admin/createteam"} className=" top-[20px] absolute justify-start items-center gap-5 inline-flex">
          <div className="w-6 h-6 relative " />
          <div className="text-black text-sm font-normal relative left-[-7px] w-full ">
          Add Team
          </div>
        </Link>


        <div className=" h-20 top-[40px] absolute">
          <Image
            src={'/images/blueCircle2.png'}
            width={214}
            height={160}
            alt="circle line"
          />
        </div>
        <div className=" h-20 left-0 absolute">
          <Image
            src={'/images/blueCircle.png'}
            width={214}
            height={160}
            alt="circle line"
          />
        </div>
      </div>
    </Link>
          
         
         
      </div>
     </div>
    );
};

export default QuickAction;