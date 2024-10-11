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
        <h1 className="text-2xl font-bold mb-4">Insurance Policies</h1>
            <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price (SGD)</th>
              <th className="border px-4 py-2">Type of Policy</th>
            </tr>
          </thead>
          <tbody>

            {insurancePolicies.map(policy => (
              <tr key={policy.insurance_policy_id}>
                <td className="border px-4 py-2">{policy.insurance_policy_id}</td>
                <td className="border px-4 py-2">{policy.insurance_policy_name}</td>
                <td className="border px-4 py-2">{policy.base_price_sgd}</td>
                <td className="border px-4 py-2">{policy.type_of_policy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
