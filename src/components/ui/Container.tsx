import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: TProps) => {
  return (
    <div className={cn('w-full max-w-[1230px] px-[20px] mx-auto', className)}>
      {children}
    </div>
  );
};

export default Container;
