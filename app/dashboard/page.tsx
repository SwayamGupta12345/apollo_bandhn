"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, MessageCircle, BookmarkCheck, Eye, Settings, LogOut, User } from "lucide-react"

const dashboardStats = [
  { label: "Profile Views", value: "234", icon: Eye },
  { label: "Interests Sent", value: "18", icon: Heart },
  { label: "Interests Received", value: "42", icon: Heart },
  { label: "Saved Profiles", value: "12", icon: BookmarkCheck },
]

const recentActivity = [
  { id: 1, type: "viewed", user: "Priya Sharma", time: "2 hours ago" },
  { id: 2, type: "liked", user: "Neha Kapoor", time: "4 hours ago" },
  { id: 3, type: "message", user: "Rahul Mehta", time: "Today" },
  { id: 4, type: "viewed", user: "Divya Gupta", time: "Yesterday" },
]

const savedProfiles = [
  { id: 1, name: "Priya Sharma", age: 28, city: "Delhi", image: "/placeholder.svg?key=pbwpd" },
  { id: 2, name: "Neha Kapoor", age: 26, city: "Mumbai", image: "/placeholder.svg?key=zeayq" },
  { id: 3, name: "Divya Gupta", age: 27, city: "Hyderabad", image: "/placeholder.svg?key=skgs4" },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="font-serif text-4xl mb-2">Welcome Back!</h1>
            <p className="text-gray-600">Here's your Apollo Bandhn dashboard</p>
          </div>
          <Link
            href="/profile/my-profile"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            <User className="w-5 h-5" />
            View My Profile
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {dashboardStats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-600 font-medium">{stat.label}</h3>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center">
                    <Icon className="w-5 h-5" style={{ color: "#0073B1" }} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              </div>
            )
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Tabs */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-sm mb-6">
              <div className="flex border-b border-gray-200">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "activity", label: "Activity" },
                  { id: "preferences", label: "Preferences" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 font-medium text-center border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div className="bg-gradient-soft rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-2">Complete Your Profile</h3>
                      <p className="text-gray-700 mb-4">
                        Add more photos and details to increase your match percentage by up to 40%
                      </p>
                      <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
                        Edit Profile
                      </button>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-4">Profile Strength</h3>
                      <div className="space-y-3">
                        {[
                          { label: "Photos", completion: 80 },
                          { label: "About Me", completion: 100 },
                          { label: "Preferences", completion: 60 },
                        ].map((item, i) => (
                          <div key={i}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{item.label}</span>
                              <span className="text-sm text-gray-600">{item.completion}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-blue-600 to-red-700 h-2 rounded-full"
                                style={{ width: `${item.completion}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "activity" && (
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gray-200" />
                          <div>
                            <p className="font-medium text-gray-900">{activity.user}</p>
                            <p className="text-sm text-gray-600">{activity.time}</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100">
                          {activity.type === "message" ? "Reply" : "View"}
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "preferences" && (
                  <div className="space-y-4">
                    {[
                      { label: "Age Range", value: "26-32" },
                      { label: "Preferred Location", value: "Delhi, NCR" },
                      { label: "Profession", value: "Professional" },
                      { label: "Religion", value: "Open" },
                    ].map((pref, i) => (
                      <div key={i} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                        <span className="font-medium text-gray-700">{pref.label}</span>
                        <span className="text-gray-600">{pref.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Saved Profiles */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-4">Saved Profiles</h3>
              <div className="space-y-4">
                {savedProfiles.map((profile) => (
                  <Link
                    key={profile.id}
                    href={`/profile/${profile.id}`}
                    className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <img
                      src={profile.image || "/placeholder.svg"}
                      alt={profile.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{profile.name}</p>
                      <p className="text-sm text-gray-600">
                        {profile.age}, {profile.city}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/browse"
                className="block w-full mt-4 py-2 text-center text-blue-600 font-medium hover:text-blue-700"
              >
                View All
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-soft rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">View Messages</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                  <Settings className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                  <LogOut className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-red-600">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
