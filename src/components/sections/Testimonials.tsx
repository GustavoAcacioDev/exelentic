"use client"

import { useSectionVisibility } from "@/context/SectionVisibilityContext"

export default function Testimonials() {
  const { isVisible, setRef } = useSectionVisibility()

  const testimonials = [
    {
      quote:
        "AutomateX transformed our operations. We've reduced processing time by 90% and eliminated virtually all manual errors.",
      name: "Sarah Johnson",
      title: "CTO, Global Logistics Inc.",
    },
    {
      quote:
        "The no-code interface made it possible for our team to automate complex workflows without IT support. Game changer!",
      name: "Michael Chen",
      title: "Operations Director, TechSolutions",
    },
    {
      quote:
        "ROI was immediate. Within 3 months, we saved over $300,000 in operational costs and improved customer satisfaction scores.",
      name: "Emily Rodriguez",
      title: "CFO, Retail Innovations",
    },
  ]

  return (
    <section
      ref={setRef("testimonials")}
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              className={`text-3xl font-bold tracking-tighter md:text-4xl/tight ${isVisible.testimonials ? "animate-fadeIn" : "opacity-0"}`}
            >
              Trusted by Industry Leaders
            </h2>
            <p
              className={`max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${isVisible.testimonials ? "animate-fadeIn animation-delay-300" : "opacity-0"}`}
            >
              See what our customers have to say about their experience with our automation platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`flex flex-col justify-between space-y-4 rounded-xl bg-white p-6 text-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isVisible.testimonials ? "animate-fadeIn" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-2">
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-blue-100 p-1">
                  <div className="h-8 w-8 rounded-full bg-blue-600 animate-pulse-subtle" />
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

