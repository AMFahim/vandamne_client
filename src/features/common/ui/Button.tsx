import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'btn',
        neutral: 'border bg-transparent shadow-sm hover:bg-primary/10',
        primary: 'btn-primary text-white',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        ghost: 'btn-ghost hover:bg-primary/10',
        link: 'btn-link',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-8',
        lg: 'h-12 rounded-lg px-4',
        icon: 'h-9 w-9',
        iconSm: 'h-5 w-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  },
);

export type ButtonProps = {
  outline?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, outline, variant, size, ...props }, ref) => (
    // eslint-disable-next-line react/button-has-type
    <button
      className={cn(
        buttonVariants({ variant, size, className }),
        outline && 'border btn-outline dark:disabled:border-slate-500',
      )}
      ref={ref}
      {...props}
    />
  ),
);
Button.displayName = 'Button';

export { Button };
