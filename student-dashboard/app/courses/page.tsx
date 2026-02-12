// app/courses/page.tsx
'use client'

import { useState } from 'react'
import { Search, Plus, X, BookOpen, Loader2 } from 'lucide-react'
import CourseCard from "@/components/ui/CourseCard"
import CourseForm from "@/components/forms/CourseForm"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Dummy data
  const [courses, setCourses] = useState([
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
    }
  ])

  const categories = ['all', 'Programming', 'Design', 'Data Science', 'Computer Science']
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced']

  const handleAddCourse = async (courseData: any) => {
    setIsLoading(true)
    setError('')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newCourse = {
        id: courses.length + 1,
        ...courseData,
        students: 0,
        maxStudents: parseInt(courseData.maxStudents)
      }
      
      setCourses([...courses, newCourse])
      setIsFormOpen(false)
    } catch (err) {
      setError('Failed to add course')
    } finally {
      setIsLoading(false)
    }
  }

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  // Loading State
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading courses...</p>
        </div>
      </div>
    )
  }

  // Error State
  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Something went wrong</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => setError('')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
          <p className="text-gray-600">Manage your courses</p>
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Course
        </button>
      </div>

      {/* Form Modal - NO SCROLLBAR */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-lg w-full"> {/* Removed overflow-y-auto and max-h */}
            <div className="p-5 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Add New Course</h2>
              <button onClick={() => setIsFormOpen(false)} className="p-1 hover:bg-gray-100 rounded">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5">
              <CourseForm onSubmit={handleAddCourse} onCancel={() => setIsFormOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
            ))}
          </select>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {levels.map(level => (
              <option key={level} value={level}>{level === 'all' ? 'All Levels' : level}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-600">
        Showing {filteredCourses.length} of {courses.length} courses
      </p>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        // Empty State
        <div className="bg-white p-12 text-center rounded-lg border border-gray-200">
          <div className="bg-gray-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          <button 
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory('all')
              setSelectedLevel('all')
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}