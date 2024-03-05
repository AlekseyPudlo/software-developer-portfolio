import type { Metadata } from 'next';

import { motion } from 'framer-motion';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'Oleksii Pudlo',
  description: 'Your Professional Tagline'
};

export default function Home() {
  return (
    <div>
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Your main content goes here */}
      </motion.main>
    </div>
  );
}