function FilterBar({ setFilter }) {
  return (
    <div className="flex gap-2 mb-4">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
    </div>
  );
}

export default FilterBar;
