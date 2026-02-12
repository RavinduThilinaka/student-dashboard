// components/forms/CourseForm.tsx
'use client'

import { useState } from 'react'

interface CourseFormProps {
  onSubmit: (data: any) => void
  onCancel: () => void
}

export default function CourseForm({ onSubmit, onCancel }: CourseFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: '',
    maxStudents: '',
    category: 'Programming',
    level: 'Beginner'
  })

  const [errors, setErrors] = useState<any>({})

  const validate = () => {
    const newErrors: any = {}
    
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    if (!formData.instructor.trim()) newErrors.instructor = 'Instructor is required'
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required'
    if (!formData.maxStudents) newErrors.maxStudents = 'Max students is required'
    
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3"> {/* Reduced from space-y-4 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Course Title *</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter course title"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          rows={2} 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter course description"
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3"> {/* Reduced from gap-4 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Instructor *</label>
          <input
            type="text"
            value={formData.instructor}
            onChange={(e) => setFormData({...formData, instructor: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Instructor name"
          />
          {errors.instructor && <p className="text-red-500 text-xs mt-1">{errors.instructor}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Duration *</label>
          <input
            type="text"
            value={formData.duration}
            onChange={(e) => setFormData({...formData, duration: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 12 weeks"
          />
          {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3"> {/* Reduced from gap-4 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max Students *</label>
          <input
            type="number"
            value={formData.maxStudents}
            onChange={(e) => setFormData({...formData, maxStudents: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="30"
          />
          {errors.maxStudents && <p className="text-red-500 text-xs mt-1">{errors.maxStudents}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Programming</option>
            <option>Design</option>
            <option>Data Science</option>
            <option>Computer Science</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
        <select
          value={formData.level}
          onChange={(e) => setFormData({...formData, level: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      <div className="flex gap-3 pt-2"> {/* Reduced from pt-4 */}
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Course
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}