import { createContext, useState } from "react";
import type { SortOption } from "@/types/sort.type";

const SortContext = createContext<{
  sortOption: SortOption;
  setSortOption: (val: SortOption) => void;
}>({
  sortOption: "none",
  setSortOption: () => {},
});

const SortProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortOption, setSortOption] = useState<SortOption>("none");

  return (
    <SortContext.Provider value={{ sortOption, setSortOption }}>
      {children}
    </SortContext.Provider>
  );
};

export { SortContext, SortProvider };
