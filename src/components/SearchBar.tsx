"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from "@/assets/icons/search.svg";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  //TODO 검색을 어떻게 할껀지??
  // const handleSearch = () => {
  //   onSearch(query);
  // };

  return (
    <div className="m-2 flex items-center border">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="h-9 w-full border-r px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
      />
      <Image
        width={36}
        height={36}
        src={SearchIcon}
        alt="Search"
        // onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;

// 사용 예시
// const handleSearch = (query: string) => {
//     console.log("Searching for:", query);
//     // Perform search logic here...
//   };

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} />
//     </div>
//   );
