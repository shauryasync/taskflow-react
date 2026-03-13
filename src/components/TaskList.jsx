import React from "react";

function TaskList({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
