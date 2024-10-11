import { redirect } from 'next/navigation';
import { db } from '../../db';

export default function AddPolicyForm() {
  async function handleSubmit(formData: FormData) {
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
    <form action={handleSubmit}>
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
        <select
        name="type_of_policy"
        id="type_of_policy"
        className="border px-2 py-1 w-full"
        required
>
        <option value="" disabled>Select a policy type</option>
        <option value="travel_insurance">Travel Insurance</option>
        <option value="health_insurance">Health Insurance</option>
        <option value="home_insurance">Home Insurance</option>
        <option value="business_insurance">Business Insurance</option>
        <option value="car_insurance">Car Insurance</option>
        <option value="personal_accident">Personal Accident</option>
        <option value="critical_illness">Critical Illness</option>
        <option value="life_insurance">Life Insurance</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Policy
      </button>
    </form>
  );
}
