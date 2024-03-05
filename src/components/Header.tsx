import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-darkPrimary text-lightPrimary ...">
      <div>
        <h1 className="text-4xl font-bold ...">
          <Link href="/">Oleksii Pudlo</Link>
        </h1>
        <h2 className="mt-3 text-lg ...">Your Position</h2>
        <p className="mt-4 ...">Your Professional Tagline</p>
        <nav aria-label="Main navigation">
          {/* Navigation Links */}
        </nav>
      </div>
      <div>
        {/* Social Links */}
      </div>
    </header>
  );
}
