import CourseCard from "@/components/ui/CourseCard"


export default function CoursesPage() {
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
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
          <p className="text-gray-600">Manage and track all courses</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add New Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}