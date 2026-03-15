import { useState } from "react";

function TaskItem({ task, deleteTask, toggleTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (!editText.trim()) return;

    updateTask(task.id, editText);

    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center border p-2 rounded mb-2">
      <div className="flex items-center gap-2 flex-grow">
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border rounded px-2 py-1 w-full "
          />
        ) : (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <span
              className={task.completed ? "line-through text-gray-400" : ""}
            >
              {task.text}
            </span>
          </div>
        )}
      </div>

      <div className="flex gap-2 shrink-0">
        <button
          className="bg-gray-500 text-white px-2 py-1 rounded"
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
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
