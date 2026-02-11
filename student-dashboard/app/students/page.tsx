'use client'

import { useState } from 'react'
import { Search, Plus, GraduationCap, Mail, Phone } from 'lucide-react'

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const students = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '+1 (555) 123-4567', status: 'Active', courses: 4, year: 3, gpa: 3.8 },
    { id: 2, name: 'Bob Williams', email: 'bob@example.com', phone: '+1 (555) 987-6543', status: 'Active', courses: 3, year: 2, gpa: 3.5 },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '+1 (555) 456-7890', status: 'Graduated', courses: 5, year: 4, gpa: 3.9 },
    { id: 4, name: 'Diana Miller', email: 'diana@example.com', phone: '+1 (555) 234-5678', status: 'Inactive', courses: 2, year: 1, gpa: 3.2 },
  ]

  const statuses = ['all', 'Active', 'Inactive', 'Graduated']

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <GraduationCap className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Students</h1>
          </div>
          <p className="text-gray-500 mt-1">Manage student information and enrollment</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm">
          <Plus className="h-4 w-4" />
          Add Student
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search students by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
            />
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Status' : status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing <span className="font-medium text-gray-900">{filteredStudents.length}</span> students
        </p>
        {filteredStudents.length > 0 && (
          <span className="text-xs text-gray-500">
            Last updated: Today
          </span>
        )}
      </div>

      {/* Students Table */}
      {filteredStudents.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Courses</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Year</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">GPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3 shadow-sm">
                          <span className="text-sm font-semibold text-white">
                            {student.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-900">{student.name}</span>
                          <p className="text-xs text-gray-500">ID: STU{student.id.toString().padStart(3, '0')}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                        <span className="text-sm">{student.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Phone className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                        <span className="text-sm">{student.phone}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        student.status === 'Active' ? 'bg-green-100 text-green-800 border border-green-200' :
                        student.status === 'Graduated' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                        'bg-gray-100 text-gray-800 border border-gray-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          student.status === 'Active' ? 'bg-green-600' :
                          student.status === 'Graduated' ? 'bg-blue-600' :
                          'bg-gray-600'
                        }`}></span>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 text-center font-medium">
                      {student.courses}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 text-center">
                      Year {student.year}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-center">
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">No students found</h3>
          <p className="text-sm text-gray-500 mb-5">Try adjusting your search or filter</p>
          <button 
            onClick={() => {
              setSearchQuery('')
              setSelectedStatus('all')
            }}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}