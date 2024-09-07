import React, { useState } from 'react';
import { createEmployee } from '../services/api';

const AddEmployee = () => {
  const [salary, setSalary] = useState('');
  const [name, setName] = useState('');
  ;
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { name, salary, age };
    try {
      await createEmployee(newEmployee);
      alert('Employee added successfully!');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  }; 

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>

      <li>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </li>
        <li>
          Salary:
          <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
         
        </li>
        
        <li>
          Age:
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </li>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
