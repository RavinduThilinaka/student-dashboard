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
  ChevronRight,
  LogOut,
  Bell,
  HelpCircle
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/', gradient: 'from-blue-500 to-blue-600' },
  { icon: BookOpen, label: 'Courses', href: '/courses', gradient: 'from-purple-500 to-purple-600' },
  { icon: Users, label: 'Students', href: '/students', gradient: 'from-green-500 to-green-600' },
  { icon: User, label: 'Profile', href: '/profile', gradient: 'from-pink-500 to-pink-600' },
  { icon: Settings, label: 'Settings', href: '#', gradient: 'from-gray-500 to-gray-600' },
]

const bottomMenuItems = [
  { icon: Bell, label: 'Notifications', href: '#', gradient: 'from-yellow-500 to-yellow-600' },
  { icon: HelpCircle, label: 'Help', href: '#', gradient: 'from-indigo-500 to-indigo-600' },
  { icon: LogOut, label: 'Logout', href: '#', gradient: 'from-red-500 to-red-600' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <aside 
      className={`h-[calc(100vh-4rem)] sticky top-16 ${
        collapsed ? 'w-20' : 'w-72'
      } transition-all duration-500 ease-in-out bg-white shadow-xl border-r border-gray-100`}
    >
      <div className="flex flex-col h-full relative">
     
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        
      
        <div className={`px-4 py-6 flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduPro
              </span>
            </div>
          )}
          {collapsed && (
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
          )}
        </div>

        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg z-10"
        >
          {collapsed ? 
            <ChevronRight className="h-3 w-3 text-gray-600" /> : 
            <ChevronLeft className="h-3 w-3 text-gray-600" />
          }
        </button>

      
        <nav className="flex-1 px-3 py-6">
          <div className="mb-6">
            {!collapsed && (
              <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Main Menu
              </p>
            )}
          </div>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const isHovered = hoveredItem === item.label
              
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`relative flex items-center ${
                      collapsed ? 'justify-center' : 'gap-4'
                    } p-3 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    
                    {isActive && (
                      <div className="absolute left-0 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full" />
                    )}
                    
                   
                    <div className={`relative p-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-white shadow-md' 
                        : isHovered 
                        ? `bg-gradient-to-r ${item.gradient} shadow-md`
                        : ''
                    }`}>
                      <item.icon className={`h-5 w-5 transition-all duration-300 ${
                        isActive
                          ? 'text-blue-600'
                          : isHovered
                          ? 'text-white'
                          : 'text-gray-500 group-hover:text-gray-700'
                      }`} />
                      
                      
                      {item.label === 'Notifications' && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
                      )}
                    </div>

                    
                    {!collapsed && (
                      <span className={`flex-1 font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-blue-600' 
                          : isHovered
                          ? 'text-gray-900'
                          : ''
                      }`}>
                        {item.label}
                      </span>
                    )}

                  
                    {collapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                        {item.label}
                      </div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

     
        <div className="px-3 py-6 border-t border-gray-100">
          <ul className="space-y-2">
            {bottomMenuItems.map((item) => {
              const isHovered = hoveredItem === item.label
              
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`relative flex items-center ${
                      collapsed ? 'justify-center' : 'gap-4'
                    } p-3 rounded-xl transition-all duration-300 group text-gray-600 hover:bg-gray-50`}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className={`relative p-2 rounded-lg transition-all duration-300 ${
                      isHovered ? `bg-gradient-to-r ${item.gradient} shadow-md` : ''
                    }`}>
                      <item.icon className={`h-5 w-5 transition-all duration-300 ${
                        isHovered ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'
                      }`} />
                    </div>
                    
                    {!collapsed && (
                      <span className="flex-1 font-medium">
                        {item.label}
                      </span>
                    )}

                    {collapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                        {item.label}
                      </div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          
          {!collapsed && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 px-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}