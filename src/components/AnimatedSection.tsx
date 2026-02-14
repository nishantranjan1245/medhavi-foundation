import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Skip entrance animations on page refresh to prevent upward drift
  const [isRefresh] = useState(() => !!sessionStorage.getItem('__medhavi_visited'));

  return (
    <motion.div
      ref={ref}
      initial={isRefresh ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={isRefresh ? { duration: 0 } : { duration: 0.6, delay, ease: "easeOut" }}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
