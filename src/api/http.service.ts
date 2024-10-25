import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async () => {
  try {
      const response = await apiClient.get('/users');
      return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
      throw error;
  }
};

