import { useState } from "react";

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;

    addTask(taskText, priority, dueDate || null);
    setTaskText("");
    setDueDate("");
    setPriority("medium");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow mb-6 flex flex-col gap-3"
    >
      {/* Task Title */}
      <div>
        <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
          Task Title
        </label>
        <input
          type="text"
          placeholder="Add a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="w-full p-2 rounded-lg border bg-gray-100 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Date */}
      <div>
        <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
          Due Date
        </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 rounded-lg border bg-gray-100 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Priority */}
      <div>
        <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
          Priority
        </label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 rounded-lg border bg-gray-100 dark:bg-gray-700 dark:text-white"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
      >
        + Add Task
      </button>
    </form>
  );
}

export default TaskForm;
