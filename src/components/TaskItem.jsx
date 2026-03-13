import React from "react";

function TaskItem({ task, deleteTask }) {
  return (
    <li className="flex justify-between items-center border p-2 rounded mb-2">
      <span>{task.text}</span>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
