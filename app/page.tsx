import Hero from "@/components/hero"
import FeaturedTours from "@/components/featured-tours"
import Destinations from "@/components/destinations-preview"
import Newsletter from "@/components/newsletter"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedTours />
      <Destinations />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
