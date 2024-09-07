import axios from 'axios';

const API_URL = 'https://dummy.restapiexample.com/api/v1';

export const getEmployees = async () => {
  const response = await axios.get(`${API_URL}/employees`);
  return response.data.data;
};

export const createEmployee = async (employee) => {
  const response = await axios.post(`${API_URL}/create`, employee);
  return response.data.data;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/${id}`);
  return response.data.data;
};
