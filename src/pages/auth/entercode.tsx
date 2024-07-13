import { Button } from '@/features/common/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const entercode = () => {
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
        Enter Code
        </h1>
        <p className="text-center text-black text-sm font-normal mt-3">
        A verification code has been sent to your email. Enter the code below to procees.
        </p>
        <form action="" className="mt-[95px] relative">
          <input
            type="text"
            placeholder="Verification code"
            className="w-full px-2 py-3 rounded border border-blue-900"
            required
          />
           <Link href={"/auth/newpassword"}><Button className="bg-blue-900 w-full mt-[100px]">Reset Password</Button></Link>
        </form>
      </div>
        </div>
    );
};

export default entercode;