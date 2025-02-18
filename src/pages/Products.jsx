import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { SalesChart, CategoryDistributionChart, ProductTable ,Header,StatCard } from "../components";

function Products() {
  const StatCardInfo = [
    {
      name: "Total Products",
      icon: Package,
      value: "3445",
      color: "#6366f1",
    },
    {
      name: "Top Selling",
      icon: TrendingUp,
      value: "99",
      color: "#10b981",
    },
    {
      name: "Low Stock",
      icon: AlertTriangle,
      value: "30",
      color: "#f59e0b",
    },
    {
      name: "Total Revenue",
      icon: DollarSign,
      value: "$345,980",
      color: "#ef4444",
    },
  ];
  const salesDate = [
    { name: "Jan", sales: 4567 },
    { name: "Feb", sales: 7432 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 6300 },
    { name: "May", sales: 3400 },
    { name: "Jun", sales: 5678 },
  ];
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

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

        <ProductTable/>
        
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <SalesChart salesDate={salesDate} />
          <CategoryDistributionChart />
        </div>
        
      </main>
    </div>
  );
}

export default Products;
