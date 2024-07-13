import { Button } from '@/features/common/ui/Button';
import { cn } from '@/lib/utils';
import { CalendarDaysIcon, HomeIcon, Table2Icon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import RefereeBottomIcon from 'src/icons/RefereeBottomIcon';
import TeamBottomIcon from 'src/icons/TeamBottomIcon';

const iconStyle = 'h-6 w-6';
const options = [
  { name: 'home', link: '/', icon: <HomeIcon className={iconStyle} /> },
  { name: 'table', link: '/table', icon: <Table2Icon className={iconStyle} /> },
  {
    name: 'Fixtures',
    link: '/matches',
    icon: <CalendarDaysIcon className={iconStyle} />,
  },
  {
    name: 'Referee',
    link: '/referee',
    icon: <RefereeBottomIcon />,
  },
  {
    name: 'Team',
    link: '/team',
    icon: <TeamBottomIcon />,
  },
];

const BottomNav = ({ className }: { className?: string }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div
      className={cn(
        'btm-nav rounded-t-3xl border-t-2 border-t-blue-900/30 py-2',
        className,
      )}>
      {options.map(({ name, link, icon }) => (
        <Link key={name} href={link} className="flex flex-col gap-2">
          <Button
            variant="ghost"
            className="active flex flex-col hover:bg-inherit">
            <div
              className={cn(
                'rounded-full p-1 opacity-50',
                pathname === link && 'bg-blue-900 text-white opacity-100',
              )}>
              {icon}
            </div>
            <span
              className={cn(
                'text-sm mt-1 capitalize opacity-50',
                pathname === link && 'text-blue-900 font-medium opacity-100',
              )}>
              {name}
            </span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
