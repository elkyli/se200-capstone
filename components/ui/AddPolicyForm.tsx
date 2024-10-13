import { redirect } from 'next/navigation';
import { db } from '../../db';
import '../../styles/formStyles.css'; 

export default function AddPolicyForm() {
  async function handleSubmit(formData: FormData) {
    'use server';
    const id = formData.get('insurance_policy_id') as string;
    const name = formData.get('insurance_policy_name') as string;
    const basePriceSgd = parseFloat(formData.get('base_price_sgd') as string);
    const typeOfPolicy = formData.get('type_of_policy') as string;

    await db.insurancePolicy.create({
      data: {
        id,
        name,
        basePriceSgd,
        typeOfPolicy,
      },
    });

    redirect('/policies');
  }

  return (
    <form action={handleSubmit}>
      <div className="form-row">
        <label htmlFor="insurance_policy_id" className="form-label">ID</label>
        <input
          type="text"
          name="insurance_policy_id"
          id="insurance_policy_id"
          className="form-input"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="insurance_policy_name" className="form-label">Name</label>
        <input
          type="text"
          name="insurance_policy_name"
          id="insurance_policy_name"
          className="form-input"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="base_price_sgd" className="form-label">Price</label>
        <input
          type="number"
          name="base_price_sgd"
          id="base_price_sgd"
          className="form-input"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="type_of_policy" className="form-label">Type</label>
        <select
          name="type_of_policy"
          id="type_of_policy"
          className="form-select"
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

      <button type="submit" className="form-button">
        Add Policy
      </button>
    </form>
  );
}
