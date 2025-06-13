import { useState } from "react";
import { Menu } from "lucide-react";
import { IoClose } from "react-icons/io5";

import { useSort } from "@/hooks/useSort";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SortOption } from "@/types/sort.type";
import { cn } from "@/lib/utils";

const sortOptionLabels: Record<string, string> = {
  [SortOption.None]: "No Sorting",
  [SortOption.NameAsc]: "Name: A to Z",
  [SortOption.NameDesc]: "Name: Z to A",
  [SortOption.PriceAsc]: "Price: Low to High",
  [SortOption.PriceDesc]: "Price: High to Low",
};

export const Sidebar = () => {
  const { sortOption, setSortOption } = useSort();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div>
      <Button
        className="md:hidden h-10 fixed bottom-4 left-4 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full cursor-pointer 
        "
        onClick={toggleSidebar}
      >
        <Menu />
      </Button>

      <div
        className={cn(
          "md:flex flex-col items-center fixed left-0 top-0 h-full md:h-1/2 mt-[69px] pt-20 md:pt-10 z-40 bg-white md:bg-transparent transition-transform duration-300",
          {
            "transform-none w-50 md:border-none border": isSidebarOpen,
            "transform -translate-x-full w-50": !isSidebarOpen,
            "md:w-62 md:transform-none md:translate-x-0": true,
          }
        )}
      >
        <div
          className="flex flex-col items-center w-full h-full md:mt-10"
          onClick={toggleSidebar}
        >
          <button className="flex md:hidden absolute top-0 right-0 p-2 cursor-pointer text-xl">
            <IoClose />
          </button>
          <h2 className="text-lg font-semibold mb-4 text-center">Sort By</h2>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                {sortOptionLabels[sortOption] ?? "Select Sorting"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Object.entries(sortOptionLabels).map(([key, label]) => (
                <DropdownMenuItem
                  key={key}
                  onClick={() => setSortOption(key as SortOption)}
                  className="cursor-pointer"
                >
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
