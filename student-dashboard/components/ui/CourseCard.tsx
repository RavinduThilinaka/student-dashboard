
import { Users, Clock, BookOpen, TrendingUp } from 'lucide-react'

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
  
  const getLevelColor = () => {
    switch(course.level) {
      case 'Beginner': return 'bg-green-500'
      case 'Intermediate': return 'bg-yellow-500'
      case 'Advanced': return 'bg-red-500'
      default: return 'bg-blue-500'
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-500 font-medium">{course.category}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-900">{course.title}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{course.description}</p>
        </div>

        <div className={`p-3 rounded-xl ${getLevelColor()} bg-opacity-10`}>
          <div className={`p-2 rounded-lg ${getLevelColor()}`}>
            <BookOpen className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-500" />
            <span>{course.instructor}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
          <span className="text-sm text-gray-500">
            {course.students}/{course.maxStudents} students
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600 font-medium">Enrollment Progress</span>
            <span className="text-green-600 font-medium flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {progress.toFixed(0)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-linear-to-r ${getLevelColor().replace('bg-', 'from-')} ${getLevelColor().replace('500', '600').replace('bg-', 'to-')}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}