import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Category: {task.category}</p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
