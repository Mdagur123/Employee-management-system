import React from 'react';
import { deleteEmployee } from '../services/api';

const EmployeeList = ({ employees, setEmployees }) => {
  const handleDelete = async (id) => {
    console.log('Deleting employee with ID:', id);
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter(emp => emp.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
        <th>ID</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Age</th>
        
         <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.employee_name}</td>
            <td>{emp.employee_salary}</td>
            <td>{emp.employee_age}</td>
            
            <td><button onClick={() => handleDelete(emp.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
