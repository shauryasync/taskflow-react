import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  updateTask,
  dueDate,
  priority,
}) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            updateTask={updateTask}
            dueDate={dueDate}
            priority={priority}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
