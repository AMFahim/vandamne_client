import { cn } from '@/lib/utils';
import logoImage from '@/public/logos/league-dark.jpeg';

// import logoImage from '@/public/logos/league-light.png';
import Image from 'next/image';

const Banner = ({ className }: { className?: string }) => (
  <div
    className={cn(
      'w-full gap-2 flex items-center p-4 h-16 shadow relative',
      className,
    )}>
    <Image
      className="h-10 w-10 rounded-sm"
      src={logoImage}
      alt={'Logo Image'}
    />
    <article className="prose prose-xl font-mono font-bold text-teal-900">
      <h5>DMV Veterans League</h5>
    </article>
  </div>
);

export default Banner;
