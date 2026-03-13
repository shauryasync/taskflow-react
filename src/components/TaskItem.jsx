function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li className="flex justify-between items-center border p-2 rounded mb-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.text}
        </span>
      </div>

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
