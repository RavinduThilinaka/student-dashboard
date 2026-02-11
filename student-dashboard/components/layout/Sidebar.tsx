'use client'

import { useState } from 'react'
import { 
  Home, 
  BookOpen, 
  Users, 
  User, 
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: BookOpen, label: 'Courses', href: '/courses' },
  { icon: Users, label: 'Students', href: '/students' },
  { icon: BarChart3, label: 'Analytics', href: '#' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: Settings, label: 'Settings', href: '#' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside className={`h-[calc(100vh-4rem)] sticky top-16 ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 border-r border-gray-200 bg-white`}>
      <div className="flex flex-col h-full">
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-4 hover:bg-gray-50 flex items-center justify-center border-b"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}