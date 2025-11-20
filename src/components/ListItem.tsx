import { motion } from "motion/react";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface ListItemProps {
    name: string;
    image: string
}

export default function ListItem({ item }: { item: ListItemProps }) {

    const { ref, scale, opacity, x } = useScrollAnimation();

  return (
    <li ref={ref}>
        <motion.img src={item.image} alt={item.name || ""} style={{ scale }} />
        <motion.p style={{ opacity, x, y: 5 }}>{item.name.toUpperCase()}</motion.p>
    </li>
  )
}
