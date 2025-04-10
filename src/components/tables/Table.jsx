import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

function Table({ title, placeholder, children, data, param1, param2 }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) =>
          item[param1].toLowerCase().includes(searchTerm) ||
          item[param2].toLowerCase().includes(searchTerm)
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data, param1, param2]);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col gap-2 md:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          {children(filteredData)}
        </table>
      </div>
    </motion.div>
  );
}

export default Table;
