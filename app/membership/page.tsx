import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, Star, Zap } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "0",
    period: "Forever",
    description: "Perfect to get started",
    features: [
      "Browse verified profiles",
      "Shortlist & send interest",
      "Limited chat access",
      "Basic search filters",
      "Profile verification",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Gold",
    price: "₹999",
    period: "3 months",
    description: "Most popular choice",
    features: [
      "Everything in Free",
      "Unlimited chat access",
      "View contact details",
      "Advanced search filters",
      "3 free spotlights",
      "Priority support",
      "Wellness resources",
    ],
    cta: "Get Gold",
    highlighted: true,
  },
  {
    name: "Platinum",
    price: "₹2499",
    period: "6 months",
    description: "Premium experience",
    features: [
      "Everything in Gold",
      "Priority listing in search",
      "Dedicated relationship manager",
      "Unlimited voice & video calls",
      "Free horoscope matching",
      "Couple wellness program",
      "Apollo Getaway discounts",
      "VIP event access",
    ],
    cta: "Get Platinum",
    highlighted: false,
  },
]

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl mb-4">Membership Plans</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Choose the plan that best fits your journey. Upgrade anytime to unlock more features and accelerate your
            path to finding your perfect match.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "md:scale-105 bg-gradient-to-br from-blue-50 to-red-50 border-2 border-blue-600 shadow-2xl hover:shadow-3xl"
                  : "bg-white border border-gray-200 shadow-md hover:shadow-xl"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-red-700 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan Name & Price */}
                <h2 className="font-serif text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-serif text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 text-sm">per {plan.period}</span>
                  </div>
                  {plan.price !== "0" && <p className="text-gray-500 text-sm">Cancel anytime, no hidden charges</p>}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/billing?plan=${plan.name.toLowerCase()}`}
                  className={`block w-full py-3 rounded-lg font-semibold text-center mb-8 transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-red-700 text-white hover:shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Zap,
              title: "Instant Activation",
              description: "Your premium features activate immediately after payment",
            },
            {
              icon: Check,
              title: "30-Day Guarantee",
              description: "Not satisfied? Get a full refund within 30 days",
            },
            {
              icon: Star,
              title: "Premium Support",
              description: "Our expert team is ready to help you 24/7",
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7" style={{ color: "#0073B1" }} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-50 rounded-xl p-8 mb-20">
          <h2 className="font-serif text-3xl font-bold mb-8">Detailed Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold">Features</th>
                  <th className="text-center py-4 px-4 font-semibold">Free</th>
                  <th className="text-center py-4 px-4 font-semibold">Gold</th>
                  <th className="text-center py-4 px-4 font-semibold">Platinum</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Browse Profiles",
                  "Send Interest",
                  "Unlimited Chat",
                  "Contact Details",
                  "Advanced Filters",
                  "Video Calls",
                  "Wellness Program",
                  "Priority Support",
                ].map((feature, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-white">
                    <td className="py-4 px-4 font-medium text-gray-700">{feature}</td>
                    <td className="py-4 px-4 text-center">
                      {["Browse Profiles", "Send Interest"].includes(feature) && (
                        <Check className="w-5 h-5 mx-auto text-green-600" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {[
                        "Browse Profiles",
                        "Send Interest",
                        "Unlimited Chat",
                        "Contact Details",
                        "Advanced Filters",
                      ].includes(feature) && <Check className="w-5 h-5 mx-auto text-green-600" />}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 mx-auto text-green-600" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gradient-soft rounded-2xl p-12">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Can I upgrade or downgrade my plan anytime?",
                a: "Yes! You can change your plan or cancel anytime. Changes take effect at the end of your billing cycle.",
              },
              {
                q: "Is my payment secure?",
                a: "Absolutely. All transactions are encrypted with 256-bit SSL and processed through trusted payment gateways.",
              },
              {
                q: "What if I'm not satisfied?",
                a: "We offer a 30-day money-back guarantee on all paid plans. No questions asked.",
              },
              {
                q: "Do you offer corporate or family plans?",
                a: "Yes! Contact our support team for special pricing on bulk memberships for families or groups.",
              },
            ].map((faq, i) => (
              <div key={i}>
                <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
