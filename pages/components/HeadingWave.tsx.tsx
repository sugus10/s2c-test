import { motion, Variants } from "framer-motion";

interface AnimateWordProps {
  title: string;
}

const containerVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const AnimateHeading: React.FC<AnimateWordProps> = ({ title }) => {
  return (
    <motion.h1
      className="text-5xl up font-bold text-white flex flex-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {title.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimateHeading;
