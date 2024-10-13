import { redirect } from 'next/navigation';
import { db } from '../../db';

export default function AddCustomerForm() {
  async function handleSubmit(formData: FormData) {
    'use server';
    const id = formData.get('nric') as string;  // NRIC (PolicyHolder ID)
    const email = formData.get('email') as string;
    const firstName = formData.get('first_name') as string;
    const lastName = formData.get('last_name') as string;
    const policies = formData.getAll('policies') as string[]; // Policies (dropdown)

    await db.policyHolder.create({
      data: {
        id,
        email,
        firstName,
        lastName,
        policies: {
          connect: policies.map(policyId => ({ id: policyId })) // connecting policy relations
        }
      },
    });

    redirect('/customers');
  }

  return (
    <form action={handleSubmit}>
      <div>
        <label htmlFor="nric">NRIC</label>
        <input
          type="text"
          name="nric"
          id="nric"
          className="border px-2 py-1 w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border px-2 py-1 w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          className="border px-2 py-1 w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          className="border px-2 py-1 w-full"
          required
        />
      </div>

      <div>
  <label htmlFor="policies">Policies</label>
  <select
    name="policies"
    id="policies"
    className="border px-2 py-1 w-full"
    required
  >
    <option value="" disabled>Select a policy</option>
    <option value="policy_id_1">Travel Insurance</option>
    <option value="policy_id_2">Health Insurance</option>
    <option value="policy_id_3">Home Insurance</option>
    <option value="policy_id_4">Business Insurance</option>
    <option value="policy_id_5">Car Insurance</option>
    <option value="policy_id_6">Personal Accident</option>
    <option value="policy_id_7">Critical Illness</option>
    <option value="policy_id_8">Life Insurance</option>
  </select>
</div>




      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Customer
      </button>
    </form>
  );
}
