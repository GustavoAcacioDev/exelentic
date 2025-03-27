"use client"

import { useSectionVisibility } from "@/context/SectionVisibilityContext"
import { LineChart, Award, Briefcase } from "lucide-react"

export default function Company() {
  const { isVisible, setRef } = useSectionVisibility()

  const companyCards = [
    {
      icon: LineChart,
      title: "Our Foundation",
      description:
        "Automation reduces error rates and saves costs by relieving RPA teams from manual tasks, giving them more time for strategic activities.",
    },
    {
      icon: Award,
      title: "Quality Leadership",
      description:
        "As a quality leader in Central Europe, we optimize processes with innovative, tailored solutions to increase efficiency and scalability.",
    },
    {
      icon: Briefcase,
      title: "Benefits of Automation",
      description:
        "Founded in 2018 by IT experts, we specialize in sustainable process automation and optimization with RPA, OCR, Process Mining, and AI.",
    },
  ]

  return (
    <section
      ref={setRef("company")}
      id="company"
      className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div
              className={`inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 ${isVisible.company ? "animate-bounce-subtle" : "opacity-0"}`}
            >
              Company
            </div>
            <h2
              className={`text-3xl font-bold tracking-tighter md:text-4xl/tight ${isVisible.company ? "animate-fadeIn" : "opacity-0"}`}
            >
              Our Company
            </h2>
            <p
              className={`max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${isVisible.company ? "animate-fadeIn animation-delay-300" : "opacity-0"}`}
            >
              Learn more about who we are and what makes us the right partner for your automation journey.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {companyCards.map((card, index) => (
            <div
              key={card.title}
              className={`bg-white rounded-xl p-8 shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isVisible.company ? "animate-fadeIn" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <card.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
              <div className="h-1 w-0 bg-blue-600 mt-6 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      </div>
    </section>
  )
}

