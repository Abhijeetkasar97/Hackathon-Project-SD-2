import React, { useEffect, useState } from 'react';
import api from '../services/api';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await api.getTasks();
      setTasks(allTasks);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Employee Productivity Dashboard</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
