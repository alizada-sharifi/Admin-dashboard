import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import Button from "./button/Button";

function DangerZone() {
  return (
    <motion.div
      className="bg-red-900/50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex gap-3 items-center">
        <Trash2 className="text-red-400" size="24" />
        <h2 className="text-xl font-semibold text-gray-100">Danger Zone</h2>
      </div>

      <p className="text-gray-300 my-4">
        Permanently delete your account and all of your content.
      </p>
      <Button
        text={"Delete Account"}
        background={"bg-red-600"}
        path={"/deleteAccount"}
      />
    </motion.div>
  );
}

export default DangerZone;
