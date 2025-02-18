import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Search } from "lucide-react";

function OrderTable() {
  const titles = ["order id", "customer", "total", "status", "date", "Actions"];
  const ordersData = [
    {
      id: "ORD001",
      customer: "John Doe",
      total: "$233.78",
      status: "Delivered",
      date: "2025-01-01",
    },
    {
      id: "ORD002",
      customer: "Reza Ahmadi",
      total: "$345.76",
      status: "Processing",
      date: "2025-01-02",
    },
    {
      id: "ORD003",
      customer: "Ali Akbari",
      total: "$980.89",
      status: "Shipped",
      date: "2025-01-03",
    },
    {
      id: "ORD004",
      customer: "Sharam Hussaini",
      total: "$1000",
      status: "Pending",
      date: "2025-01-04",
    },
    {
      id: "ORD005",
      customer: "Eva Martinez",
      total: "$345",
      status: "Delivered",
      date: "2025-01-05",
    },
    {
      id: "ORD006",
      customer: "David Lee",
      total: "$999",
      status: "Canceled",
      date: "2025-01-06",
    },
    {
      id: "ORD007",
      customer: "Grace Taylor",
      total: "$909",
      status: "Delivered",
      date: "2025-01-07",
    },
    {
      id: "ORD008",
      customer: "Alice Brown",
      total: "$123",
      status: "Shipped",
      date: "2025-01-08",
    },
    {
      id: "ORD009",
      customer: "Charlie Wilson",
      total: "$500",
      status: "Pending",
      date: "2025-01-09",
    },
    {
      id: "ORD010",
      customer: "Bob Johnson",
      total: "$25000",
      status: "Delivered",
      date: "2025-01-10",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(ordersData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = ordersData.filter(
      (oreder) =>
        oreder.id.toLowerCase().includes(term) ||
        oreder.customer.toLowerCase().includes(term) 
        
    );

    setFilteredOrders(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Orders..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {titles.map((title, index) => (
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                  key={titles[index]}
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredOrders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{order.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{order.customer}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{order.total}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={` px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-blue-100 
                      ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "Pending"
                          ? "bg-red-100 text-red-800"
                          : "bg-red-500 text-white"
                      }
                    } `}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{order.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 ">
                  <button className="text-indigo-400 hover:text-indigo-300 ml-5 ">
                    <Eye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default OrderTable;
