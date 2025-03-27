"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSectionVisibility } from "@/context/SectionVisibilityContext"
import { Award, Building, Cpu, Briefcase, Factory } from "lucide-react"

export default function Partners() {
  const { isVisible, setRef } = useSectionVisibility()
  const [activeCategory, setActiveCategory] = useState("featured")

  // Partner logo data organized by category
  const partnerCategories = [
    {
      id: "featured",
      name: "We Are Known For",
      icon: Award,
      logos: [
        { name: "Microsoft", id: "microsoft" },
        { name: "Amazon", id: "amazon" },
        { name: "Google", id: "google" },
        { name: "IBM", id: "ibm" },
        { name: "Oracle", id: "oracle" },
      ],
    },
    {
      id: "industry",
      name: "Industry Partners",
      icon: Factory,
      logos: [
        { name: "BuildCorp", id: "buildcorp" },
        { name: "SportsTech", id: "sportstech" },
      ],
    },
    {
      id: "technology",
      name: "Technology",
      icon: Cpu,
      logos: [
        { name: "Apple", id: "apple" },
        { name: "Samsung", id: "samsung" },
        { name: "Intel", id: "intel" },
        { name: "Nvidia", id: "nvidia" },
        { name: "AMD", id: "amd" },
        { name: "Cisco", id: "cisco" },
        { name: "Dell", id: "dell" },
        { name: "HP", id: "hp" },
        { name: "Lenovo", id: "lenovo" },
      ],
    },
    {
      id: "strategy",
      name: "Strategy",
      icon: Briefcase,
      logos: [
        { name: "McKinsey", id: "mckinsey" },
        { name: "BCG", id: "bcg" },
        { name: "Deloitte", id: "deloitte" },
        { name: "KPMG", id: "kpmg" },
        { name: "PwC", id: "pwc" },
        { name: "EY", id: "ey" },
        { name: "Accenture", id: "accenture" },
        { name: "Bain", id: "bain" },
        { name: "Capgemini", id: "capgemini" },
        { name: "Cognizant", id: "cognizant" },
        { name: "Infosys", id: "infosys" },
      ],
    },
  ]

  return (
    <section ref={setRef("partners")} id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div
              className={`inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 ${
                isVisible.partners ? "animate-bounce-subtle" : "opacity-0"
              }`}
            >
              Our Partners
            </div>
            <h2
              className={`text-3xl font-bold tracking-tighter md:text-4xl/tight ${
                isVisible.partners ? "animate-fadeIn" : "opacity-0"
              }`}
            >
              Trusted by Industry Leaders
            </h2>
            <p
              className={`max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${
                isVisible.partners ? "animate-fadeIn animation-delay-300" : "opacity-0"
              }`}
            >
              We collaborate with leading organizations across various industries to deliver exceptional automation
              solutions.
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div className={`${isVisible.partners ? "animate-fadeIn animation-delay-500" : "opacity-0"}`}>
          <Tabs defaultValue="featured" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-1">
                {partnerCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 px-3 py-2">
                    <category.icon className="h-4 w-4" />
                    <span className="hidden md:inline">{category.name}</span>
                    <span className="md:hidden">{category.name.split(" ")[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Logo grids for each category */}
            {partnerCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                    <category.icon className="h-6 w-6 text-blue-600" />
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {category.id === "featured" && "Our most prominent partnerships"}
                    {category.id === "industry" && "Specialized industry partners in construction and sports"}
                    {category.id === "technology" && "Collaborating with tech industry leaders"}
                    {category.id === "strategy" && "Strategic partnerships for business transformation"}
                  </p>
                </div>

                {/* Center the logos for categories with fewer items */}
                <div
                  className={`
                  ${
                    category.logos.length <= 5
                      ? "flex flex-wrap justify-center gap-8"
                      : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
                  }
                  ${category.id === "featured" || category.id === "industry" ? "max-w-4xl mx-auto" : ""}
                `}
                >
                  {category.logos.map((logo, index) => (
                    <div
                      key={logo.id}
                      className={`
                        flex flex-col items-center justify-center p-6 rounded-lg border bg-white shadow-sm 
                        hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fadeIn
                        ${category.logos.length <= 5 ? "w-[180px]" : ""}
                      `}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-24 h-24 relative mb-4 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                          {/* Placeholder for actual logo images */}
                          <Image
                            src={`/placeholder.svg?height=64&width=64&text=${logo.name.charAt(0)}`}
                            alt={`${logo.name} logo`}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <span className="text-sm font-medium">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Partner statistics */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${
            isVisible.partners ? "animate-fadeIn animation-delay-1000" : "opacity-0"
          }`}
        >
          <div className="p-6 rounded-lg bg-blue-50">
            <div className="text-4xl font-bold text-blue-600 mb-2 animate-count">30+</div>
            <p className="text-sm text-muted-foreground">Partner Companies</p>
          </div>
          <div className="p-6 rounded-lg bg-blue-50">
            <div className="text-4xl font-bold text-blue-600 mb-2 animate-count">4</div>
            <p className="text-sm text-muted-foreground">Industry Sectors</p>
          </div>
          <div className="p-6 rounded-lg bg-blue-50">
            <div className="text-4xl font-bold text-blue-600 mb-2 animate-count">12+</div>
            <p className="text-sm text-muted-foreground">Years of Collaboration</p>
          </div>
          <div className="p-6 rounded-lg bg-blue-50">
            <div className="text-4xl font-bold text-blue-600 mb-2 animate-count">100+</div>
            <p className="text-sm text-muted-foreground">Joint Projects</p>
          </div>
        </div>

        {/* Testimonial highlight */}
        <div
          className={`mt-16 max-w-3xl mx-auto text-center ${
            isVisible.partners ? "animate-fadeIn animation-delay-1200" : "opacity-0"
          }`}
        >
          <blockquote className="italic text-xl text-muted-foreground">
            "AutomateX has been an invaluable partner in our digital transformation journey. Their automation solutions
            have significantly improved our operational efficiency."
          </blockquote>
          <div className="mt-4 font-medium">— CTO, Fortune 500 Technology Company</div>
        </div>
      </div>
    </section>
  )
}

