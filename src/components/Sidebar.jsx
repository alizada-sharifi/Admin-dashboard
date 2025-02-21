import { useState } from "react";
import {
  ChartNoAxesColumn,
  ShoppingBag,
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Settings,
  Menu,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

function Sidebar() {
  const sidebarItems = [
    {
      name: "Overview",
      icon: ChartNoAxesColumn,
      color: "#6366f1",
      path: "/",
    },
    {
      name: "Products",
      icon: ShoppingBag,
      color: "#8b5cf6",
      path: "/products",
    },
    {
      name: "Users",
      icon: Users,
      color: "#ec4899",
      path: "/users",
    },
    {
      name: "Sales",
      icon: DollarSign,
      color: "#10b981",
      path: "/sales",
    },
    {
      name: "Orders",
      icon: ShoppingCart,
      color: "#f59e0b",
      path: "/orders",
    },
    {
      name: "Analytics",
      icon: TrendingUp,
      color: "#3b82f6",
      path: "/analytics",
    },
    {
      name: "Settings",
      icon: Settings,
      color: "#6ee7b7",
      path: "/settings",
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20  "
      } `}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 flex flex-col border-r  border-gray-700 ">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} className="hidden lg:block" />
        </motion.button>

        <nav className="mt-8 flex-grow-">
          {sidebarItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors  mb-2 ">
                <item.icon
                  size={24}
                  style={{ color: item.color }}
                  className="min-w-5"
                />

                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}

export default Sidebar;
