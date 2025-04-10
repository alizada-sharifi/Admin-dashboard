import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function StatCard2({ value, name, icon: Icon, change }) {
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 "
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5) " }}
    >
      <div className="px-4 py-5 sm:p-6">
        <div className="flex justify-between items-center">
          <div className=" text-sm font-medium text-gray-400 mb-1">
            {name}
            <p className=" text-xl md:text-3xl font-semibold text-gray-100">
              {value}
            </p>
          </div>

          <div
            className={`p-3 rounded-full  ${
              change >= 0 ? "bg-green-500/20" : "bg-red-500/20"
            } `}
          >
            {
              <Icon
                className={`size-6 ${
                  change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              />
            }
          </div>
        </div>

        <div
          className={`mt-4 items-center flex ${
            change >= 0 ? "text-green-500" : "text-red-500"
          } `}
        >
          {change >= 0 ? <ArrowUpRight /> : <ArrowDownRight />}
          <span className="ml-1 text-sm font-medium"> {Math.abs(change)}%</span>
          <span className="ml-2 text-sm text-gray-400">vs last period</span>
        </div>
      </div>
    </motion.div>
  );
}

export default StatCard2;
