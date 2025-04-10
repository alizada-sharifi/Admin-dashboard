import { CircleCheck, Clock, DollarSign, ShoppingBag, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import { Table } from "../components/tables";
import { CategoryDistributionChart, SalesChart } from "../components/charts";

const StatCardInfo = [
  {
    name: "Total Orders",
    icon: ShoppingBag,
    value: "12,345",
    color: "#6366f1",
  },
  {
    name: "Pending Orders",
    icon: Clock,
    value: "80",
    color: "#f59e0b",
  },
  {
    name: "Completed Orders",
    icon: CircleCheck,
    value: "12,265",
    color: "#10b981",
  },
  {
    name: "Total Revenue",
    icon: DollarSign,
    value: "$98,234",
    color: "#ec4899",
  },
];
const salesDate = [
  { date: "01/01", sales: 10 },
  { date: "01/02", sales: 20 },
  { date: "01/03", sales: 14 },
  { date: "01/04", sales: 14 },
  { date: "01/05", sales: 16 },
  { date: "01/06", sales: 4 },
  { date: "01/07", sales: 34 },
  { date: "01/08", sales: 34 },
  { date: "01/09", sales: 67 },
  { date: "01/10", sales: 23 },
  { date: "01/11", sales: 23 },
];
const categoryData = [
  { name: "Pending", value: 30 },
  { name: "Processing", value: 45 },
  { name: "Shipped", value: 60 },
  { name: "Delivered", value: 120 },
];
const titles = ["order id", "customer", "total", "status", "date", "Actions"];
const orders = [
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

function Order() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Orders"} />

      <main className="container py-6">
        {/* ==========statCards sectionn ============== */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {StatCardInfo.map((item) => (
            <StatCard {...item} key={item.name} />
          ))}
        </motion.div>
        {/* ===========charts section ============ */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesChart
            data={salesDate}
            title={"Sales Overview"}
            param={"date"}
            param2={"sales"}
          />
          <CategoryDistributionChart
            title={"Order Status Distribution"}
            data={categoryData}
          />
        </div>

        {/* <OrderTable /> */}

        <Table
          title="Order List"
          placeholder="Search Orders..."
          data={orders}
          param1="id"
          param2="customer"
        >
          {(filteredData) => (
            <>
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
                {filteredData.map((order) => (
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
                      <div className="text-sm text-gray-300">
                        {order.customer}
                      </div>
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
            </>
          )}
        </Table>
      </main>
    </div>
  );
}

export default Order;
