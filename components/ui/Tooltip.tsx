// components/ui/tooltip.tsx
import { ReactNode } from 'react';

export function Tooltip({ children }: { children: ReactNode }) {
  return <div className="relative inline-block group">{children}</div>;
}

export function TooltipContent({ children }: { children: ReactNode }) {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 hidden group-hover:block bg-black text-white text-xs rounded-md p-2 z-10">
      {children}
    </div>
  );
}

export function TooltipTrigger({ children }: { children: ReactNode }) {
  return <div className="group">{children}</div>;
}
