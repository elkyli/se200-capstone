import { redirect } from 'next/navigation';
import { db } from '../../db';
import '../../styles/formStyles.css'; 

export default async function AddCustomerForm() { 
  const insurancePolicies = await db.insurancePolicy.findMany({      
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: 'asc', 
    },
  });

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
        policies: {
          create: policies.map(policy => ({ insurancePolicyId: policy })),
        },
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
          {insurancePolicies.map(policy => (
            <option key={policy.id} value={policy.id}>
              {policy.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="form-button">
        Add Policy Holder
      </button>
    </form>
  );
}
