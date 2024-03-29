"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const Search = ({ setSearch, search }) => {
  return (
    <div className="my-8 w-full flex gap-4 items-center justify-end relative">
      <SearchInput search={search} setSearch={setSearch} />
    </div>
  );
};

export default Search;

const SearchInput = ({ search, setSearch }) => (
  <div className="w-full max-w-xl h-max  relative">
    <Input
      className="input w-full !pl-8"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search"
    />
    <SearchIcon className="absolute top-[6px] left-1 w-[30px] text-gray-500" />
  </div>
);
