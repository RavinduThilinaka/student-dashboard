import { GraduationCap, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Menu className="h-6 w-6 md:hidden" />
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">
            Student Dashboard
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <span className="text-gray-600">Welcome, Admin</span>
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="font-semibold text-blue-600">A</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}