import { Route, Routes } from "react-router-dom";
import { Overview, Products, Sales, Users } from "./pages";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        {/* ===========background ========== */}
        <div className="fixed inset-0 z-0 ">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 opacity-80  ">
            <div className="absolute inset-0 backdrop-blur-sm "></div>
          </div>
        </div>

        {/* =============sidebar section ========== */}
        <Sidebar />
        <Routes>
          <Route element={<Overview />} path="/" />
          <Route element={<Products />} path="/products" />
          <Route element={<Users />} path="/users" />
          <Route element={<Sales />} path="/sales" />
        </Routes>
      </div>
    </>
  );
}

export default App;
