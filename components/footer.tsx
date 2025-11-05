import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-red-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="font-serif font-bold text-lg">Apollo Bandhn</span>
            </div>
            <p className="text-gray-400 text-sm">
              Where eternal bonds begin. Your trusted companion in finding lifelong love.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {["Home", "Browse Profiles", "Success Stories", "Sitemap"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Premium Plans", "Verified Profiles", "Wellness Programs", "Apollo Getaways"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              {["Contact Us", "FAQ", "Privacy Policy", "Terms of Use"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Blog", "Careers", "Fraud Alert"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Apollo Bandhn. All rights reserved. Your trust is our commitment.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, i) => (
                <Link key={i} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
