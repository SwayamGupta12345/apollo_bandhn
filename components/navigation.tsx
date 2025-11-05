"use client"

import Link from "next/link"
import { useState } from "react"
import { Heart, Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-red-700 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="font-serif font-bold text-xl hidden sm:inline" style={{ color: "#0073B1" }}>
              Apollo Bandhn
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium text-sm">
                Browse By <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {["Mother Tongue", "Caste", "Religion", "City", "Occupation"].map((item) => (
                  <Link
                    key={item}
                    href={`/browse?filter=${item.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/membership" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              Membership
            </Link>

            <Link href="/help" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              Help
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="px-6 py-2 text-blue-600 font-medium text-sm hover:text-blue-700">
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-red-700 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-shadow"
            >
              Register Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Home
            </Link>
            <Link href="/membership" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Membership
            </Link>
            <Link href="/help" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Help
            </Link>
            <div className="flex gap-2 pt-4">
              <Link
                href="/login"
                className="flex-1 px-4 py-2 text-center text-blue-600 font-medium hover:bg-gray-100 rounded"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="flex-1 px-4 py-2 text-center bg-gradient-to-r from-blue-600 to-red-700 text-white rounded font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
