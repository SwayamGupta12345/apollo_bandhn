"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Search, ChevronDown, MessageSquare, Phone, Mail, AlertCircle } from "lucide-react"

const faqs = [
  {
    category: "Account & Verification",
    questions: [
      {
        q: "How do I verify my profile?",
        a: "Upload a valid ID and wait for manual approval within 24 hours. This ensures authenticity and protects all our members.",
      },
      {
        q: "What documents are accepted for verification?",
        a: "We accept Passport, Driving License, Voter ID, and Aadhaar. All documents are securely stored and never shared publicly.",
      },
      {
        q: "Can I hide my photo from search?",
        a: "Yes, use Privacy Settings to hide photos from general search. Only people you've approved will see your full profile.",
      },
    ],
  },
  {
    category: "Membership & Billing",
    questions: [
      {
        q: "How do I upgrade my plan?",
        a: "Visit the Membership page, choose your desired plan, and complete payment. Upgrade anytime with instant activation.",
      },
      {
        q: "Is there a money-back guarantee?",
        a: "Yes! We offer 30 days money-back guarantee on all paid plans. If you're not satisfied, we'll refund you fully.",
      },
      {
        q: "Can I cancel my subscription?",
        a: "Absolutely. You can cancel anytime from Settings. Your access continues until the end of your billing period.",
      },
    ],
  },
  {
    category: "Safety & Privacy",
    questions: [
      {
        q: "Is my personal information safe?",
        a: "Your privacy is our priority. We use 256-bit SSL encryption and never share your data with third parties.",
      },
      {
        q: "How do I report inappropriate behavior?",
        a: "Use the report button on any profile or message. Our safety team reviews all reports and takes swift action.",
      },
      {
        q: "What is the Fraud Alert feature?",
        a: "Fraud Alert helps identify and report suspicious accounts. We encourage members to be cautious and report concerns.",
      },
    ],
  },
]

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
      setSubmitStatus("error")
      return
    }
    console.log("Support query submitted:", contactForm)
    setSubmitStatus("success")
    setContactForm({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitStatus("idle"), 3000)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl mb-4">Help & Support</h1>
          <p className="text-gray-600 text-xl">Find answers to your questions and get support from our team.</p>
        </div>

        {/* Search */}
        <div className="mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search help topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8 mb-16">
          {faqs.map((section, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-8">
              <h2 className="font-serif text-2xl mb-6">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((faq, j) => (
                  <div key={j} className="bg-white rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === `${i}-${j}` ? null : `${i}-${j}`)}
                      className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-left font-medium text-gray-900">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                          expandedFaq === `${i}-${j}` ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedFaq === `${i}-${j}` && (
                      <div className="px-4 pb-4 text-gray-700 border-t border-gray-200 pt-4">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="font-serif text-2xl mb-6">Quick Help</h2>
            <div className="space-y-4">
              {[
                { icon: MessageSquare, title: "Chat Support", desc: "Talk to our team instantly" },
                { icon: Phone, title: "Call Us", desc: "+91-1800-123-4567" },
                { icon: Mail, title: "Email Support", desc: "help@apollobandhn.com" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-red-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6" style={{ color: "#0073B1" }} />
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl mb-6">Send us a Message</h2>
            {submitStatus === "success" && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                Thank you! Your message has been sent. We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Please fill in all fields.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Select a category</option>
                  <option value="billing">Billing Issue</option>
                  <option value="technical">Technical Issue</option>
                  <option value="safety">Safety Concern</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 h-24 resize-none"
                  placeholder="Describe your issue or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-gradient-soft rounded-2xl p-8 text-center">
          <h3 className="font-semibold text-lg mb-4">Your safety is our commitment</h3>
          <p className="text-gray-700 mb-4">
            We take every concern seriously. Our safety team works 24/7 to ensure Apollo Bandhn remains a safe and
            authentic community for all members.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div>
              <p className="font-semibold text-2xl">24/7</p>
              <p className="text-gray-600 text-sm">Support Available</p>
            </div>
            <div>
              <p className="font-semibold text-2xl">100%</p>
              <p className="text-gray-600 text-sm">Verified Profiles</p>
            </div>
            <div>
              <p className="font-semibold text-2xl">30s</p>
              <p className="text-gray-600 text-sm">Avg Response Time</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
