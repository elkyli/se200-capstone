import Link from 'next/link';
import { CirclePlus } from 'lucide-react';

export default function AddCustomerButton() {
  return (
    <Link href="/customers/add">
      <button className="flex items-center bg-neutral-900 text-white px-4 py-1 rounded hover:bg-neutral-700 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <CirclePlus className="h-5 w-5 mr-2" />
        Add Policy Holder
      </button>
    </Link>
  );
}
