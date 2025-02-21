import {
  AlertTriangle,
  DollarSign,
  Package,
  TrendingUp,
  Edit,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import { Table } from "../components/tables";
import { CategoryDistributionChart, SalesChart } from "../components/charts";

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
    { month: "Jan", sales: 4567 },
    { month: "Feb", sales: 7432 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 6300 },
    { month: "May", sales: 3400 },
    { month: "Jun", sales: 5678 },
  ];
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      category: "Electronics",
      price: 59.99,
      stock: 143,
      sales: 1200,
    },
    {
      id: 2,
      name: "Leather Wallet",
      category: "Accessories",
      price: 39.99,
      stock: 89,
      sales: 800,
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Electronics",
      price: 199.99,
      stock: 56,
      sales: 650,
    },
    {
      id: 4,
      name: "Yoga Mat",
      category: "Fitness",
      price: 29.99,
      stock: 210,
      sales: 950,
    },
    {
      id: 5,
      name: "Coffee Maker",
      category: "Home",
      price: 79.99,
      stock: 78,
      sales: 720,
    },
  ];

  const categoryData = [
    { name: "Electronics", value: 4500 },
    { name: "Clothing", value: 3200 },
    { name: "Home & Garden", value: 2800 },
    { name: "Books", value: 2100 },
    { name: "Sports & Outdoors", value: 1900 },
  ];
  const titles = ["Name", "Category", "Price", "stock", "sales", "Actions"];
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

        <Table
          title="Product List"
          placeholder="Search Products..."
          data={products}
          param1="name"
          param2="category"
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
                {filteredData.map((product) => (
                  <motion.tr
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      $ {product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {product.stock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {product.sales}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </>
          )}
        </Table>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <SalesChart
            data={salesDate}
            title={"Sales Overview"}
            param2={"sales"}
            param={"month"}
          />
          <CategoryDistributionChart
            title={"Category Distribution"}
            data={categoryData}
            labelLine={false}
          />
        </div>
      </main>
    </div>
  );
}

export default Products;
