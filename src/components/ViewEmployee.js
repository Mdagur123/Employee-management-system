import React, { useEffect, useState } from 'react';
import { getEmployees } from '../services/api';
import EmployeeList from './EmployeeList';

const ViewEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data.slice(0, 10)); 
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>View Employee List</h2>
      <button onClick={() => window.location.href='/add-employee'}>+ Add New</button>
      <EmployeeList employees={employees} setEmployees={setEmployees} />
    </div>
  );
}

export default ViewEmployee;
