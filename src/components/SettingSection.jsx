import { motion  } from "framer-motion";

function SettingSection({ icon: Icon, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 py-6 rounded-lg border border-gray-700 space-y-6 bg-gray-800/50 "
    >
      <div className="flex gap-3 items-center">
        <Icon className="text-indigo-400" size="24" />
        <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
      </div>

      {children}
    </motion.div>
  );
}

export default SettingSection;
