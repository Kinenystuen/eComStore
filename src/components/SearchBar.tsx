import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
    onSearch(query);
  };

  return (
    <div className="flex items-center gap-2 p-4">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border border-gray-300 dark:bg-customBgDark-400 dark:border-customBgDark-800 dark:text-whiteFont-300 rounded px-4 py-2 w-full"
      />
    </div>
  );
};

export default SearchBar;
