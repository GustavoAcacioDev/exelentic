"use client"

import { Button } from "@/components/ui/button"
import { useSectionVisibility } from "@/context/SectionVisibilityContext"

export default function HowItWorks() {
  const { isVisible, setRef } = useSectionVisibility()

  const steps = [
    {
      number: 1,
      title: "Project",
      description:
        "Commission us to develop your RPA landscape in traditional or agile IT projects and seamlessly hand it over to your specialized department.",
    },
    {
      number: 2,
      title: "Tandem & Collaborative Development",
      description:
        "Do you have RPA developers in-house? We work alongside you, develop new bots, and expand your RPA knowledge for sustainable success.",
    },
    {
      number: 3,
      title: "Quality Management",
      description:
        "Unhappy with the delivery speed of your robots? We are your direct contact for quality management, ensuring robust, long-lasting RPA solutions.",
    },
    {
      number: 4,
      title: "Full-Service",
      description:
        "Want to utilize RPA without in-house personnel? Our team ensures a stable, maintained, and flexible RPA solution for your company.",
    },
    {
      number: 5,
      title: '"Firefighting"',
      description:
        "We rescue RPA projects that initially failed. With our expertise, we resolve alignment issues and sustainably build out projects.",
    },
    {
      number: 6,
      title: "Consulting & Support",
      description:
        "Our experienced team offers consulting and support to successfully implement and further develop your automation projects.",
    },
  ]

  return (
    <section
      ref={setRef("how-it-works")}
      id="how-it-works"
      className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div
              className={`inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 ${isVisible["how-it-works"] ? "animate-bounce-subtle" : "opacity-0"}`}
            >
              How It Works
            </div>
            <h2
              className={`text-3xl font-bold tracking-tighter md:text-4xl/tight ${isVisible["how-it-works"] ? "animate-fadeIn" : "opacity-0"}`}
            >
              How We Work for You or Collaboratively
            </h2>
            <p
              className={`max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${isVisible["how-it-works"] ? "animate-fadeIn animation-delay-300" : "opacity-0"}`}
            >
              Choose the engagement model that works best for your organization's needs and capabilities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col rounded-xl bg-blue-100/50 p-6 transition-all duration-300 hover:bg-blue-100 hover:shadow-lg ${isVisible["how-it-works"] ? "animate-fadeIn" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 text-4xl font-bold text-blue-600 animate-count">{step.number}</div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-8">
          <Button
            className={`bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 ${isVisible["how-it-works"] ? "animate-bounce-subtle" : "opacity-0"}`}
          >
            Discuss Your Needs
          </Button>
        </div>
      </div>
    </section>
  )
}

