import { User, Mail, Calendar, Settings, Shield, Bell, Key, Camera, Github, Twitter, Linkedin, Award, Clock, Activity, Star, BookOpen, Download } from 'lucide-react'
import Image from 'next/image'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
     
      <div className="max-w-7xl mx-auto mb-10">
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Profile Settings</h1>
            <p className="text-blue-100 text-lg">Manage your account and personal information</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                  <p className="text-gray-500 text-sm mt-1">Update your personal details here</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        defaultValue="Admin"
                        className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
                        placeholder="Enter first name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="User"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      defaultValue="admin@dashboard.com"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="System administrator with experience in education technology. Passionate about creating efficient and user-friendly systems."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 resize-none"
                    placeholder="Write something about yourself..."
                  />
                  <p className="text-xs text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Save Changes
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 transition-all duration-200">
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-50 rounded-lg">
                  <Award className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Achievements & Certifications</h3>
                  <p className="text-gray-500 text-sm">Your earned badges and certificates</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-yellow-500 rounded-lg">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-yellow-700 bg-yellow-200 px-2 py-1 rounded-full">Expert</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Advanced Dashboard</h4>
                  <p className="text-xs text-gray-500 mt-1">Completed Mar 2024</p>
                </div>
                
                <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-200 px-2 py-1 rounded-full">Certified</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">System Admin</h4>
                  <p className="text-xs text-gray-500 mt-1">Completed Jan 2024</p>
                </div>
                
                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-500 rounded-lg">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-green-700 bg-green-200 px-2 py-1 rounded-full">Course</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Data Analytics</h4>
                  <p className="text-xs text-gray-500 mt-1">Completed Feb 2024</p>
                </div>
                
                <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-500 rounded-lg">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-purple-700 bg-purple-200 px-2 py-1 rounded-full">5 Years</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Work Anniversary</h4>
                  <p className="text-xs text-gray-500 mt-1">Achieved Jan 2024</p>
                </div>
              </div>
              
              <button className="w-full mt-4 px-4 py-2 bg-gray-50 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 text-sm border border-gray-200">
                View All Achievements
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Activity className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
                    <p className="text-gray-500 text-sm">Your latest actions and updates</p>
                  </div>
                </div>
                <button className="text-sm text-indigo-600 font-semibold hover:text-indigo-700">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-xl transition-all duration-200">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Settings className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Updated profile settings</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-xl transition-all duration-200">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Download className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Downloaded monthly report</p>
                    <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-xl transition-all duration-200">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <User className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Added new team member</p>
                    <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-xl transition-all duration-200">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Award className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Earned new certification</p>
                    <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col items-center relative">
                <div className="relative group mb-4">
                  <div className="h-28 w-28 rounded-full bg-linear-to-br from-blue-500 to-purple-600 p-1">
                    <div className="h-full w-full rounded-full bg-white overflow-hidden">
                      <Image
                        src="/user.jpg" 
                        alt="Profile"
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 shadow-lg transform hover:scale-110 transition-all duration-200">
                    <Camera className="h-4 w-4" />
                  </button>
                  <div className="absolute -top-1 -right-1 p-1.5 bg-green-500 rounded-full border-4 border-white">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900">Admin User</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                    System Administrator
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                    Verified
                  </span>
                </div>
                
              
                <div className="w-full mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-500">Profile Completion</span>
                    <span className="text-xs font-bold text-gray-900">85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-linear-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  </div>
                </div>
                
                <div className="w-full mt-6 space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-sm font-medium text-gray-900">admin@dashboard.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Shield className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">Role</p>
                      <p className="text-sm font-medium text-gray-900">Administrator</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Calendar className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">Member Since</p>
                      <p className="text-sm font-medium text-gray-900">January 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

         
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Settings className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
                  <p className="text-gray-500 text-sm">Manage your account</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Key className="h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                  </div>
                  <span className="font-medium group-hover:text-blue-600">Change Password</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Bell className="h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                  </div>
                  <span className="font-medium group-hover:text-blue-600">Notification Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200 group">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Shield className="h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                  </div>
                  <span className="font-medium group-hover:text-blue-600">Privacy Settings</span>
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="w-full px-4 py-3 bg-red-50 text-red-600 font-semibold rounded-xl hover:bg-red-100 transition-all duration-200">
                  Delete Account
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Github className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Social Profiles</h3>
                  <p className="text-gray-500 text-sm">Add your social media links</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Github className="h-5 w-5 text-gray-700" />
                  </div>
                  <input
                    type="url"
                    placeholder="GitHub URL"
                    className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Twitter className="h-5 w-5 text-blue-500" />
                  </div>
                  <input
                    type="url"
                    placeholder="Twitter URL"
                    className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Linkedin className="h-5 w-5 text-indigo-600" />
                  </div>
                  <input
                    type="url"
                    placeholder="LinkedIn URL"
                    className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}