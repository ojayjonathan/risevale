"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Clock, User, ArrowRight } from "lucide-react"

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Best Time to Visit Kenya",
    excerpt:
      "Discover the perfect season for your Kenyan safari adventure. Learn about wildlife patterns and weather conditions.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: 5,
    category: "Travel Guide",
    image: "/kenyan-landscape-sunset.jpg",
    slug: "best-time-visit-kenya",
  },
  {
    id: 2,
    title: "Safari Photography Tips for Beginners",
    excerpt:
      "Capture stunning wildlife moments with these expert photography tips tailored for first-time safari photographers.",
    author: "James Mitchell",
    date: "December 10, 2024",
    readTime: 7,
    category: "Tips & Tricks",
    image: "/wildlife-photography-safari.png",
    slug: "safari-photography-tips",
  },
  {
    id: 3,
    title: "Luxury Lodges in Tanzania",
    excerpt: "Explore the most exclusive and luxurious safari lodges in Tanzania offering unforgettable experiences.",
    author: "Emma Wilson",
    date: "December 5, 2024",
    readTime: 6,
    category: "Accommodations",
    image: "/luxury-safari-lodge-tanzania.jpg",
    slug: "luxury-lodges-tanzania",
  },
  {
    id: 4,
    title: "Cultural Encounters: Meeting the Maasai",
    excerpt: "Experience authentic Maasai culture, traditions, and hospitality in their natural habitat.",
    author: "Michael Okoye",
    date: "November 28, 2024",
    readTime: 8,
    category: "Culture",
    image: "/maasai-warriors-traditional.jpg",
    slug: "cultural-encounters-maasai",
  },
  {
    id: 5,
    title: "Wildlife Conservation in Africa",
    excerpt:
      "Learn about critical conservation efforts protecting Africa's incredible biodiversity for future generations.",
    author: "Dr. Patricia Kiprotich",
    date: "November 22, 2024",
    readTime: 9,
    category: "Conservation",
    image: "/african-wildlife-conservation.png",
    slug: "wildlife-conservation-africa",
  },
  {
    id: 6,
    title: "Planning Your First African Safari",
    excerpt: "A comprehensive guide for first-time safari travelers covering planning, packing, and what to expect.",
    author: "David Kimani",
    date: "November 15, 2024",
    readTime: 10,
    category: "Travel Guide",
    image: "/safari-adventure-group-travelers.jpg",
    slug: "planning-first-african-safari",
  },
]

const CATEGORIES = ["All", "Travel Guide", "Tips & Tricks", "Accommodations", "Culture", "Conservation"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-accent">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Travel Insights & Stories</h1>
          <p className="text-primary-dark text-lg">Expert tips, guides, and tales from African adventures</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-max">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-accent placeholder:text-accent-lighter"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors font-medium ${
                    selectedCategory === category
                      ? "bg-accent text-white"
                      : "bg-background border border-border text-accent hover:border-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col cursor-pointer">
                    {/* Image */}
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${post.image}')` }}
                    >
                      <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-serif text-xl font-bold text-accent mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-muted text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                      {/* Meta Information */}
                      <div className="mt-auto pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-xs text-accent-lighter mb-4">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-accent-lighter">{post.date}</span>
                          <ArrowRight size={16} className="text-accent" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted text-lg mb-4">No blog posts found matching your search</p>
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchTerm("")
                }}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
