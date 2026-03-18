import { useState } from "react";

function TaskItem({ task, deleteTask, toggleTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (!editText.trim()) return;

    updateTask(task.id, editText);
    setIsEditing(false);
  };
  const priorityIcons = {
    low: "🟢",
    medium: "🟡",
    high: "🔴",
  };

  const formattedPriority = task.priority
    ? task.priority.charAt(0).toUpperCase() + task.priority.slice(1)
    : "None";

  const formattedDate = task.dueDate
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(new Date(task.dueDate))
    : "no date";

  return (
    <li className="flex justify-between items-start bg-white dark:bg-gray-800 border rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition">
      {/* Left side: task text or edit input */}
      <div className="flex items-start gap-3 flex-grow">
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full border rounded p-2 bg-white text-black 
dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        ) : (
          <div className="flex flex-col">
            <div className="flex mt-1 gap-2 scale-110">
              <input
                type="checkbox"
                aria-label="Toggle task completion"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <span
                className={`font-medium ${task.completed ? "line-through dark:text-gray-400 text-gray-400" : ""}`}
              >
                {task.text}
              </span>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>
                Priority: {priorityIcons[task.priority] || ""}{" "}
                {formattedPriority}
              </span>
              {" | "}
              <span>Due: {formattedDate}</span>
            </div>
          </div>
        )}
      </div>

      {/* Right side buttons */}
      <div className="flex gap-2 ml-4">
        <button
          className="text-sm bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded transition"
          onClick={() => {
            if (isEditing) {
              handleSave();
            } else {
              setEditText(task.text);
              setIsEditing(true);
            }
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
