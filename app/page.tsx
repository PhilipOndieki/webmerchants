import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import Services from '@/components/Services'
import OurWork from '@/components/OurWork'
import HowWeWork from '@/components/HowWeWork'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page(): React.JSX.Element {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <OurWork />
      <HowWeWork />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
