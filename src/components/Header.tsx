import { forwardRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import clickCartIcon from "/icons/logo.png";
import { User } from "lucide-react";

import { useSearch } from "@/hooks/useSearch";
import { useDebounce } from "@/hooks/useDebounce";
import { useSession } from "@/hooks/useSession";
import { Input } from "@/components/ui/input";
import { clearTokens } from "@/utils/localStorageService";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Header = forwardRef<HTMLInputElement>((_, ref) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { setSession } = useSession();

  const { setSearchTerm } = useSearch();
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 300);

  useEffect(() => {
    setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);

  return (
    <header className="flex justify-between items-center px-6 py-2 shadow bg-white w-full fixed z-10 top-0 left-0">
      <Link to="/" className="flex items-center gap-2">
        <img src={clickCartIcon} alt="ClickCart" className="h-13" />{" "}
        <p className="text-4xl font-medium bg-gradient-to-r from-[#0792dd] to-indigo-600 bg-clip-text text-transparent md:flex hidden">
          ClickCart
        </p>
      </Link>
      <div className="flex items-center gap-4">
        {location.pathname == "/" && (
          <Input
            ref={ref}
            placeholder="Search Products"
            className="h-12 w-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        )}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger>
            <Button
              className="rounded-full h-11 w-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 cursor-pointer"
              aria-label="User"
            >
              <User className="text-white !h-5 !w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="border-none flex flex-col items-center gap-2 mt-6">
            <Button
              className="w-20 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white cursor-pointer"
              onClick={() => {
                clearTokens();
                setSession(null);
              }}
            >
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
});
