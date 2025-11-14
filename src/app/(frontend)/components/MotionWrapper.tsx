"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number; // optional delay
  className?: string; // optional className
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, delay = 0, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }} // faster
      className={className}
    >
      {children}
    </motion.div>
  );
};


export default MotionWrapper;
