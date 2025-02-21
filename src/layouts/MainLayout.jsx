import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <>
      <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        {/* ===========background ========== */}
        <div className="fixed inset-0 z-0 ">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 opacity-80  ">
            <div className="absolute inset-0 backdrop-blur-sm "></div>
          </div>
        </div>

        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
