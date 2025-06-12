import { useRef } from "react";
import { Outlet } from "react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Layout = () => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const focusOnSearch = () => {
    searchInputRef.current?.focus();
  };

  return (
    <div>
      <div>
        <Header ref={searchInputRef} />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer focusOnSearch={focusOnSearch} />
    </div>
  );
};

export default Layout;
