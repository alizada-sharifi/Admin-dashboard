import { motion } from "framer-motion";
import { Zap, Users, ShoppingBag, ChartNoAxesColumn } from "lucide-react";
import {
  Header,
  StatCard,
  SalesChart,
  CategoryDistributionChart,
  SalesChannelChart,
} from "../components";
function Overview() {
  const StatCardInfo = [
    {
      name: "Total Sales",
      icon: Zap,
      value: "$12,345",
      color: "#6366f1",
    },
    {
      name: "New Users",
      icon: Users,
      value: "1,234",
      color: "#885cf6",
    },
    {
      name: "Total Products",
      icon: ShoppingBag,
      value: "897",
      color: "#ec4899",
    },
    {
      name: "Conversion Rate",
      icon: ChartNoAxesColumn,
      value: "15.6%",
      color: "#10b981",
    },
  ];
  const salesDate = [
    { name: "Jul", sales: 3470 },
    { name: "Aug", sales: 3100 },
    { name: "Sep", sales: 5100 },
    { name: "Oct", sales: 4800 },
    { name: "Nov", sales: 5200 },
    { name: "Dec", sales: 5470 },
    { name: "Jan", sales: 6000 },
    { name: "Feb", sales: 5890 },
    { name: "Mar", sales: 6800 },
    { name: "Apr", sales: 6300 },
    { name: "Jun", sales: 7000 },
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

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

        {/* ================= charts section ================ */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <SalesChart salesDate={salesDate} title={"Sales Overview"} />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}

export default Overview;
