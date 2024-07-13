import { Button } from '@/features/common/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const Successful = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-5 relative">
      <div className="text-center">
        <Image
          src={'/images/leagueBanner.png'}
          height={169}
          width={230}
          alt="banner"
          className='mx-auto'
        />
        <p className="mt-8">
          The game results for the <b>Teams Spartan</b> vs <b>Lanham</b> has
          been successfully added.
        </p>
        <Link href={"/admin"}><Button className='w-[353px] bg-blue-900 absolute bottom-0 left-5'>Back to Dashboard</Button></Link>

      </div>

    </div>
  );
};

export default Successful;
