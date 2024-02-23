"use client";

import { MdSort } from "react-icons/md";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "../../ui/menubar";
import { useState } from "react";
import { SortDescIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const PostsSort = ({ field, order, search, path, allFields }) => {
  const [sortField, setSortField] = useState(field);
  const [sortOrder, setSortOrder] = useState(order);

  const router = useRouter();
  const handleSortFieldChange = (newSortField) => {
    setSortField(newSortField);
    router.push(
      `/${path}?search=${search}&sortField=${sortField}&sortOrder=${sortOrder}`
    );
  };

  const handleSortOrderChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
    router.push(
      `/${path}?search=${search}&sortField=${sortField}&sortOrder=${sortOrder}`
    );
  };

  return (
    <div className="flex items-center -gap-2">
      <Menubar className="dark:bg-gray-700 border-none">
        <MenubarMenu>
          <MenubarTrigger className="p-1">
            <MdSort size={24} />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup
              value={sortField}
              onValueChange={handleSortFieldChange}
            >
              {allFields.map((field) => (
                <MenubarRadioItem key={field.value} value={field.value}>
                  {field.label}
                </MenubarRadioItem>
              ))}
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Menubar className="dark:bg-gray-700 border-none">
        <MenubarMenu>
          <MenubarTrigger className="p-1">
            <SortDescIcon size={24} />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup
              value={sortOrder}
              onValueChange={handleSortOrderChange}
            >
              <MenubarRadioItem value={1}>Ascending</MenubarRadioItem>
              <MenubarRadioItem value={-1}>Descending</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default PostsSort;
