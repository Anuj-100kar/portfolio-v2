import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function OutlineButton({ children }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-blue-500 transition"
    >
      {children}
    </motion.button>
  );
}