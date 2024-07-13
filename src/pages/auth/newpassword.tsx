import { Button } from '@/features/common/ui/Button';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const newpassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
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
          New Password
        </h1>
        <p className="text-center text-black text-sm font-normal mt-3">
          Enter your new password to proceed
        </p>

        <p className="text-black text-xs font-normal mt-12 mb-2">
          Enter your password
        </p>

        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Your Password"
            className="w-full px-2 py-3 rounded border border-blue-900"
            required
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={toggleShowPassword}
              className="focus:outline-none text-blue-500">
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>
        <p className="text-black text-xs font-normal mt-7 mb-2">
          Confirm password
        </p>

        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            className="w-full px-2 py-3 rounded border border-blue-900"
            required
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={toggleShowPassword}
              className="focus:outline-none text-blue-500">
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        <Link href={'/admin'}>
          <Button className="bg-blue-900 w-full mt-[100px]">
            Reset Password
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default newpassword;
