import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="px-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
