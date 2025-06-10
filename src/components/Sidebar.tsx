// components/Sidebar.tsx
import { useSort } from "@/hooks/useSort";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import type { SortOption } from "@/types/sort.type";

const sortOptionLabels: Record<string, string> = {
  none: "Sort",
  "name-asc": "Name: A to Z",
  "name-desc": "Name: Z to A",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
};

export const Sidebar = () => {
  const { sortOption, setSortOption } = useSort();

  return (
    <div className="w-65 md:flex flex-col items-center fixed left-0 top-0 h-full mt-17 pt-10 hidden">
      <h2 className="text-lg font-semibold mb-2">Sort By</h2>
      <DropdownMenu>
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
  );
};
