"use client"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import HowItWorks from "@/components/sections/HowItWorks"
import Careers from "@/components/sections/Careers"
import Company from "@/components/sections/Company"
import Benefits from "@/components/sections/Benefits"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"
import { SectionVisibilityProvider } from "@/context/SectionVisibilityContext"
import AutomationComparison from "@/components/sections/AutomationComparison"
import Partners from "@/components/sections/Partners"

export default function HomeClient() {
  return (
    <SectionVisibilityProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Company />
          <Partners />
          <AutomationComparison />
          <HowItWorks />
          <Benefits />
          <Testimonials />
          <Careers />
          <Contact />
        </main>
        <Footer />
      </div>
    </SectionVisibilityProvider>
  )
}

