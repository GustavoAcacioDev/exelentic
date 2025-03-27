"use client"

import { Layers, Code2, Database, BarChart2, Lightbulb, Zap } from "lucide-react"
import { useSectionVisibility } from "@/context/SectionVisibilityContext"

export default function Features() {
  const { isVisible, setRef } = useSectionVisibility()

  const features = [
    {
      icon: Layers,
      title: "Process Mapping",
      description: "Visualize and optimize your business processes with intuitive drag-and-drop mapping tools.",
    },
    {
      icon: Code2,
      title: "No-Code Automation",
      description: "Build complex automation workflows without writing a single line of code.",
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect with your existing tools and databases for seamless data flow across your organization.",
    },
    {
      icon: BarChart2,
      title: "Analytics Dashboard",
      description: "Monitor performance metrics and gain insights with real-time analytics and reporting.",
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Suggestions",
      description: "Receive intelligent recommendations to optimize your processes based on usage patterns.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Implement automation solutions in days, not months, with our streamlined deployment process.",
    },
  ]

  return (
    <section ref={setRef("features")} id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div
              className={`inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 ${isVisible.features ? "animate-bounce-subtle" : "opacity-0"}`}
            >
              Features
            </div>
            <h2
              className={`text-3xl font-bold tracking-tighter md:text-4xl/tight ${isVisible.features ? "animate-fadeIn" : "opacity-0"}`}
            >
              Streamline Your Workflow
            </h2>
            <p
              className={`max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${isVisible.features ? "animate-fadeIn animation-delay-300" : "opacity-0"}`}
            >
              Our platform offers comprehensive tools to automate every aspect of your business processes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isVisible.features ? "animate-fadeIn" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="rounded-full bg-blue-100 p-3 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

