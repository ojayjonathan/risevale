"use client"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Clock, User, ChevronLeft, Share2 } from "lucide-react"
import { useParams } from "next/navigation"

// Blog posts data - same as in blog page
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
    content: `
      <h2>Why Kenya Should Be On Your Travel List</h2>
      <p>Kenya is one of Africa's most iconic travel destinations, offering unparalleled wildlife viewing opportunities, stunning landscapes, and rich cultural experiences. Whether you're a first-time traveler or a seasoned adventurer, Kenya has something magical to offer.</p>
      
      <h3>The Great Migration (July - October)</h3>
      <p>The Great Migration is arguably the most spectacular wildlife event in the world. Each year, over two million wildebeest, zebras, and other herbivores migrate from Tanzania's Serengeti to Kenya's Masai Mara in search of fresh grazing land. This journey is fraught with danger as predators await at every turn, creating dramatic moments that are both thrilling and humbling.</p>
      <p>During the dry season months of July to October, you'll witness river crossings, predator-prey interactions, and the raw power of nature in action. The Masai Mara is transformed into a wildlife spectacle unlike anywhere else on Earth.</p>
      
      <h3>Peak Seasons Explained</h3>
      <p><strong>Dry Season (June - October):</strong> This is the prime time for game viewing. The grass is short, animals congregate near water sources, and visibility is excellent. The Great Migration peaks during this time, particularly July and August.</p>
      <p><strong>Wet Season (November - May):</strong> While it may seem counterintuitive, the wet season offers unique advantages. The landscape is lush and green, bird watching is exceptional, and there are fewer tourists. The weather is generally pleasant, with short afternoon showers.</p>
      
      <h3>Wildlife Viewing Throughout the Year</h3>
      <p>Kenya's diverse ecosystems support an incredible variety of wildlife. From the iconic Big Five to lesser-known species, every season brings different opportunities. January to February is excellent for game viewing as animals remain concentrated near water sources during the dry season.</p>
      
      <h3>Planning Your Visit</h3>
      <p>Consider combining a safari in Kenya with visits to other regions. A typical itinerary might include the Masai Mara, Lake Nakuru, Lake Naivasha, and Mount Kenya. Each location offers distinct experiences and extends your wildlife viewing opportunities.</p>
    `,
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
    content: `
      <h2>Master Safari Photography Like a Pro</h2>
      <p>Safari photography can be incredibly rewarding, but it requires preparation, practice, and patience. Whether you're using a smartphone or a professional DSLR, these tips will help you capture stunning images of Africa's wildlife.</p>
      
      <h3>Camera Gear Essentials</h3>
      <p>While expensive gear isn't absolutely necessary, having the right equipment significantly improves your results. A telephoto lens is essential for safari photography, allowing you to get close-up shots of distant animals without disturbing them.</p>
      <p>Recommended gear: Full-frame DSLR or mirrorless camera, telephoto lens (200-600mm), sturdy tripod, and extra batteries. However, don't let lack of professional equipment discourage you – many award-winning photos have been taken with modest gear.</p>
      
      <h3>Composition Techniques</h3>
      <p><strong>Rule of Thirds:</strong> Place your subject off-center to create more dynamic and interesting compositions. Avoid centering your subject directly in the middle of the frame.</p>
      <p><strong>Leading Lines:</strong> Use natural lines in the landscape – rivers, paths, or tree lines – to draw the viewer's eye toward your subject.</p>
      <p><strong>Background Consideration:</strong> A clean background can make your subject stand out. Look for uncluttered backdrops, or use a wide aperture to create a blurred background effect.</p>
      
      <h3>Lighting is Everything</h3>
      <p>The golden hours – shortly after sunrise and before sunset – provide the most flattering natural light for wildlife photography. The warm, soft light creates beautiful highlights and shadows that add depth to your images.</p>
      <p>Midday harsh sunlight creates unflattering shadows and washes out colors. If you must shoot during midday, look for shaded areas or position animals between you and the sun for backlighting effects.</p>
      
      <h3>Camera Settings for Safari</h3>
      <p><strong>Shutter Speed:</strong> Use a fast shutter speed (at least 1/500s) to freeze animal movement and avoid motion blur.</p>
      <p><strong>ISO:</strong> Don't be afraid to increase ISO in low light conditions – modern cameras handle high ISO well.</p>
      <p><strong>Autofocus:</strong> Use continuous autofocus to track moving animals.</p>
    `,
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
    content: `
      <h2>Experience Luxury in the Heart of Africa</h2>
      <p>Tanzania's luxury safari lodges offer world-class accommodations combined with extraordinary wildlife viewing and authentic African hospitality. From intimate tented camps to sprawling resorts, these properties redefine luxury in the African wilderness.</p>
      
      <h3>Serengeti Luxury Lodges</h3>
      <p>The Serengeti is home to some of Africa's most exclusive lodges. These properties combine stunning architecture with exceptional service, offering guests an unparalleled wildlife experience.</p>
      
      <h3>Ngorongoro Conservation Area</h3>
      <p>Perched on the rim of the spectacular Ngorongoro Crater, several luxury lodges offer breathtaking views and access to one of Africa's most unique ecosystems. The crater's abundant wildlife and stunning scenery make it an unforgettable destination.</p>
      
      <h3>What to Expect</h3>
      <p>Luxury lodges in Tanzania typically feature spacious suites with premium amenities, gourmet dining experiences featuring local and international cuisine, and personalized safari experiences with expert guides. Many properties also offer spa facilities, wine cellars, and cultural experiences.</p>
    `,
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
    content: `
      <h2>Connect with the Maasai People</h2>
      <p>The Maasai are one of East Africa's most recognizable cultures, known for their distinctive red shawls, intricate beadwork, and strong connection to the land. A visit to a Maasai village offers insights into their fascinating traditions and way of life.</p>
      
      <h3>Understanding Maasai Culture</h3>
      <p>The Maasai have maintained their pastoral traditions for centuries, herding cattle across the plains of Kenya and Tanzania. Their culture is deeply rooted in respect for nature, community bonds, and age-old customs passed down through generations.</p>
      
      <h3>Village Visits</h3>
      <p>Many safari itineraries include visits to Maasai villages where you can interact with community members, learn about their daily lives, and witness traditional dances and crafts. These encounters provide authentic cultural experiences and support local communities.</p>
      
      <h3>Respectful Tourism</h3>
      <p>When visiting a Maasai village, approach the experience with respect and genuine curiosity. Learn about their perspective on wildlife conservation, their relationship with the land, and their aspirations for the future. Many villages have tourism programs that benefit the community directly.</p>
    `,
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
    content: `
      <h2>Protecting Africa's Wildlife Heritage</h2>
      <p>Africa's wildlife faces unprecedented challenges from habitat loss, poaching, and climate change. Conservation efforts are critical to ensure that future generations can experience the incredible biodiversity that defines the continent.</p>
      
      <h3>Major Conservation Challenges</h3>
      <p>Poaching remains a significant threat to large animals, particularly elephants and rhinos. Habitat fragmentation due to human expansion and agricultural development threatens many species' survival. Climate change is altering migration patterns and water availability, creating additional stresses on wildlife populations.</p>
      
      <h3>Success Stories</h3>
      <p>Despite these challenges, several conservation initiatives have achieved remarkable results. Community-based conservation programs in Kenya and Tanzania have shown that combining wildlife protection with economic incentives for local communities can create sustainable solutions.</p>
      
      <h3>How You Can Help</h3>
      <p>Tourism plays a crucial role in conservation. By choosing responsible tour operators and lodges that prioritize wildlife protection, you contribute directly to conservation efforts. Many properties donate portions of their revenue to conservation organizations and employ local rangers and guides.</p>
    `,
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
    content: `
      <h2>Your Complete First Safari Guide</h2>
      <p>Planning your first African safari can feel overwhelming, but with proper preparation, you'll be ready for an unforgettable adventure. This comprehensive guide covers everything you need to know.</p>
      
      <h3>Before You Go</h3>
      <p>Check visa requirements for your destination country well in advance. Visit your doctor for recommended vaccinations, typically including yellow fever, malaria prevention medication, and routine immunizations. Purchase travel insurance that covers adventure activities.</p>
      
      <h3>What to Pack</h3>
      <p>Pack neutral-colored clothing for wildlife viewing – animals are less disturbed by muted tones. Include lightweight layers for varying temperatures, a sun hat, sunscreen, and insect repellent. Binoculars are invaluable for spotting distant wildlife.</p>
      
      <h3>On Safari Etiquette</h3>
      <p>Listen to your guide's instructions – they have extensive knowledge of animal behavior and safety. Speak quietly to avoid disturbing wildlife. Never stand up in an open vehicle or extend your arms beyond the vehicle's sides.</p>
      
      <h3>What to Expect</h3>
      <p>Safari days typically start before dawn with a hot breakfast, followed by an early morning game drive when animals are most active. Midday brings a break at your lodge for relaxation and a meal. Afternoon drives often yield excellent wildlife viewing as animals become active again before sunset.</p>
    `,
  },
]



export default function BlogPostPage() {
  const {slug} = useParams<{slug:string}>()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main>
        <section className="section-padding">
          <div className="container-max text-center">
            <h1 className="heading-large mb-4">Post Not Found</h1>
            <p className="text-muted mb-6">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <main>
      {/* Hero Image */}
      <section className="h-96 bg-cover bg-center relative" style={{ backgroundImage: `url('${post.image}')` }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-max w-full pb-8 px-4">
            <Link href="/blog" className="flex items-center gap-2 text-white mb-4 hover:opacity-80 transition-opacity">
              <ChevronLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4">
              <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">{post.category}</span>
            </div>
            <h1 className="heading-large mb-4">{post.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-accent-lighter border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime} min read</span>
              </div>
              <span>{post.date}</span>
            </div>
          </div>

          {/* Content */}
          <article
            className="prose prose-sm md:prose-base max-w-none mb-12 text-accent"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n")
                .map((line) => {
                  if (line.trim().startsWith("<h2>")) {
                    return `<h2 className="text-3xl font-serif font-bold text-accent mt-8 mb-4">${line.match(/>(.+?)</)?.[1]}</h2>`
                  }
                  if (line.trim().startsWith("<h3>")) {
                    return `<h3 className="text-2xl font-serif font-bold text-accent mt-6 mb-3">${line.match(/>(.+?)</)?.[1]}</h3>`
                  }
                  if (line.trim().startsWith("<p>")) {
                    return `<p className="text-accent mb-4 leading-relaxed">${line.match(/>(.+?)</)?.[1]}</p>`
                  }
                  return line
                })
                .join("\n"),
            }}
          />

          {/* Share Section */}
          <div className="py-6 border-t border-b border-border mb-12">
            <div className="flex items-center gap-4">
              <Share2 size={20} className="text-accent" />
              <span className="font-semibold text-accent">Share this article</span>
              <div className="flex gap-3 ml-auto">
                <button className="px-3 py-2 bg-background border border-border rounded-lg text-accent hover:border-accent transition-colors">
                  Twitter
                </button>
                <button className="px-3 py-2 bg-background border border-border rounded-lg text-accent hover:border-accent transition-colors">
                  Facebook
                </button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="heading-medium mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <div
                        className="h-40 bg-cover bg-center"
                        style={{ backgroundImage: `url('${relatedPost.image}')` }}
                      />
                      <div className="p-4">
                        <p className="text-xs text-accent-lighter mb-2">{relatedPost.category}</p>
                        <h3 className="font-serif font-bold text-accent line-clamp-2">{relatedPost.title}</h3>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
