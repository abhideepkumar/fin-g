'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Home, BookOpen, Dumbbell, PiggyBank, Users } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const navigation = [
  { name: 'home', href: '/', icon: Home },
  { name: 'learn', href: '/learn', icon: BookOpen },
  { name: 'practice', href: '/practice', icon: Dumbbell },
  { name: 'invest', href: '/invest', icon: PiggyBank },
  { name: 'community', href: '/community', icon: Users },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, language } = useLanguage()

  return (
    <header className="bg-saffron-100 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-peacock-600 font-logo">फिंग</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`text-peacock-800 hover:text-saffron-600 px-3 py-2 rounded-md text-sm font-medium flex items-center ${language === 'hi' ? 'font-hindi' : ''}`}
            >
              <item.icon className="w-5 h-5 mr-1" />
              {t(item.name)}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/register" 
            className="bg-saffron-500 text-white px-4 py-2 rounded-full hover:bg-saffron-600 transition duration-300 text-sm font-medium"
          >
            {t('register')}
          </Link>
          <Link 
            href="/login" 
            className="text-peacock-800 hover:text-peacock-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            {t('login')}
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-peacock-800" /> : <Menu size={24} className="text-peacock-800" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-saffron-50">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-peacock-800 hover:bg-saffron-200 block px-3 py-2 rounded-md text-base font-medium flex items-center ${language === 'hi' ? 'font-hindi' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {t(item.name)}
              </Link>
            ))}
            <div className="pt-4 border-t border-saffron-200">
              <Link
                href="/register"
                className="block w-full bg-saffron-500 text-white px-4 py-2 rounded-full hover:bg-saffron-600 transition duration-300 text-sm font-medium text-center mb-2"
                onClick={() => setIsOpen(false)}
              >
                {t('register')}
              </Link>
              <Link
                href="/login"
                className="block w-full text-center text-peacock-800 hover:text-peacock-600 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('login')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

