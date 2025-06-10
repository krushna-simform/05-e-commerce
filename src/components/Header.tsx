import { Link } from "react-router";
import clickCartIcon from "/icons/logo.png";

import type { SupabaseUser } from "@/types/supabase.type";
import { supabase } from "@/supabase-client";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<SupabaseUser>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        setUserData(data.user);
      } catch (error) {
        alert("Something went wrong");
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <header className="flex justify-between items-center px-6 py-2 shadow bg-white w-full fixed z-10 top-0 left-0">
      <Link to="/" className="flex items-center gap-2">
        <img src={clickCartIcon} alt="ClickCart" className="h-13" />{" "}
        <p className="text-4xl font-medium bg-gradient-to-r from-[#0792dd] to-indigo-600 bg-clip-text text-transparent">
          ClickCart
        </p>
      </Link>
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search Products"
          className="h-12 w-sm hidden md:flex"
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger>
            <Button className="rounded-full h-11 w-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 cursor-pointer">
              <User className="text-white !h-5 !w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="min-w-sm border-none flex flex-col items-center gap-2 mt-6">
            <p className="bg-gray-100 py-2 px-4 font-medium text-center rounded-sm">
              {userData?.email}
            </p>
            <Button
              className="w-20 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white cursor-pointer"
              onClick={() => {
                supabase.auth.signOut();
              }}
            >
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
