import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '../common/ui/Button';


const Signup = () => {
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
          Sign up
        </h1>
        <p className="text-center text-black text-sm font-normal mt-3">
          Register to view match updates, get information about your favorite
          football teams and enjoy live updates
        </p>
        <form className="mt-9">
          <p className="text-black text-xs font-normal mb-2">
            Enter your email
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-2 py-3 rounded border border-blue-900"
            required
          />

            <p className="text-black text-xs font-normal mt-7 mb-2">
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

          <Button className="bg-blue-900 w-full mt-11">Register</Button>

          <p className="text-center text-blue-900 text-xs font-medium mt-4">
          Already have an accoutn ?{' '}
          <Link href={'/auth/login'} className=" font-bold">
            Login
          </Link>
        </p>
        <div className='flex items-center gap-2 my-9'>
          <div className="h-[1px] bg-blue-400 w-full" />
          <p>Or</p>
          <div className="h-[1px] bg-blue-400 w-full" />
          <div />
        </div>
        <Button className='bg-white border border-blue-900 text-blue-900 w-full text-base font-medium mb-3'>Join as guest</Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
