"use client"

import Image from "next/image"
import { useSectionVisibility } from "@/context/SectionVisibilityContext"

export default function Results() {
  const { isVisible, setRef } = useSectionVisibility()

  const stats = [
    { value: "85%", label: "Reduction in manual processing time" },
    { value: "67%", label: "Decrease in operational errors" },
    { value: "3.5x", label: "Increase in process throughput" },
    { value: "$1.2M", label: "Average annual savings for enterprise clients" },
  ]

  return (
    <section ref={setRef("results")} className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div
                className={`inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 ${isVisible.results ? "animate-bounce-subtle" : "opacity-0"}`}
              >
                Results
              </div>
              <h2
                className={`text-3xl font-bold tracking-tighter md:text-4xl/tight ${isVisible.results ? "animate-fadeIn" : "opacity-0"}`}
              >
                Measurable Impact on Your Business
              </h2>
              <p
                className={`max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${isVisible.results ? "animate-fadeIn animation-delay-300" : "opacity-0"}`}
              >
                Our customers see significant improvements in efficiency, accuracy, and cost savings after implementing
                our automation solutions.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col space-y-2 ${isVisible.results ? "animate-fadeIn" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl font-bold text-blue-600 animate-count">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`flex items-center justify-center ${isVisible.results ? "animate-slideInRight" : "opacity-0"}`}
          >
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl border bg-background shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Results Dashboard"
                width={500}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

