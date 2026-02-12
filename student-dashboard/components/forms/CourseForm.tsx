
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
    
   
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }
  
    if (!formData.instructor.trim()) {
      newErrors.instructor = 'Instructor is required'
    }
    
  
    if (!formData.duration.trim()) {
      newErrors.duration = 'Duration is required'
    } else if (!/^\d{1,2}$/.test(formData.duration)) {
      newErrors.duration = 'Only 1-2 digits allowed (e.g., 8, 12, 16)'
    }
    

    if (formData.maxStudents === '' || formData.maxStudents === null || formData.maxStudents === undefined) {
      newErrors.maxStudents = 'Max students is required'
    } else {
      const num = Number(formData.maxStudents)
      if (isNaN(num) || num <= 0) {
        newErrors.maxStudents = 'Must be a positive number'
      } else if (num <= 30) {  
        newErrors.maxStudents = 'Max students must be greater than 30'
      } else if (num > 100) {
        newErrors.maxStudents = 'Cannot exceed 100 students'
      }
    }
    
    return newErrors
  }

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    if (value.length <= 2) {
      setFormData({...formData, duration: value})
    }
  }

  const handleMaxStudentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData({...formData, maxStudents: value})
    
  
    if (errors.maxStudents) {
      setErrors({...errors, maxStudents: ''})
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    
    if (Object.keys(newErrors).length === 0) {
      const formattedData = {
        ...formData,
        duration: `${formData.duration} weeks`
      }
      onSubmit(formattedData)
      
     
      setFormData({
        title: '',
        description: '',
        instructor: '',
        duration: '',
        maxStudents: '',
        category: 'Programming',
        level: 'Beginner'
      })
      setErrors({})
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Course Title <span className="text-red-500">*</span>
        </label>
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
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter course description"
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>
    
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Instructor <span className="text-red-500">*</span>
          </label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration (weeks) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.duration}
            onChange={handleDurationChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 12"
            maxLength={2}
          />
          {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration}</p>}
        </div>
      </div>
     
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Students <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value={formData.maxStudents}
            onChange={handleMaxStudentsChange}
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

      <div className="flex gap-3 pt-2">
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