import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");

  const addTask = (taskText, priority, dueDate) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      priority,
      dueDate,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter((task) => {
    let statusMatch = true;

    if (filter === "completed") statusMatch = task.completed;
    else if (filter === "pending") statusMatch = !task.completed;

    const searchMatch = task.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return statusMatch && searchMatch;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;

    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-start p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">TaskFlow</h1>

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">TaskFlow</h1>

          <TaskForm addTask={addTask} />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <FilterBar setFilter={setFilter} />
          <TaskList
            tasks={sortedTasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            updateTask={updateTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
