import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

import clsx from 'clsx';

export interface HeadingProps {
  asChild?: boolean;
  className?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Heading({ size = 'md', children, asChild, className }: HeadingProps){
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp className={clsx(
      'text-gray-100 font-bold font-sans', 
      {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      },
      className
    )}>
      {children}
    </Comp>
  )
}