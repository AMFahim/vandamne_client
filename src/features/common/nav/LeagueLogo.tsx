import { cn } from '@/lib/utils';
import logoImage from '@/public/logos/league-dark.jpeg';
import Image from 'next/image';

const LeagueLogo = ({ className }: { className?: string }) => (
  <div
    className={cn(
      'avatar absolute top-20 md:ml-8 xl:px-44 2xl:px-72',
      className,
    )}>
    <div className="w-48 rounded">
      <Image src={logoImage} alt={'League Logo'} />
    </div>
  </div>
);

export default LeagueLogo;
