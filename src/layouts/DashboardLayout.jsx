import { Outlet } from "react-router";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Navbar from "../components/Shared/Navbar/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const DashboardLayout = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white  text-gray-900"
      }   `}
    >
      <Navbar></Navbar>
      <div className="  md:flex ">
        {/* Left Side: Sidebar Component */}
        <Sidebar />
        {/* Right Side: Dashboard Dynamic Content */}
        <div className="flex-1  md:ml-64">
          <div className="p-5 mt-10">
            {/* Outlet for dynamic contents */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
