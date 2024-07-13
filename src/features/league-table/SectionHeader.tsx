import { cn } from '@/lib/utils';

const SectionHeader = ({
  title,
  className,
}: {
  title: string;
  paddingLeft?: boolean;
  className?: string;
}) => (
  <article
    className={cn(
      'prose bg-gray-100 lg:prose-xl sm:bg-inherit py-4',
      className,
    )}>
    <h5 className="text-blue-900">{title}</h5>
    <div className="w-12 border-b-2 border-b-blue-400" />
  </article>
);

export default SectionHeader;
