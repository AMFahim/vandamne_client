import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../common/ui/Button';

const Login = () => {
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
          Login
        </h1>
        <p className="text-center text-black text-sm font-normal mt-3">
          Login to view match updates, get information about your favorite
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

          <div className="flex justify-between items-center mt-7 mb-2">
            <p className="text-black text-xs font-normal">
              Enter your password
            </p>
            <Link
              href={'/auth/resetpassword'}
              className="text-black text-[8px] font-medium">
              Forgot password?
            </Link>
          </div>
          {/* <input 
            type='password' 
            placeholder='Your Password' 
            className='w-full px-2 py-3 rounded border border-blue-900 relative' 
            required
            />
            <div className=' absolute'>
            <Eye />
            </div> */}

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

          <Button className="bg-blue-900 w-full mt-11">Login</Button>
        </form>
        <p className="text-center text-blue-900 text-xs font-medium mt-4">
          Do not have an account?{' '}
          <Link href={'/auth/signup'} className=" font-bold">
            Sign Up
          </Link>
        </p>
        <div className='flex items-center gap-2 my-9'>
          <div className="h-[1px] bg-blue-400 w-full" />
          <p>Or</p>
          <div className="h-[1px] bg-blue-400 w-full" />
          <div />
        </div>
        <Button className='bg-white border border-blue-900 text-blue-900 w-full text-base font-medium mb-3'>Join as guest</Button>
      </div>
    </div>
  );
};

export default Login;
