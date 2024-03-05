import '../styles/globals.css'
import { motion } from 'framer-motion';
import Header from '../components/Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <Header />
        </div>
      </div>
    </main>
  );
}