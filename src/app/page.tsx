"use client"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import HowItWorks from "@/components/sections/HowItWorks"
import Careers from "@/components/sections/Careers"
import Company from "@/components/sections/Company"
import Benefits from "@/components/sections/Benefits"
import Results from "@/components/sections/Results"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"
import CTA from "@/components/sections/CTA"
import { SectionVisibilityProvider } from "@/context/SectionVisibilityContext"

export default function HomeClient() {
  return (
    <SectionVisibilityProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Features />
          <HowItWorks />
          <Company />
          <Benefits />
          <Results />
          <Testimonials />
          <Careers />
          <Contact />
          <CTA />
        </main>
        <Footer />
      </div>
    </SectionVisibilityProvider>
  )
}

