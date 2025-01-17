import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/tasks',
});

const getTasks = async () => {
  const response = await api.get('/');
  return response.data;
};

const addTask = async (task) => {
  const response = await api.post('/', task);
  return response.data;
};

export default { getTasks, addTask };
