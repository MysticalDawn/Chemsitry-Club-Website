import { motion } from "framer-motion";
interface positionProp {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}
export default function Cursor({ position }: positionProp) {
  return (
    <motion.div
      className="position-absolute z-0 h-10 rounded-full bg-white"
      animate={position}
    />
  );
}
