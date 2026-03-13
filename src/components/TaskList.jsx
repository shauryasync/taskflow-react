import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
