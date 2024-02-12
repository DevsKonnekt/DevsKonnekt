"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = ({ search, setSearch, setData, getData }) => {
  return (
    <div className="my-8 w-full flex gap-4 items-center justify-end relative">
      <SearchInput search={search} setSearch={setSearch} />
      <Button
        variant="secondary"
        onClick={async () => {
          const newData = await getData();
          setData(newData);
        }}
        className="h-[35px] text-background w-max absolute top-0 right-0 rounded-l-none"
      >
        Search
      </Button>
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
