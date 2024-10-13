import { redirect } from 'next/navigation';
import { db } from '../../db';
import '../../styles/formStyles.css'; // Import the shared styles

export default function AddCustomerForm() {
  async function handleSubmit(formData: FormData) {
    'use server';
    const id = formData.get('nric') as string;
    const email = formData.get('email') as string;
    const firstName = formData.get('first_name') as string;
    const lastName = formData.get('last_name') as string;
    const policies = formData.getAll('policies') as string[]; 

    await db.policyHolder.create({
      data: {
        id,
        email,
        firstName,
        lastName,
        policies, 
      },
    });

    redirect('/customers');
  }

  return (
    <form action={handleSubmit}>
      <div className="form-row">
        <label htmlFor="nric" className="form-label">NRIC</label>
        <input
          type="text"
          name="nric"
          id="nric"
          className="form-input"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="first_name" className="form-label">First Name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          className="form-input"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="last_name" className="form-label">Last Name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          className="form-input"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="policies" className="form-label">Policies</label>
        <select
          name="policies"
          id="policies"
          className="form-select"
          multiple
          required
        >
          <option value="" disabled>Select one or more policies</option>
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

      <button type="submit" className="form-button">
        Add Policy Holder
      </button>
    </form>
  );
}
