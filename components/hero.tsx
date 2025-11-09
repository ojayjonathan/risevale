import Link from "next/link"
import { Search } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/kenyan-landscape-sunset.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white container-max px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-balance">Find Your Next Adventure</h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-dark text-pretty">
          Discover extraordinary experiences across Kenya, Africa, and beyond
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto bg-white rounded-full p-2 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search destinations..."
            className="flex-1 px-4 py-2 text-accent outline-none"
          />
          <button className="btn-primary m-0 px-4">
            <Search size={20} />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tours" className="btn-primary">
            Explore Tours
          </Link>
          <Link href="/contact" className="btn-secondary">
            Plan Custom Trip
          </Link>
        </div>
      </div>
    </section>
  )
}
