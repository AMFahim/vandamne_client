import { cn } from '@/lib/utils';
import bannerImage from '@/public/logos/banner.jpg';
import Image from 'next/image';

const Carousel = ({ className }: { className?: string }) => (
  <div className={cn('carousel rounded-box hidden h-64 md:flex', className)}>
    <div className="absolute h-64 w-full">
      <Image src={bannerImage} alt={'Logo Image'} fill></Image>
    </div>
  </div>
);

export default Carousel;
