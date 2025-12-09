import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
const MainLayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white  text-gray-900"
      }`}
    >
      <Navbar />
      <div className={`pt-24  min-h-[calc(100vh-68px)]`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
