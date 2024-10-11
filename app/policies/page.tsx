import Sidebar from '../../components/ui/Sidebar'; 
import { db } from '../../db'; 
import AddPolicyButton from '../../components/ui/AddPolicyButton';


export default async function Policies() {
  const insurancePolicies = await db.insurance_policies.findMany();

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
              <tr key={policy.insurance_policy_id}>
                <td className="border-b border-gray-300 px-4 py-4">{policy.insurance_policy_id}</td>
                <td className="border-b border-gray-300 px-4 py-2">{policy.insurance_policy_name}</td>
                <td className="border-b border-gray-300 px-4 py-2">${policy.base_price_sgd}</td>
                <td className="border-b border-gray-300 px-4 py-2">{policy.type_of_policy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
