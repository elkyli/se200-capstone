import Sidebar from '../../components/ui/Sidebar'; 
import { db } from '../../db'; 
import AddPolicyButton from '../../components/ui/AddPolicyButton';

export default async function Policies() {
  const insurancePolicies = await db.insurancePolicy.findMany();

  return (
    <div className="flex">
      <Sidebar />  
      <main className="max-w-[1870px] h-[597px] mx-auto rounded-[8px] bg-white p-4 shadow-lg">
        <AddPolicyButton />
        <h1 className="text-2xl font-bold mb-2">Insurance Policies</h1>
        <p className="text-s text-gray-600">Critical details of insurance policies</p>
        <table className="min-w-full">
          <thead>
            <tr className="bg-white">
              <th className="border-b border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">Price (SGD)</th>
              <th className="border-b border-gray-300 px-4 py-2 text-left">Type of Policy</th>
            </tr>
          </thead>
          <tbody>
            {insurancePolicies.map(policy => (
              <tr key={policy.id}>
                <td className="border-b border-gray-300 px-4 py-2">{policy.id}</td> 
                <td className="border-b border-gray-300 px-4 py-2">{policy.name}</td> 
                <td className="border-b border-gray-300 px-4 py-2">${policy.basePriceSgd}</td> 
                <td className="border-b border-gray-300 px-4 py-2">{policy.typeOfPolicy}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
