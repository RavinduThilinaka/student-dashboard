import { Users, Clock, BookOpen } from 'lucide-react'

interface CourseCardProps {
  course: {
    id: number
    title: string
    description: string
    instructor: string
    duration: string
    students: number
    maxStudents: number
    category: string
    level: string
  }
}

export default function CourseCard({ course }: CourseCardProps) {
  const progress = (course.students / course.maxStudents) * 100
  
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className={`px-2 py-1 text-xs rounded-full ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
          <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{course.description}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-gray-500" />
            <span>{course.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span>{course.duration}</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-500" />
              <span>{course.students}/{course.maxStudents} students</span>
            </div>
            <span>{progress.toFixed(0)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
        </div>
      </div>
    </div>
  )
}