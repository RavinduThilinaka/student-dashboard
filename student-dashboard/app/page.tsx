import { BarChart3, BookOpen, Users, TrendingUp, Calendar, ChevronRight, Activity, Target } from 'lucide-react'

export default function Home() {
  const stats = [
    { label: 'Total Courses', value: '12', icon: BookOpen, change: '+2 this month', color: 'bg-blue-500' },
    { label: 'Total Students', value: '245', icon: Users, change: '+15 this month', color: 'bg-green-500' },
    { label: 'Enrollment Rate', value: '89%', icon: TrendingUp, change: '+5% this month', color: 'bg-purple-500' },
    { label: 'Completion Rate', value: '76%', icon: BarChart3, change: '+3% this month', color: 'bg-orange-500' },
  ]

  const recentActivities = [
    { action: 'New student enrolled', course: 'Web Development', time: '2 hours ago', icon: Users, color: 'text-green-600 bg-green-100' },
    { action: 'Course updated', course: 'React Mastery', time: '5 hours ago', icon: BookOpen, color: 'text-blue-600 bg-blue-100' },
    { action: 'Assignment submitted', course: 'Data Structures', time: '1 day ago', icon: Activity, color: 'text-purple-600 bg-purple-100' },
    { action: 'Milestone achieved', course: 'JavaScript Fundamentals', time: '2 days ago', icon: Target, color: 'text-orange-600 bg-orange-100' },
  ]

  const upcomingEvents = [
    { title: 'Web Development Workshop', date: 'Tomorrow, 10:00 AM', type: 'Workshop' },
    { title: 'Final Project Submission', date: 'Dec 15, 11:59 PM', type: 'Deadline' },
    { title: 'Mid-term Assessments', date: 'Dec 20, 9:00 AM', type: 'Exam' },
  ]

  return (
    <div className='space-y-8'>
      <div className='bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white'>
        <div className='flex flex-col md:flex-row md:items-center justify-between'>
          <div>
            <h1 className='text-3xl font-bold mb-2'>Dashboard Overview</h1>
            <p className='text-blue-100'>Wellcome back! Here's whats happening with your courses today.</p>
          </div>

          <div className='mt-4 md:mt-0 flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2'>
            <Calendar className='h-5 w-5'/>
            <span>{new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {stats.map((stat) =>(
          <div 
            key={stat.label}
            className='bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300'>
              <div className='flex items-start justify-between'>
                <div>
                  <p className='text-sm text-gray-500 font-medium'>{stat.label}</p>
                  <p className='text-3xl font-bold mt-2 text-gray-900'>{stat.value}</p>
                  <p className='text-sm text-green-600 font-medium mt-1 flex items-center'>
                    <TrendingUp className='h-4 w-4 mr-1'/>
                    {stat.change}
                  </p>
                </div>

                <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10`}>
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    <stat.icon className='h-6 w-6 text-white'/>
                  </div>
                </div>
              </div>
              <div className='mt-4 pt-4 border-t border-gray-100'>
                <div className='h-2 bg-gray-200 rounded-full overflow-hidden'>
                  <div
                   className={`h-full bg-linear-to-r ${stat.color.replace('bg-', 'from-')} ${stat.color.replace('500','600').replace('bg-','to-')}`}
                   style={{width:stat.value.includes('%') ? stat.value:"85%"}}/>

                </div>
              </div>
            </div>
        ))}
      </div>


      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='bg-white rounded-2xl shadow-lg border border-gray-100 p-6'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl font-bold text-gray-900'>Recent activity</h2>
            <button className='text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center'>
              View All
              <ChevronRight className='h-4 w-4 ml-1'/>
            </button>
          </div>

          <div className='space-y-4'>
            {recentActivities.map((activity,index)=>(
              <div
                key={index}
                className='flex items-center p-4 hover:bg-gray-50 rounded-xl transition-colors duration-100'>
                  <div className={`p-3 rounded-lg ${activity.color} mr-4`}>
                    <activity.icon className='h-5 w-5'/>
                  </div>

                  <div className='flex-1'>
                    <p className='font-semibold text-gray-900'>{activity.action}</p>
                    <p className='text-sm text-gray-600'>{activity.course}</p>
                  </div>

                  <span className='text-sm text-gray-500'>{activity.time}</span>
                </div>
            ))}
          </div>
        </div>

        <div className='bg-white rounded-2xl shadow-lg border border-gray-100 p-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-6'>Upcoming Event</h2>
          <div className='space-y-4'>
            {upcomingEvents.map((event, index)=>(
              <div
              key={index}
              className='p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-200'
              >
                <div className='flex items-start justify-between'>
                  <div className=''>
                    <h3 className='font-semibold text-gray-900'>{event.title}</h3>
                    <div className='flex items-center mt-2'>
                      <Calendar className='h-4 w-4 text-gray-400 mr-2'/>
                      <span className='text-sm text-gray-600'>{event.date}</span>
                    </div>
                  </div>

                <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.type ==='Workshop' ? 'bg-blue-100 text-blue-800':event.type==='Deadline' ? 'bg-red-800':'bg-yellow-100 text-yellow-800'}`}>
                  {event.type}

                </span>
                </div>
              </div>
            ))}
          </div>

          <button className='w-full mt-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300'>
            View Calander
          </button>
        </div>
      </div>

      <div className='bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white'>
        <h2 className='text-xl font-bold mb-4'>Performance Overview</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

          <div className='text-center p-4 bg-white/10 rounded-xl'>
            <div className='text-2xl font-bold'>98%</div>
            <div className='text-sm text-gray-300'>Student Satisfaction</div>
          </div>

           <div className='text-center p-4 bg-white/10 rounded-xl'>
            <div className='text-2xl font-bold'>24/7</div>
            <div className='text-sm text-gray-300'>Suport available</div>
          </div>

           <div className='text-center p-4 bg-white/10 rounded-xl'>
            <div className='text-2xl font-bold'>42</div>
            <div className='text-sm text-gray-300'>Active assignment</div>
          </div>

           <div className='text-center p-4 bg-white/10 rounded-xl'>
            <div className='text-2xl font-bold'>8</div>
            <div className='text-sm text-gray-300'>New message</div>
          </div>

        </div>
      </div>
    </div>
  )
}