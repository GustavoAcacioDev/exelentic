"use client"

import { createContext, useContext, useState, useRef, useEffect, type ReactNode } from "react"

type SectionVisibilityContextType = {
  isVisible: { [key: string]: boolean }
  setRef: (section: string) => (el: HTMLElement | null) => void
}

const SectionVisibilityContext = createContext<SectionVisibilityContextType | undefined>(undefined)

export function SectionVisibilityProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const observerRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observers: { [key: string]: IntersectionObserver } = {}

    // Create observers for each section
    const sections = [
      "hero",
      "features",
      "how-it-works",
      "company",
      "benefits",
      "results",
      "testimonials",
      "careers",
      "contact",
      "cta",
    ]

    sections.forEach((section) => {
      observers[section] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [section]: true }))
          }
        },
        { threshold: 0.1 },
      )

      if (observerRefs.current[section]) {
        observers[section].observe(observerRefs.current[section]!)
      }
    })

    return () => {
      // Cleanup observers
      Object.values(observers).forEach((observer) => observer.disconnect())
    }
  }, [])

  // Helper function to set refs
  const setRef = (section: string) => (el: HTMLElement | null) => {
    observerRefs.current[section] = el
  }

  return <SectionVisibilityContext.Provider value={{ isVisible, setRef }}>{children}</SectionVisibilityContext.Provider>
}

export function useSectionVisibility() {
  const context = useContext(SectionVisibilityContext)
  if (context === undefined) {
    throw new Error("useSectionVisibility must be used within a SectionVisibilityProvider")
  }
  return context
}

