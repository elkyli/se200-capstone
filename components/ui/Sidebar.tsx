// components/Sidebar.tsx
import { Home, Wallet, Users2 } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-5">
        
        {/* Tooltip and Link for Home */}
        <Tooltip>
          <TooltipTrigger>
            <Link href="/" className="flex h-9 w-9 items-center justify-center">
              <Home className="h-5 w-5 hover:text-blue-500" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Home</TooltipContent>
        </Tooltip>

        {/* Tooltip and Link for Policies */}
        <Tooltip>
          <TooltipTrigger>
            <Link href="/policies" className="flex h-9 w-9 items-center justify-center">
              <Wallet className="h-5 w-5 hover:text-blue-500" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Policies</TooltipContent>
        </Tooltip>

        {/* Tooltip and Link for Customers */}
        <Tooltip>
          <TooltipTrigger>
            <Link href="/customers" className="flex h-9 w-9 items-center justify-center">
              <Users2 className="h-5 w-5 hover:text-blue-500" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Customers</TooltipContent>
        </Tooltip>

      </nav>
    </aside>
  );
}
