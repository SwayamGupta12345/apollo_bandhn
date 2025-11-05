import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Heart, Shield, Zap, Users, Award, Globe } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Authentic Connections",
      description:
        "Every profile verified, every match meaningful. We believe in genuine relationships built on trust.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Your personal information is sacred. Advanced security ensures complete control over your data.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Join thousands of verified members who share your values and are seeking real companionship.",
    },
    {
      icon: Zap,
      title: "Smart Matching",
      description:
        "Our algorithm goes beyond profiles. We match on compatibility, values, and life goals.",
    },
    {
      icon: Award,
      title: "Trust & Transparency",
      description:
        "No fake profiles, no hidden fees. Everything is honest, straightforward, and clear.",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description:
        "Connecting Indian hearts worldwide. Diaspora to homeland, we celebrate love across borders.",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Apollo Bandhn Founded",
      description: "Vision to revolutionize Indian matrimony",
    },
    {
      year: "2024",
      title: "100K+ Members",
      description: "Growing community of verified individuals",
    },
    {
      year: "2024",
      title: "10K+ Matches",
      description: "Successful connections leading to marriages",
    },
    {
      year: "2025",
      title: "Apollo Wellness Launch",
      description: "Comprehensive couple support programs",
    },
  ];

  const team = [
    {
      role: "Visionary Leadership",
      description:
        "Founded by professionals with 20+ years in matrimony, technology, and wellness sectors.",
    },
    {
      role: "Expert Matching Team",
      description:
        "Dedicated team of relationship counselors and data scientists ensuring perfect matches.",
    },
    {
      role: "24/7 Support",
      description:
        "Multilingual support team committed to your success at every step of your journey.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-6xl lg:text-8xl mb-6">
            <span className="text-[#01588D]">Apollo</span>
            <span className="text-[#810134] ml-2">Bandhn</span>
          </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Redefining matrimony for modern India. Where authenticity meets
            innovation, and love finds its true path.
          </p>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Redefining matrimony for modern India. Where authenticity meets
            innovation, and love finds its true path.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-soft rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2
              className="font-serif text-3xl mb-4"
              style={{ color: "#0073B1" }}
            >
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              To connect verified, like-minded individuals seeking authentic,
              lifelong companionship. We believe every person deserves to find
              genuine love in a safe, trustworthy environment.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Apollo Bandhn isn't just about finding a partner—it's about
              building a life together with someone who truly understands and
              complements you.
            </p>
          </div>
          <div>
            <h2
              className="font-serif text-3xl mb-4"
              style={{ color: "#8B1E3F" }}
            >
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              To become the most trusted matrimony platform in India, setting
              new standards for authenticity, privacy, and genuine connections.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a world where technology enhances human connections
              rather than replacing them, where every match has the potential to
              become a lifelong partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Our Core Values</h2>
          <p className="text-gray-600 text-lg">
            These principles guide everything we do at Apollo Bandhn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-100 to-red-100 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" style={{ color: "#0073B1" }} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 rounded-2xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Our Journey</h2>
          <p className="text-gray-600 text-lg">
            From vision to creating thousands of love stories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl border border-gray-200 text-center"
            >
              <div
                className="text-3xl font-serif font-bold mb-2"
                style={{ color: "#0073B1" }}
              >
                {milestone.year}
              </div>
              <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
              <p className="text-gray-600 text-sm">{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">
            Why Choose Apollo Bandhn?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're different because we prioritize authenticity, your privacy,
            and genuine compatibility above all else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "100% Verified Profiles",
              points: [
                "Manual verification of every profile",
                "Video verification option for extra trust",
                "Regular compliance checks",
              ],
            },
            {
              title: "Advanced Privacy Controls",
              points: [
                "Hide your profile from specific people",
                "Control who sees your photos",
                "Anonymous browsing options",
              ],
            },
            {
              title: "Smart Matching Algorithm",
              points: [
                "Beyond demographics - values matching",
                "Lifestyle compatibility scoring",
                "Personalized recommendations",
              ],
            },
            {
              title: "Holistic Support",
              points: [
                "Expert counseling and advice",
                "Wellness programs for couples",
                "24/7 customer support",
              ],
            },
          ].map((feature, i) => (
            <div key={i} className="bg-gradient-soft rounded-xl p-8">
              <h3
                className="font-semibold text-xl mb-4"
                style={{ color: "#0073B1" }}
              >
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: "#8B1E3F" }}
                    />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team/Culture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Our Team & Expertise</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate professionals dedicated to your happiness
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4" style={{ color: "#0073B1" }}>
                {i === 0 ? "👨‍💼" : i === 1 ? "🎯" : "💬"}
              </div>
              <h3 className="font-semibold text-lg mb-3">{member.role}</h3>
              <p className="text-gray-600 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="gradient-primary rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white text-center mb-20">
        <h2 className="font-serif text-4xl mb-4">Our Commitment to Society</h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          We believe in giving back. Apollo Bandhn partners with NGOs supporting
          education, healthcare, and women empowerment. Every membership
          contribution helps create positive change.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {["Women Empowerment", "Education Support", "Health & Wellness"].map(
            (cause, i) => (
              <div
                key={i}
                className="bg-white/20 backdrop-blur-sm p-6 rounded-lg"
              >
                <p className="font-semibold">{cause}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center mb-20">
        <h2 className="font-serif text-4xl mb-6">Ready to Begin Your Story?</h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of verified members who've found genuine love and
          lasting companionship on Apollo Bandhn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-4 bg-linear-to-r from-blue-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Register Free Today
          </Link>
          <Link
            href="/membership"
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Explore Plans
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
