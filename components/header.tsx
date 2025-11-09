"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="container-max flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/design-mode/risevale.png"
            alt="Risevale Travel & Tours"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#543609] font-medium hover:text-[#ac7313] transition-colors">
            Home
          </Link>
          <Link href="/destinations" className="text-[#543609] font-medium hover:text-[#ac7313] transition-colors">
            Destinations
          </Link>
          <Link href="/tours" className="text-[#543609] font-medium hover:text-[#ac7313] transition-colors">
            Tours
          </Link>
          <Link href="/hotels" className="text-[#543609] font-medium hover:text-[#ac7313] transition-colors">
            Hotels
          </Link>
          <Link href="/blog" className="text-[#543609] font-medium hover:text-[#ac7313] transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[#543609]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container-max flex flex-col gap-4 py-4">
            <Link href="/" className="text-[#543609] font-medium hover:text-[#ac7313]">
              Home
            </Link>
            <Link href="/destinations" className="text-[#543609] font-medium hover:text-[#ac7313]">
              Destinations
            </Link>
            <Link href="/tours" className="text-[#543609] font-medium hover:text-[#ac7313]">
              Tours
            </Link>
            <Link href="/hotels" className="text-[#543609] font-medium hover:text-[#ac7313]">
              Hotels
            </Link>
            <Link href="/blog" className="text-[#543609] font-medium hover:text-[#ac7313]">
              Blog
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
