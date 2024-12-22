import React from 'react';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
}

export function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <motion.h2 className='text-2xl font-semibold flex items-center'>
      {icon}
      {title}
    </motion.h2>
  );
}
