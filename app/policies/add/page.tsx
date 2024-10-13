import Sidebar from '../../../components/ui/Sidebar';
import AddPolicyForm from '../../../components/ui/AddPolicyForm';

export default function AddPolicyPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 mx-auto mt-16 p-6 bg-white rounded-lg shadow-md max-w-[500px]"> 
        <h1 className="text-xl font-bold">Add Policy</h1>
        <p className="mb-8">Add a new policy</p>
        <AddPolicyForm />
      </main>
    </div>
  );
}
