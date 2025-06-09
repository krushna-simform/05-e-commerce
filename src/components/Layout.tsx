import { Outlet } from "react-router";
import { Header } from "@/components/Header";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
