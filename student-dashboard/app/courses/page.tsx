'use client'

import { useState } from 'react'
import { 
  Search, 
  Plus, 
  Filter, 
  Grid3x3, 
  List, 
  SlidersHorizontal,
  BookOpen
} from 'lucide-react'
import CourseCard from "@/components/ui/CourseCard"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const courses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      description: 'Learn HTML, CSS, and JavaScript from scratch',
      instructor: 'John Doe',
      duration: '12 weeks',
      students: 45,
      maxStudents: 50,
      category: 'Programming',
      level: 'Beginner',
    },
    {
      id: 2,
      title: 'React & Next.js Mastery',
      description: 'Build modern web applications with React and Next.js',
      instructor: 'Jane Smith',
      duration: '10 weeks',
      students: 38,
      maxStudents: 40,
      category: 'Programming',
      level: 'Advanced',
    },
    {
      id: 3,
      title: 'Data Structures & Algorithms',
      description: 'Master essential computer science concepts',
      instructor: 'Dr. Robert Chen',
      duration: '14 weeks',
      students: 60,
      maxStudents: 60,
      category: 'Computer Science',
      level: 'Intermediate',
    },
    {
      id: 4,
      title: 'UI/UX Design Principles',
      description: 'Learn user-centered design, wireframing, and prototyping',
      instructor: 'Sarah Johnson',
      duration: '8 weeks',
      students: 32,
      maxStudents: 35,
      category: 'Design',
      level: 'Beginner',
    },
    {
      id: 5,
      title: 'Python for Data Science',
      description: 'Master Python programming for data analysis',
      instructor: 'Dr. Emily Watson',
      duration: '12 weeks',
      students: 52,
      maxStudents: 55,
      category: 'Data Science',
      level: 'Intermediate',
    },
  ]

  const categories = ['all', 'Programming', 'Design', 'Data Science', 'Computer Science']
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced']

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="space-y-6">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">📚 Courses</h1>
          <p className="text-gray-600">Manage and track all your courses</p>
        </div>
        <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-2 shadow-lg">
          <Plus className="h-5 w-5" />
          Add New Course
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex flex-col lg:flex-row gap-4">
        
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {levels.map(level => (
                <option key={level} value={level}>
                  {level === 'all' ? 'All Levels' : level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all') && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">Filters:</span>
            {searchQuery && (
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm flex items-center gap-1">
                Search: {searchQuery}
                <button onClick={() => setSearchQuery('')} className="ml-1 hover:text-blue-800">×</button>
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm flex items-center gap-1">
                {selectedCategory}
                <button onClick={() => setSelectedCategory('all')} className="ml-1 hover:text-purple-800">×</button>
              </span>
            )}
            {selectedLevel !== 'all' && (
              <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm flex items-center gap-1">
                {selectedLevel}
                <button onClick={() => setSelectedLevel('all')} className="ml-1 hover:text-green-800">×</button>
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-gray-900">{filteredCourses.length}</span> courses
        </p>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          <button 
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory('all')
              setSelectedLevel('all')
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}