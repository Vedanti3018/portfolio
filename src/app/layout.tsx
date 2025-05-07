import "./globals.css"; // if using Tailwind
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'

import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Vedanti Saxena",
  description: "AI Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
      <header className="px-8 py-6 flex justify-between items-center bg-black border-b border-gray-800">
          {/* Left: Logo or Email */}
          <div className="flex items-center space-x-2 text-white">
            <MdEmail className="text-2xl border border-gray-600 rounded-full p-1" />
            <span className="text-lg font-semibold">vedanti3018@gmail.com</span>
          </div>

          {/* Center: Navigation */}
          <nav className="space-x-8 text-white text-sm md:text-base font-medium tracking-wide">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
