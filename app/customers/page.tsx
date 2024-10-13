import Sidebar from '../../components/ui/Sidebar'; 
import { db } from '../../db'; 
import AddPolicyButton from '../../components/ui/AddPolicyButton';
import '../../styles/tableStyles.css';
import AddCustomerButton from '@/components/ui/AddCustomerButton';

export default async function Customers() {
  const policyHolders = await db.policyHolder.findMany({
    include: {
      policies: {
        include: {
          insurancePolicy: true, 
        },
      },
    },
  });

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-20 mt-5"> 
        <div className="mb-4"> 
          <AddCustomerButton />
        </div>
        
        <main className="max-w-[1870px] h-auto mx-auto rounded-[8px] mb-20 bg-white p-4 shadow-lg">
          <h1>Policy Holders</h1>
          <p>Personal details of all policy holders</p>
          <table>
            <thead>
              <tr>
                <th>NRIC</th> 
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Policies Held</th>
              </tr>
            </thead>
            <tbody>
              {policyHolders.map(holder => (
                <tr key={holder.id}>
                  <td>{holder.id}</td> 
                  <td>{holder.email}</td>
                  <td>{holder.firstName}</td>
                  <td>{holder.lastName}</td>
                  <td>
                    {holder.policies.map(policyHolderPolicy => (
                      <span key={policyHolderPolicy.insurancePolicyId}>
                        {policyHolderPolicy.insurancePolicy.name}
                      </span>
                    )).join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
