'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Wallet, BookOpen, History, Settings, HelpCircle, Newspaper } from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Invest', icon: Wallet, path: '/dashboard/invest' },
  { name: 'Learn', icon: BookOpen, path: '/dashboard/learn' },
  { name: 'News', icon: Newspaper, path: '/dashboard/news' },
  { name: 'History', icon: History, path: '/dashboard/history' },
  { name: 'Profile', icon: Settings, path: '/dashboard/profile' },
  { name: 'Help', icon: HelpCircle, path: '/dashboard/help' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 h-screen w-64 bg-[#00205B] text-white p-4">
      <div className="flex items-center mb-8">
        <h1 className="text-2xl font-bold">FinG</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    pathname === item.path
                      ? 'bg-white/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

