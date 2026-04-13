import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_MAP = {
  sm: 'max-w-container-sm',
  md: 'max-w-container-md',
  lg: 'max-w-container-lg',
};

export function PageWrapper({ children, className, size = 'lg' }: PageWrapperProps) {
  return (
    <div className={cn(SIZE_MAP[size], 'mx-auto px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
