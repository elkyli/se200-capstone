import { redirect } from 'next/navigation';
import Sidebar from '../../../components/ui/Sidebar';
import { db } from '../../../db';

export default function AddPolicyForm() {
  async function AddPolicyForm(formData: FormData){
    'use server';
    const insurance_policy_id = formData.get('insurance_policy_id') as string;
    const insurance_policy_name = formData.get('insurance_policy_name') as string;
    const base_price_sgd = parseFloat(formData.get('base_price_sgd') as string);
    const type_of_policy = formData.get('type_of_policy') as string;

    await db.insurance_policies.create({
      data: {
        insurance_policy_id,
        insurance_policy_name,
        base_price_sgd,
        type_of_policy,
      },
    });

    redirect('/');
  }

  return (

    <div className="flex">
      <Sidebar />
      <main className="ml-14 p-4 w-full">
        <h1 className="text-2xl font-bold mb-4">This is the Add Policies Page</h1>
        <form action={AddPolicyForm}>
          <div>
            <label htmlFor="insurance_policy_id">ID</label>
            <input
              type="text"
              name="insurance_policy_id"
              id="insurance_policy_id"
              className="border px-2 py-1 w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="insurance_policy_name">Name</label>
            <input
              type="text"
              name="insurance_policy_name"
              id="insurance_policy_name"
              className="border px-2 py-1 w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="base_price_sgd">Price (SGD)</label>
            <input
              type="number"
              name="base_price_sgd"
              id="base_price_sgd"
              className="border px-2 py-1 w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="type_of_policy">Type of Policy</label>
            <input
              type="text"
              name="type_of_policy"
              id="type_of_policy"
              className="border px-2 py-1 w-full"
              required
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Policy
          </button>

          </form>
      </main>
    </div>
  );
}
