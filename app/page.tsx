import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import QuickAccessSection from "@/components/sections/QuickAccessSection"
import NewsSection from "@/components/sections/NewsSection"
import UredniDeskaSection from "@/components/sections/UredniDeskaSection"
import EventsSection from "@/components/sections/EventsSection"
import AboutSection from "@/components/sections/AboutSection"
import OfficeSection from "@/components/sections/OfficeSection"
import GallerySection from "@/components/sections/GallerySection"
import CouncilSection from "@/components/sections/CouncilSection"
import ContactSection from "@/components/sections/ContactSection"
import SvgDivider from "@/components/ui/SvgDivider"

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="hlavni-obsah" tabIndex={-1}>
        {/* 1. Hero – vizuální identita obce */}
        <HeroSection />

        {/* 2. Nejčastěji hledáte – okamžitý přístup pro občany (klíčový prvek) */}
        <QuickAccessSection />

        {/* 3. Aktuality */}
        <NewsSection />

        {/* 4. Úřední deska – zákonná povinnost */}
        <UredniDeskaSection />

        {/* 5. Nadcházející akce */}
        <SvgDivider fromColor="#F9F8F6" toColor="#ffffff" />
        <EventsSection />

        {/* 6. O obci – identity a statistiky */}
        <SvgDivider fromColor="#ffffff" toColor="#F9F8F6" />
        <AboutSection />

        {/* 7. Digitální Brodce – e-Government */}
        <SvgDivider fromColor="#F9F8F6" toColor="#0F2240" />
        <OfficeSection />

        {/* 8. Fotogalerie */}
        <SvgDivider fromColor="#0F2240" toColor="#ffffff" />
        <GallerySection />

        {/* 9. Zastupitelstvo */}
        <SvgDivider fromColor="#ffffff" toColor="#F9F8F6" />
        <CouncilSection />

        {/* 10. Kontakt */}
        <SvgDivider fromColor="#F9F8F6" toColor="#ffffff" />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
