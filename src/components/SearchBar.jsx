function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="mb-4">
      <input
        className="w-full border rounded p-2 
bg-white text-black 
dark:bg-gray-700 dark:text-white dark:border-gray-600"
        placeholder="🔍 Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
