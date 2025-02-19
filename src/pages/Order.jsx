import { CircleCheck, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import  Header  from "../components/Header";
import  StatCard  from "../components/StatCard";
import { OrderTable } from "../components/tables";
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
        <OrderTable />
      </main>
    </div>
  );
}

export default Order;
