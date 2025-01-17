import React from 'react';
import PropTypes from 'prop-types';
import './TaskDetails.css'; // Optional for styling, create a CSS file for custom styles

const TaskDetails = ({ task, onClose }) => {
  if (!task) {
    return null; // Do not render the component if no task is provided
  }

  return (
    <div className="task-details-overlay">
      <div className="task-details-modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{task.title}</h2>
        <p>
          <strong>Description:</strong> {task.description}
        </p>
        <p>
          <strong>Time Spent:</strong> {task.timeSpent} hours
        </p>
        <p>
          <strong>Priority:</strong> {task.priority}
        </p>
        <p>
          <strong>Category:</strong> {task.category}
        </p>
        <p>
          <strong>Reference:</strong> {task.reference || 'N/A'}
        </p>
        <p>
          <strong>Date Logged:</strong> {new Date(task.date).toLocaleDateString()}
        </p>
        {task.attachments && task.attachments.length > 0 && (
          <div>
            <strong>Attachments:</strong>
            <ul>
              {task.attachments.map((file, index) => (
                <li key={index}>
                  <a href={file} target="_blank" rel="noopener noreferrer">
                    {file}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

TaskDetails.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    timeSpent: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    reference: PropTypes.string,
    date: PropTypes.string.isRequired,
    attachments: PropTypes.arrayOf(PropTypes.string),
  }),
  onClose: PropTypes.func.isRequired,
};

export default TaskDetails;
