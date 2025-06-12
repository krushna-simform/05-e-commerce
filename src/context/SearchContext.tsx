import { createContext, useState } from "react";

type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
