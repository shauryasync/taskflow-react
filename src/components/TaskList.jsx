import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask, updateTask }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 mt-6">
        <p className="text-lg font-medium">No tasks found</p>
        <p className="text-sm">Try adding a new task 🚀</p>
      </div>
    );
  }
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
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
