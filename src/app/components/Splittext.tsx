'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface SplitTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text, delay = 0.05, className = '' }) => {
  const words = text.split(' ');

  return (
    <div className={`overflow-hidden inline-block ${className}`}>
      {words.map((word, i) => (
        <motion.span
  key={i}
  className="inline-block mr-2"
  initial={{ y: '100%', opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }} // animate only once when in view
  transition={{
    delay: i * delay,
    duration: 0.5,
    ease: 'easeOut',
  }}
>
  {word}
</motion.span>
      ))}
    </div>
  );
};

export default SplitText;
