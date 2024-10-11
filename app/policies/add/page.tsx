import Sidebar from '../../../components/ui/Sidebar';
import AddPolicyForm from '../../../components/ui/AddPolicyForm';

export default function AddPolicyPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-14 p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">This is the Add Policies Page</h1>
        <AddPolicyForm />
      </main>
    </div>
  );
}
