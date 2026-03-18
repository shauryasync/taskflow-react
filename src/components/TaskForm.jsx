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
      className="flex flex-col gap-2 mb-4 sm:flex-row"
    >
      {/* Task input */}
      <input
        type="text"
        placeholder="Add a task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="w-full sm:flex-grow border rounded p-2 
      bg-white text-black 
      dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      {/* Date */}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Select due date
      </p>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full sm:w-auto border rounded p-2 
      bg-white text-black 
      dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      {/* Priority */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full sm:w-auto border rounded p-2 
      bg-white text-black 
      dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      {/* Button */}
      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
