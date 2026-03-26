"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

export const BentoItem = ({
  children,
  className,
  title,
  header,
  icon,
}: BentoItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "row-span-1 rounded-3xl group/bento glass-card p-6 flex flex-col justify-between space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-300 text-sm">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
