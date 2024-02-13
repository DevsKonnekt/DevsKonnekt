"use client";

import _ from "lodash";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { MdClose } from "react-icons/md";

const Search = ({ path, search, page, field, order }) => {
  const [text, setText] = useState(search);
  const initialRenderRef = useRef(true);
  const router = useRouter();

  const debouncedSearch = useCallback(
    _.debounce((newPath, newText) => {
      router.push(
        `/${newPath}?search=${newText}&sortField=${field}&sortOrder=${order}`
      );
    }, 500),
    [path]
  );

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }
    if (text) {
      debouncedSearch(path, text);
    } else {
      router.push(
        `/${path}?search=${text}&sortField=${field}&sortOrder=${order}`
      );
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [text, path, debouncedSearch]);
  return (
    <div className="relative rounded-md shadow-sm ml-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      {text && (
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            type="button"
            className="flex justify-center p-2 border border-transparent text-sm font-medium rounded-full text-primary/55"
          >
            <MdClose className="h-5 w-5" onClick={() => setText("")} />
          </button>
        </div>
      )}
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        type="text"
        name="search"
        id="search"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300  bg-transparent rounded-md"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Search;
