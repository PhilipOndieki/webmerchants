import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import StackSelector from '@/components/StackSelector'
import OurWork from '@/components/OurWork'
import HowWeWork from '@/components/HowWeWork'
import BizRegistration from '@/components/BizRegistration'
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
      <Services />
      <StackSelector />
      <OurWork />
      <HowWeWork />
      <BizRegistration />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
