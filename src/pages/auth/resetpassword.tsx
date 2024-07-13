import { Button } from '@/features/common/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const resetpassword = () => {
  return (
    <div>
      <Image
        src={'/images/authBanner.png'}
        height={235}
        width={1000}
        alt="banner"
      />

      <div className="px-5">
        <h1 className="text-black text-2xl font-medium leading-relaxed tracking-wide text-center mt-[38px]">
          Reset Password
        </h1>
        <p className="text-center text-black text-sm font-normal mt-3">
          Enter your email to get a verification code that will enable you reset
          your password
        </p>
        <form action="" className="mt-[95px] relative">
          <p className="text-black text-xs font-normal mb-2">
            Enter your email
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-2 py-3 rounded border border-blue-900"
            required
          />
           <Link href={"/auth/entercode"}><Button className="bg-blue-900 w-full mt-[100px]">Get code</Button></Link>
        </form>
      </div>
    </div>
  );
};

export default resetpassword;
