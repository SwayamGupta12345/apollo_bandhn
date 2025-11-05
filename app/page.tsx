import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Carousel } from "@/components/carousel"
import { CheckCircle2, Shield, MessageCircle, Heart, Users, Zap } from "lucide-react"

const successStories = [
  {
    id: "1",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/va-removebg-preview-rcUWEthQhxma7DAnzU0HBquTkFDwz8.png",
    title: "Rahul & Priya",
    description:
      "Found each other through authentic matching. Now celebrating their love story with Apollo Bandhn family.",
  },
  {
    id: "2",
    image: "/happy-couple-indian-wedding.jpg",
    title: "Aman & Neha",
    description:
      "From first message to forever - their journey started on Apollo Bandhn and led to their dream wedding.",
  },
  {
    id: "3",
    image: "/couple-holding-hands-india.jpg",
    title: "Vikram & Divya",
    description: "Verified profiles, genuine connections. They found more than a match - they found their best friend.",
  },
]

const features = [
  {
    icon: CheckCircle2,
    title: "100% Verified Profiles",
    description: "All profiles are manually verified ensuring authenticity and genuine intent in every connection.",
  },
  {
    icon: Shield,
    title: "Privacy Protection",
    description: "Complete control over your photos, details, and who can contact you. Your privacy is paramount.",
  },
  {
    icon: MessageCircle,
    title: "Unlimited Chat",
    description: "Connect freely with compatible matches and build meaningful conversations at your pace.",
  },
  {
    icon: Heart,
    title: "Wellness Matching",
    description: "Our advanced algorithm matches you based on lifestyle, values, and emotional compatibility.",
  },
  {
    icon: Users,
    title: "Verified Community",
    description: "Join thousands of verified members seeking authentic relationships and lasting companionship.",
  },
  {
    icon: Zap,
    title: "Premium Benefits",
    description: "Unlock advanced features with our premium plans for enhanced visibility and connections.",
  },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <h2 className="font-serif text-3xl md:text-4xl mb-2" style={{ color: "#0073B1" }}>
            Success Stories
          </h2>
          <p className="text-gray-600">Real love stories from Apollo Bandhn members</p>
        </div>
        <Carousel items={successStories} autoPlay={true} />
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="gradient-soft rounded-2xl p-12 text-center">
          <h2 className="font-serif text-4xl mb-4" style={{ color: "#0073B1" }}>
            Find Your Perfect Match
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Apollo Bandhn connects verified, like-minded individuals seeking meaningful, lasting relationships. Begin
            your journey to lifelong happiness today.
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-red-700 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow"
          >
            Register Free Today
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Why Choose Apollo Bandhn?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Designed for authentic connections with trust, privacy, and genuine compatibility at its core.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" style={{ color: "#0073B1" }} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl mb-4">Trusted by Thousands</h2>
          <p className="text-gray-600 text-lg">Real stories from real people who found love on Apollo Bandhn</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "I never thought I'd find someone who truly understands me. Apollo Bandhn made it possible.",
              author: "Priya S.",
              relation: "Married, 2 years",
            },
            {
              quote: "The verification process gave me confidence that I was connecting with genuine people.",
              author: "Amit K.",
              relation: "In a relationship, 1 year",
            },
            {
              quote: "From first message to wedding day - our journey on Apollo Bandhn was magical.",
              author: "Divya M.",
              relation: "Married, 8 months",
            },
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-amber-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-gray-600 text-sm">{testimonial.relation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Apollo Wellness */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl mb-6" style={{ color: "#0073B1" }}>
              Apollo Couple Wellness
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Your journey doesn't end with finding your match. Our wellness programs help couples build stronger,
              healthier relationships.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Couples counseling and compatibility coaching",
                "Joint wellness and fitness programs",
                "Exclusive Apollo Getaways & retreats",
                "Health and lifestyle tracking",
                "Mental health support and resources",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/membership"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Explore Wellness Plans
            </Link>
          </div>
          <div className="bg-gradient-soft rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">💑</div>
            <p className="text-gray-700 font-semibold text-lg">Celebrating love at every stage</p>
            <p className="text-gray-600 mt-2">From first conversation to forever - we're with you every step.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-primary rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 py-16 text-white text-center">
        <h2 className="font-serif text-4xl mb-4">Begin Your Love Story Today</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of verified members finding authentic connections and lasting love on Apollo Bandhn.
        </p>
        <Link
          href="/register"
          className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-shadow"
        >
          Register Free Now
        </Link>
      </section>

      <Footer />
    </main>
  )
}
