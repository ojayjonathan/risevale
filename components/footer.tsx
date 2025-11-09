import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#543609] text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/design-mode/risevale.png"
                alt="Risevale Travel & Tours"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="font-serif font-bold text-lg">Risevale</span>
            </div>
            <p className="text-gray-100 text-sm">Your gateway to unforgettable African adventures.</p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <Link href="/" className="hover:text-[#f5dba3] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#f5dba3] transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-[#f5dba3] transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-[#f5dba3] transition-colors">
                  Hotels
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <Link href="/about" className="hover:text-[#f5dba3] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#f5dba3] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f5dba3] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#f5dba3] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-100">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+254 (0) 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@risevale.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>WhatsApp Us</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ac7313] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-100">
            <p>&copy; 2025 Risevale Travel & Tours. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#f5dba3] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#f5dba3] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
