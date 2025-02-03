'use client';
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrendingUp, BookOpen, Newspaper } from 'lucide-react'

export default function DashboardPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="p-6 animated-bg min-h-screen">
      <motion.div 
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold mb-6 gradient-text">Welcome to Your FinG Dashboard</h1>
        <p className="mb-8 text-lg text-gray-700">Select an option from the sidebar or choose one of the quick links below:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/dashboard/invest" className="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors card-hover">
            <TrendingUp className="w-12 h-12 mb-4 text-blue-500" />
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">Invest</h2>
            <p className="text-blue-700">Explore investment opportunities</p>
          </Link>
          <Link href="/dashboard/learn" className="p-6 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors card-hover">
            <BookOpen className="w-12 h-12 mb-4 text-teal-500" />
            <h2 className="text-2xl font-semibold mb-2 text-teal-800">Learn</h2>
            <p className="text-teal-700">Enhance your financial knowledge</p>
          </Link>
          <Link href="/dashboard/news" className="p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors card-hover">
            <Newspaper className="w-12 h-12 mb-4 text-purple-500" />
            <h2 className="text-2xl font-semibold mb-2 text-purple-800">News</h2>
            <p className="text-purple-700">Stay updated with financial news</p>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

