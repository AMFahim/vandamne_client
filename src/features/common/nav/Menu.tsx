'use client';

import Link from 'next/link';

import { menuOptions } from '@/data/menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/features/common/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';

const Menu = ({ className }: { className?: string }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <NavigationMenu className={cn('p-2', className)}>
      <NavigationMenuList>
        {menuOptions.map(({ name, link }) => (
          <NavigationMenuItem key={name}>
            <Link href={link} legacyBehavior passHref>
              <NavigationMenuLink
                active={pathname === link}
                className={cn('capitalize', navigationMenuTriggerStyle())}>
                {name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
