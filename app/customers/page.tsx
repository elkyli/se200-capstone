import Sidebar from '../../components/ui/Sidebar'; 
import AddCustomerForm from '@/components/ui/AddCustomerForm';  

export default function AddCustomerPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-14 p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">This is the Add Customer Page</h1>
        <AddCustomerForm />
      </main>
    </div>
  );
}
