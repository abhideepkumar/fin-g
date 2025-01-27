'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Home, BookOpen, TrendingUp, Users, LogIn } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';

const navigation = [
  { name: 'home', href: '/', icon: Home },
  { name: 'learn', href: '/learn', icon: BookOpen },
  { name: 'invest', href: '/invest', icon: TrendingUp },
  { name: 'community', href: '/community', icon: Users },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, language } = useLanguage()
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-bold gradient-text">FinG</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`text-gray-800 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300 ${
                item.href === pathname ? 'text-blue-600 font-semibold' : ''
              }`}
              aria-current={item.href === pathname ? 'page' : undefined}
            >
              <item.icon className="w-5 h-5 mr-1" />
              {t(item.name)}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/register" 
            className="btn-primary"
          >
            {t('register')}
          </Link>
          <Link 
            href="/login" 
            className="btn-secondary"
          >
            <LogIn className="w-4 h-4 mr-2" />
            {t('login')}
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium flex items-center transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {t(item.name)}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/register"
                className="btn-primary w-full text-center mb-2"
                onClick={() => setIsOpen(false)}
              >
                {t('register')}
              </Link>
              <Link
                href="/login"
                className="btn-secondary w-full text-center flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="w-4 h-4 mr-2" />
                {t('login')}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

