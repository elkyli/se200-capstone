import Link from 'next/link';

export default function AddPolicyButton() {
  return (
    <Link href="/policies/add">
      <button className="bg-neutral-900 text-white px-4 py-2 rounded hover:bg-neutral-700">
        Add Policy
      </button>
    </Link>
  );
}
