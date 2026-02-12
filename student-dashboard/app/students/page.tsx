// app/students/page.tsx
'use client'

import { useState } from 'react'
import { Search, Plus, GraduationCap, Mail, Phone, X, Loader2 } from 'lucide-react'
import StudentForm from '@/components/forms/StudentForm'

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Dummy data
  const [students, setStudents] = useState([
    { id: 1, name: 'Ravindu Silva', email: 'ravindu@gmail.com', phone: '+94 77 123 4567', status: 'Active', courses: 4, year: 3, gpa: 3.8, department: 'Computer Science' },
    { id: 2, name: 'Praveen Kumar', email: 'praveen@gmail.com', phone: '+94 71 234 5678', status: 'Active', courses: 3, year: 2, gpa: 3.5, department: 'Software Engineering' },
    { id: 3, name: 'Omath Perera', email: 'ometh@gmail.com', phone: '+94 77 345 6789', status: 'Graduated', courses: 5, year: 4, gpa: 3.9, department: 'Data Science' },
    { id: 4, name: 'Kaweesha Gamage', email: 'kaweesha@gmail.com', phone: '+94 71 456 7890', status: 'Inactive', courses: 2, year: 1, gpa: 3.2, department: 'Computer Science' },
    { id: 5, name: 'Nimali Fernando', email: 'nimali@gmail.com', phone: '+94 77 567 8901', status: 'Active', courses: 4, year: 3, gpa: 3.7, department: 'Information Technology' }
  ])

  const statuses = ['all', 'Active', 'Inactive', 'Graduated']
  const years = ['all', '1', '2', '3', '4']

  const handleAddStudent = async (studentData: any) => {
    setIsLoading(true)
    setError('')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newStudent = {
        id: students.length + 1,
        ...studentData,
        courses: 0,
        gpa: 0
      }
      
      setStudents([...students, newStudent])
      setIsFormOpen(false)
    } catch (err) {
      setError('Failed to add student')
    } finally {
      setIsLoading(false)
    }
  }

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus
    const matchesYear = selectedYear === 'all' || student.year.toString() === selectedYear
    return matchesSearch && matchesStatus && matchesYear
  })

  // Loading State
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading students...</p>
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
            <GraduationCap className="h-8 w-8 text-red-600" />
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
          <h1 className="text-2xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-600">Manage your students</p>
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Student
        </button>
      </div>

      {/* Form Modal - NO SCROLLBAR */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-lg w-full"> {/* Removed overflow-y-auto and max-h */}
            <div className="p-5 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Add New Student</h2>
              <button onClick={() => setIsFormOpen(false)} className="p-1 hover:bg-gray-100 rounded">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5">
              <StudentForm onSubmit={handleAddStudent} onCancel={() => setIsFormOpen(false)} />
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
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status === 'all' ? 'All Status' : status}</option>
            ))}
          </select>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {years.map(year => (
              <option key={year} value={year}>{year === 'all' ? 'All Years' : `Year ${year}`}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-600">
        Showing {filteredStudents.length} of {students.length} students
      </p>

      {/* Students Table */}
      {filteredStudents.length > 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Year</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">GPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <span className="text-sm font-semibold text-white">{student.name.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{student.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-3.5 w-3.5 mr-1" />
                        {student.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Phone className="h-3.5 w-3.5 mr-1" />
                        {student.phone}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{student.department}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        student.status === 'Active' ? 'bg-green-100 text-green-800' :
                        student.status === 'Graduated' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-center">Year {student.year}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-sm font-bold ${
                        student.gpa >= 3.5 ? 'text-green-600' :
                        student.gpa >= 3.0 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {student.gpa.toFixed(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        // Empty State
        <div className="bg-white p-12 text-center rounded-lg border border-gray-200">
          <div className="bg-gray-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <GraduationCap className="h-8 w-8 text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No students found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          <button 
            onClick={() => {
              setSearchQuery('')
              setSelectedStatus('all')
              setSelectedYear('all')
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