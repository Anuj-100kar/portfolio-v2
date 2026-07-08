import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
    >
      {children}
    </motion.button>
  );
}