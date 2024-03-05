import { motion } from 'framer-motion';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
          <p className="text-xl mb-4">[Your Role]</p>
          <p className="text-lg">Based in [Your Location]</p>
        </div>
      </div>
    </main>
  );
}
