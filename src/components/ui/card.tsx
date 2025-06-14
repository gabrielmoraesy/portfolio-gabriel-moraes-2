'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  date?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, date, children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`rounded-lg bg-[#f3f3f3] dark:bg-[#232323] border border-card dark:border-[#27272a] border-gray-300 p-6 mb-6 w-full max-w-full ${className || ''}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
        <div>
          <h1 className="text-lg font-semibold text-blue-500 break-words">{title}</h1>
          {subtitle && <p className="text-sm text-gray-scale-500 break-words">{subtitle}</p>}
        </div>
        {date && (
          <div className="p-2 rounded-lg text-xs font-medium text-[#18181b] dark:text-white w-fit min-w-[110px] text-center">
            {date}
          </div>
        )}
      </div>
      <div className="text-sm break-words">
        {children}
      </div>
    </motion.div>
  );
};

export default Card; 