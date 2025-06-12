import { createContext, useState } from "react";
import { SortOption } from "@/types/sort.type";

const SortContext = createContext<{
  sortOption: SortOption;
  setSortOption: (val: SortOption) => void;
}>({
  sortOption: SortOption.None,
  setSortOption: () => {},
});

const SortProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.None);

  return (
    <SortContext.Provider value={{ sortOption, setSortOption }}>
      {children}
    </SortContext.Provider>
  );
};

export { SortContext, SortProvider };
