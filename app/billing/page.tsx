"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, Lock } from "lucide-react"

export default function BillingPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "gold"
  const [paymentMethod, setPaymentMethod] = useState("card")

  const planDetails: Record<string, { price: string; period: string; features: string[] }> = {
    gold: {
      price: "₹999",
      period: "3 months",
      features: ["Unlimited chat access", "View contact details", "Advanced search filters"],
    },
    platinum: {
      price: "₹2499",
      period: "6 months",
      features: ["Everything in Gold", "Dedicated relationship manager", "Couple wellness program"],
    },
  }

  const selected = planDetails[plan] || planDetails.gold

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-serif text-4xl mb-12">Complete Your Purchase</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-1 bg-gray-50 rounded-xl p-8 h-fit sticky top-20">
            <h2 className="font-semibold text-lg mb-6">Order Summary</h2>

            <div className="mb-6 pb-6 border-b border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Plan</p>
              <p className="font-semibold text-lg capitalize mb-2">{plan} Membership</p>
              <p className="text-gray-600 text-sm">{selected.period}</p>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-200">
              <ul className="space-y-2">
                {selected.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{selected.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">GST (18%)</span>
                <span className="font-medium">₹180</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-gray-200 text-lg">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-blue-600">{selected.price}</span>
              </div>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg">
              Complete Payment
            </button>

            <div className="flex items-center gap-2 mt-4 text-gray-600 text-sm">
              <Lock className="w-4 h-4" />
              Secure payment powered by Stripe
            </div>
          </div>

          {/* Payment Form */}
          <div className="md:col-span-2">
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="font-semibold text-lg mb-6">Payment Method</h3>

              <div className="space-y-4 mb-8">
                {[
                  { value: "card", label: "Credit/Debit Card", icon: "💳" },
                  { value: "upi", label: "UPI", icon: "📱" },
                  { value: "netbanking", label: "Net Banking", icon: "🏦" },
                  { value: "wallet", label: "Digital Wallet", icon: "👛" },
                ].map((method) => (
                  <label
                    key={method.value}
                    className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors hover:bg-white"
                    style={{ borderColor: paymentMethod === method.value ? "#0073B1" : "#E5E7EB" }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.value}
                      checked={paymentMethod === method.value}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 mr-3 text-2xl">{method.icon}</span>
                    <span className="font-medium">{method.label}</span>
                  </label>
                ))}
              </div>

              {/* Card Form */}
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="4532 1234 5678 9010"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 mt-6 p-4 bg-white rounded-lg">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-700">
                  I agree to the Terms of Service and understand the cancellation policy. I also agree to receive
                  updates about my membership.
                </span>
              </label>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Check className="w-5 h-5 text-green-600" />
                30-Day Money Back Guarantee
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Check className="w-5 h-5 text-green-600" />
                No Hidden Charges
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Check className="w-5 h-5 text-green-600" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
