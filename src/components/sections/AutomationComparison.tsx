"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useSectionVisibility } from "@/context/SectionVisibilityContext"
import { Settings, Code2, Bot, Cpu, BrainCircuit, Workflow, FileCode, Gauge, ArrowRight } from "lucide-react"

export default function AutomationComparison() {
  const { isVisible, setRef } = useSectionVisibility()
  const [activeType, setActiveType] = useState(0)
  const [showComparison, setShowComparison] = useState(false)

  // Auto-cycle through automation types when not in comparison mode
  useEffect(() => {
    if (!isVisible.automation || showComparison) return

    const interval = setInterval(() => {
      setActiveType((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [isVisible.automation, showComparison])

  const automationTypes = [
    {
      name: "RPA",
      icon: Settings,
      color: "blue",
      description: "Software robots automating repetitive digital tasks.",
      features: [
        { icon: Workflow, text: "Rule based workflows focused on static, repetitive tasks" },
        { icon: FileCode, text: "Scripts, UI and API automation tools" },
        { icon: Gauge, text: "Static, repetitive workflows with consistent steps" },
        { text: "Handles simple, repetitive tasks efficiently" },
        { text: "High volume repetitive & structured tasks (Lower cost & lower cognition)" },
      ],
    },
    {
      name: "APA",
      icon: Code2,
      color: "purple",
      description: "Use of AI agents in workflows to automate complex, dynamic processes.",
      features: [
        { icon: BrainCircuit, text: "Workflows with augmented LLMs for semi-dynamic operations" },
        { icon: Cpu, text: "Advanced AI technologies (LLM agents with Tools & Memory) plus API & UI tools" },
        { icon: Workflow, text: "Semi-dynamic workflows requiring adjustments based on input" },
        { text: "Handles simple to complex dynamic tasks in workflows" },
        { text: "Better for medium to low volume workflows w/ cognition needed" },
      ],
    },
    {
      name: "AI Agents",
      icon: Bot,
      color: "orange",
      description: "Autonomous software planning & acting to achieve specified goals.",
      features: [
        { icon: BrainCircuit, text: "Dynamic LLM-driven planning & action systems" },
        { icon: Cpu, text: "Multi-modal AI with LLMs, APIs, and contextual understanding" },
        { icon: Workflow, text: "Dynamic & non-linear workflows needing real-time decisions" },
        { text: "Handles complex tasks autonomously" },
        { text: "Lower volume, highly unstructured or complex tasks (need best LLMs for planning)" },
      ],
    },
  ]

  // Comparison table data
  const comparisonData = [
    {
      category: "Core Function",
      rpa: "Software robots automating repetitive digital tasks",
      apa: "Use of AI agents in workflows to automate complex, dynamic processes",
      ai: "Autonomous software planning & acting to achieve specified goals",
    },
    {
      category: "Workflow Type",
      rpa: "Rule based workflows focused on static, repetitive tasks",
      apa: "Workflows with augmented LLMs for semi-dynamic operations",
      ai: "Dynamic LLM-driven planning & action systems",
    },
    {
      category: "Technology",
      rpa: "Scripts, UI and API automation tools",
      apa: "Advanced AI technologies (LLM agents with Tools & Memory) plus API & UI tools",
      ai: "Multi-modal AI with LLMs, APIs, and contextual understanding",
    },
    {
      category: "Process Type",
      rpa: "Static, repetitive workflows with consistent steps",
      apa: "Semi-dynamic workflows requiring adjustments based on input",
      ai: "Dynamic & non-linear workflows needing real-time decisions",
    },
    {
      category: "Task Complexity",
      rpa: "Handles simple, repetitive tasks efficiently",
      apa: "Handles simple to complex dynamic tasks in workflows",
      ai: "Handles complex tasks autonomously",
    },
    {
      category: "Volume & Structure",
      rpa: "High volume repetitive & structured tasks (Lower cost & lower cognition)",
      apa: "Better for medium to low volume workflows w/ cognition needed",
      ai: "Lower volume, highly unstructured or complex tasks (need best LLMs for planning)",
    },
  ]

  return (
    <section
      ref={setRef("automation")}
      id="automation"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-30 animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-100 rounded-full opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-100 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Section header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div
              className={`inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 ${
                isVisible.automation ? "animate-bounce-subtle" : "opacity-0"
              }`}
            >
              Automation Technologies
            </div>
            <h2
              className={`text-3xl font-bold tracking-tighter md:text-4xl/tight ${
                isVisible.automation ? "animate-fadeIn" : "opacity-0"
              }`}
            >
              RPA vs APA vs AI Agents
            </h2>
            <p
              className={`max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${
                isVisible.automation ? "animate-fadeIn animation-delay-300" : "opacity-0"
              }`}
            >
              Understanding the key differences between automation technologies and their applications
            </p>
          </div>
        </div>

        {/* View toggle */}
        <div
          className={`flex justify-center mb-8 ${isVisible.automation ? "animate-fadeIn animation-delay-500" : "opacity-0"}`}
        >
          <Button
            variant="outline"
            className="flex items-center gap-2 transition-all duration-300"
            onClick={() => setShowComparison(!showComparison)}
          >
            {showComparison ? "View Individual Cards" : "View Side-by-Side Comparison"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Card view */}
        {!showComparison && (
          <>
            {/* Comparison grid */}
            <div
              className={`grid gap-8 md:grid-cols-3 ${isVisible.automation ? "animate-fadeIn animation-delay-700" : "opacity-0"}`}
            >
              {automationTypes.map((type, index) => {
                const isActive = activeType === index
                const bgColor = index === 0 ? "bg-blue-50" : index === 1 ? "bg-purple-50" : "bg-orange-50"
                const borderColor =
                  index === 0 ? "border-blue-200" : index === 1 ? "border-purple-200" : "border-orange-200"
                const iconBg = index === 0 ? "bg-blue-100" : index === 1 ? "bg-purple-100" : "bg-orange-100"
                const iconColor = index === 0 ? "text-blue-600" : index === 1 ? "text-purple-600" : "text-orange-600"

                return (
                  <div
                    key={type.name}
                    className={`rounded-xl border ${borderColor} ${bgColor} p-6 transition-all duration-500 ${
                      isActive ? "transform scale-105 shadow-lg" : "opacity-70"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`rounded-full ${iconBg} p-3 mr-4`}>
                        <type.icon className={`h-6 w-6 ${iconColor} ${isActive ? "animate-pulse-subtle" : ""}`} />
                      </div>
                      <h3 className="text-2xl font-bold">{type.name}</h3>
                    </div>

                    <p className="mb-6 text-muted-foreground">{type.description}</p>

                    <div className="space-y-4">
                      {type.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-start ${isActive ? "animate-fadeIn" : ""}`}
                          style={{ animationDelay: `${featureIndex * 200}ms` }}
                        >
                          {feature.icon && (
                            <feature.icon className={`h-5 w-5 ${iconColor} mr-2 mt-0.5 flex-shrink-0`} />
                          )}
                          <span className="text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {/* Comparison table view */}
        {showComparison && (
          <div
            className={`overflow-x-auto ${isVisible.automation ? "animate-fadeIn animation-delay-600" : "opacity-0"}`}
          >
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-medium text-gray-600 border-b">Category</th>
                  <th className="p-4 text-left font-medium text-blue-600 border-b">
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 mr-2" />
                      RPA
                    </div>
                  </th>
                  <th className="p-4 text-left font-medium text-purple-600 border-b">
                    <div className="flex items-center">
                      <Code2 className="h-5 w-5 mr-2" />
                      APA
                    </div>
                  </th>
                  <th className="p-4 text-left font-medium text-orange-600 border-b">
                    <div className="flex items-center">
                      <Bot className="h-5 w-5 mr-2" />
                      AI Agents
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.category}
                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors duration-150`}
                  >
                    <td className="p-4 border-b font-medium">{row.category}</td>
                    <td className="p-4 border-b border-r bg-blue-50/30">{row.rpa}</td>
                    <td className="p-4 border-b border-r bg-purple-50/30">{row.apa}</td>
                    <td className="p-4 border-b bg-orange-50/30">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Technology summary */}
        <div
          className={`mt-16 text-center ${isVisible.automation ? "animate-fadeIn animation-delay-1000" : "opacity-0"}`}
        >
          <h3 className="text-xl font-bold mb-4">Which Automation Technology Is Right For You?</h3>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            The choice between RPA, APA, and AI Agents depends on your specific business needs. RPA excels at
            high-volume repetitive tasks, APA brings intelligence to semi-dynamic workflows, while AI Agents offer
            autonomous handling of complex, unstructured processes.
          </p>
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

