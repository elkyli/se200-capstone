import Sidebar from '../../../components/ui/Sidebar';
import AddPolicyForm from '../../../components/ui/AddPolicyForm';
import AddPolicyButton from '../../../components/ui/AddPolicyButton'; // Ensure you import your button

export default function AddPolicyPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-14 p-4 w-full">
        <AddPolicyButton /> {/* Move the button here to keep it on top left */}
        <h1 className="mt-4">Add Policy</h1>
        <h2>Add a new policy</h2>
        <div className="max-w-[600px] mx-auto rounded-[8px] bg-white p-4 shadow-lg mt-4">
          <AddPolicyForm />
        </div>
      </main>
    </div>
  );
}
