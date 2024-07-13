import { cn } from '@/lib/utils';
import Image from 'next/image';

const TeamsBanner = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => (
  <div className={cn('justify-center gap-2 bg-blue-900 py-2', className)}>
    {images.map((src) => (
      <div key={src} className="carousel-item h-6 w-6">
        <Image src={src} className="w-full" alt={src} width={6} height={6} />
      </div>
    ))}
  </div>
);

export default TeamsBanner;
