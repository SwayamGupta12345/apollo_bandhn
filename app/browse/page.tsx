"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, MapPin, Briefcase, ChevronDown } from "lucide-react"

const mockProfiles = [
  {
    id: "1",
    name: "Priya Sharma",
    age: 28,
    city: "Delhi",
    profession: "Architect",
    image: "/professional-indian-woman-smiling.png",
    verified: true,
    match: 92,
  },
  {
    id: "2",
    name: "Neha Kapoor",
    age: 26,
    city: "Mumbai",
    profession: "Doctor",
    image: "/indian-woman-doctor-professional.jpg",
    verified: true,
    match: 88,
  },
  {
    id: "3",
    name: "Rahul Mehta",
    age: 30,
    city: "Bangalore",
    profession: "Engineer",
    image: "/indian-man-engineer-professional.jpg",
    verified: true,
    match: 85,
  },
  {
    id: "4",
    name: "Aman Singh",
    age: 32,
    city: "Pune",
    profession: "Business Owner",
    image: "/indian-business-man-professional.jpg",
    verified: true,
    match: 90,
  },
  {
    id: "5",
    name: "Divya Gupta",
    age: 27,
    city: "Hyderabad",
    profession: "Software Developer",
    image: "/indian-woman-tech-professional.png",
    verified: true,
    match: 87,
  },
  {
    id: "6",
    name: "Vikram Patel",
    age: 29,
    city: "Ahmedabad",
    profession: "Consultant",
    image: "/indian-man-consultant-professional.jpg",
    verified: true,
    match: 89,
  },
]

const filters = [
  { label: "Age", options: ["18-25", "25-30", "30-35", "35+"] },
  { label: "City", options: ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad"] },
  { label: "Profession", options: ["Engineer", "Doctor", "Business", "Artist", "Teacher"] },
]

export default function BrowsePage() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({})
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null)
  const [likedProfiles, setLikedProfiles] = useState<Set<string>>(new Set())

  const handleLike = (profileId: string) => {
    setLikedProfiles((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(profileId)) {
        newSet.delete(profileId)
      } else {
        newSet.add(profileId)
      }
      return newSet
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl mb-4">Browse Verified Matches</h1>
          <p className="text-gray-600 text-lg">
            Discover profiles of genuine individuals seeking meaningful connections.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-20 space-y-4">
              <h3 className="font-semibold text-lg mb-6">Filter By</h3>

              {filters.map((filter) => (
                <div key={filter.label} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <button
                    onClick={() => setExpandedFilter(expandedFilter === filter.label ? null : filter.label)}
                    className="w-full flex justify-between items-center py-2 font-medium hover:text-blue-600"
                  >
                    {filter.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expandedFilter === filter.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedFilter === filter.label && (
                    <div className="mt-2 space-y-2">
                      {filter.options.map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters[filter.label] === option}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedFilters({ ...selectedFilters, [filter.label]: option })
                              } else {
                                const newFilters = { ...selectedFilters }
                                delete newFilters[filter.label]
                                setSelectedFilters(newFilters)
                              }
                            }}
                            className="rounded"
                          />
                          <span className="text-gray-700 text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-red-700 text-white rounded-lg font-medium mt-6">
                Clear Filters
              </button>
            </div>
          </div>

          {/* Profiles Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProfiles.map((profile) => (
                <div
                  key={profile.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200"
                >
                  {/* Image */}
                  <Link href={`/profile/${profile.id}`}>
                    <div className="relative h-64 overflow-hidden bg-gray-200 cursor-pointer">
                      <img
                        src={profile.image || "/placeholder.svg"}
                        alt={profile.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-amber-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {profile.match}% Match
                      </div>
                      {profile.verified && <div className="absolute top-3 left-3 badge-verified">✓ Verified</div>}
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="p-4">
                    <Link href={`/profile/${profile.id}`}>
                      <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 cursor-pointer">{profile.name}</h3>
                    </Link>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="font-medium">{profile.age}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4" />
                        {profile.city}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Briefcase className="w-4 h-4" />
                        {profile.profession}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleLike(profile.id)}
                        className={`flex-1 py-2 rounded-lg font-medium text-sm transition-all ${
                          likedProfiles.has(profile.id)
                            ? "bg-red-600 text-white"
                            : "bg-gradient-to-r from-blue-600 to-red-700 text-white hover:shadow-lg"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 inline mr-1 ${likedProfiles.has(profile.id) ? "fill-current" : ""}`}
                        />
                        {likedProfiles.has(profile.id) ? "Liked" : "Interest"}
                      </button>
                      <button className="flex-1 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-50">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
