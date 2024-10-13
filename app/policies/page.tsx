import Sidebar from '../../components/ui/Sidebar'; 
import { db } from '../../db'; 
import AddPolicyButton from '../../components/ui/AddPolicyButton';
import '../../styles/tableStyles.css'; 

export default async function Policies() {
  const insurancePolicies = await db.insurancePolicy.findMany();

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-20 mt-5"> 
        <div className="mb-4"> 
          <AddPolicyButton />
        </div>
        
        <main className="max-w-[1870px] h-auto mx-auto rounded-[8px] mb-20 bg-white p-4 shadow-lg">
          <h1>Insurance Policies</h1> 
          <p>Critical details of insurance policies</p>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Base Price (SGD)</th>
                <th>Type of Policy</th>
              </tr>
            </thead>
            <tbody>
              {insurancePolicies.map(policy => (
                <tr key={policy.id}>
                  <td>{policy.id}</td> 
                  <td>{policy.name}</td> 
                  <td>${policy.basePriceSgd}</td> 
                  <td>{policy.typeOfPolicy}</td> 
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
