import React, { useState } from 'react';
import api from '../services/api';

const TaskForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    timeSpent: 0,
    priority: '',
    reference: '',
    category: 'BAU',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await api.addTask(task);
      onTaskAdded(newTask);
      setTask({ title: '', description: '', timeSpent: 0, priority: '', reference: '', category: 'BAU' });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} required />
      <textarea placeholder="Description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>
      <input type="number" placeholder="Time Spent" value={task.timeSpent} onChange={(e) => setTask({ ...task, timeSpent: e.target.value })} />
      <input type="text" placeholder="Priority" value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value })} />
      <input type="text" placeholder="Reference" value={task.reference} onChange={(e) => setTask({ ...task, reference: e.target.value })} />
      <select value={task.category} onChange={(e) => setTask({ ...task, category: e.target.value })}>
        <option value="BAU">BAU</option>
        <option value="Ad Hoc">Ad Hoc</option>
        <option value="Project-Based">Project-Based</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
