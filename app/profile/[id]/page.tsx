"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Heart,
  MessageCircle,
  Share2,
  BookmarkCheck,
  MapPin,
  Briefcase,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function ProfilePage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("about")
  const [liked, setLiked] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const profile = {
    name: "Priya Sharma",
    age: 28,
    city: "Delhi",
    profession: "Architect",
    image: "/professional-indian-woman-smiling.png",
    verified: true,
    premium: true,
    match: 92,
    photos: [
      "/professional-indian-woman-smiling.png",
      "/indian-woman-doctor-professional.jpg",
      "/indian-woman-tech-professional.png",
    ],
  }

  const tabs = [
    {
      id: "about",
      label: "About Me",
      content:
        "I'm a creative and family-oriented individual who loves traveling and exploring new cultures. I believe in open communication and building strong foundations in relationships. When I'm not working, you'll find me reading, cooking, or spending time with family.",
    },
    {
      id: "education",
      label: "Education & Career",
      content:
        "B.Arch from Delhi University with distinction. Currently working as a Senior Architect at a leading design firm. Specialized in sustainable architecture and urban design. Passionate about creating spaces that inspire and bring communities together.",
    },
    {
      id: "family",
      label: "Family",
      content:
        "Father: Retired Government Officer, Mother: Homemaker, 1 younger brother studying engineering. Close-knit family that values honesty, respect, and personal growth. Looking for someone who appreciates family values.",
    },
    {
      id: "preferences",
      label: "Looking For",
      content:
        "Seeking a well-educated professional aged 28-35, preferably from North India. Someone who is ambitious, kind-hearted, and values long-term commitment. Open to discussions about future plans and life goals.",
    },
  ]

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + profile.photos.length) % profile.photos.length)
  }

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % profile.photos.length)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Photos */}
          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-4">
              {/* Main Photo */}
              <div className="relative rounded-2xl overflow-hidden h-96 shadow-lg bg-gray-200 group">
                <img
                  src={profile.photos[currentPhotoIndex] || "/placeholder.svg"}
                  alt={`${profile.name} - Photo ${currentPhotoIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 space-y-2">
                  {profile.verified && <div className="badge-verified">✓ Verified</div>}
                  {profile.premium && <div className="badge-premium">⭐ Premium</div>}
                </div>
                <div className="absolute bottom-4 right-4 text-white text-3xl font-bold bg-black/30 backdrop-blur px-4 py-2 rounded-lg">
                  {profile.match}%
                </div>

                {/* Photo Navigation */}
                <button
                  onClick={goToPreviousPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Photo Indicator */}
                <div className="absolute bottom-4 left-4 text-white text-sm bg-black/30 backdrop-blur px-3 py-1 rounded-full">
                  {currentPhotoIndex + 1} / {profile.photos.length}
                </div>
              </div>

              {/* Photo Thumbnails */}
              <div className="grid grid-cols-3 gap-2">
                {profile.photos.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPhotoIndex(i)}
                    className={`relative w-full h-24 rounded-lg overflow-hidden cursor-pointer transition-all border-2 ${
                      i === currentPhotoIndex ? "border-blue-600" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={photo || "/placeholder.svg"}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info & Tabs */}
          <div className="md:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <h1 className="font-serif text-4xl mb-2">
                {profile.name}, {profile.age}
              </h1>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="w-5 h-5" />
                <span>{profile.city}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <Briefcase className="w-5 h-5" />
                <span>{profile.profession}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap mb-8">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    liked
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gradient-to-r from-blue-600 to-red-700 text-white hover:shadow-lg"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                  {liked ? "Liked" : "Send Interest"}
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Message
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  <BookmarkCheck className="w-5 h-5" />
                  Save
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="border-b border-gray-200 mb-6 flex gap-4 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {tabs.find((t) => t.id === activeTab) && (
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 leading-relaxed">{tabs.find((t) => t.id === activeTab)?.content}</p>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-soft rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6" style={{ color: "#0073B1" }} />
                  <h3 className="font-semibold">Education</h3>
                </div>
                <p className="text-gray-700">B.Arch from Delhi University</p>
              </div>

              <div className="bg-gradient-soft rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6" style={{ color: "#8B1E3F" }} />
                  <h3 className="font-semibold">Family Status</h3>
                </div>
                <p className="text-gray-700">Younger brother, Parents living</p>
              </div>
            </div>

            {/* Premium CTA */}
            <div className="mt-8 bg-gradient-soft rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Want to view contact details?</span>
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
