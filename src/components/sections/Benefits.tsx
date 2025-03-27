"use client"

import { Button } from "@/components/ui/button"
import { useSectionVisibility } from "@/context/SectionVisibilityContext"
import { BarChart2 } from "lucide-react"

export default function Benefits() {
    const { isVisible, setRef } = useSectionVisibility()

    const benefits = [
        {
            icon: BarChart2,
            title: "Improved Efficiency",
            description:
                "Automation reduces the time spent on tasks and allows your team to focus on more value-added activities.",
        },
        {
            icon: () => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                </svg>
            ),
            title: "Cost Savings",
            description: "Automation helps lower operational costs by minimizing manual processes.",
        },
        {
            icon: () => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
            ),
            title: "Higher Accuracy",
            description: "Automated processes minimize human errors and lead to more consistent results.",
        },
        {
            icon: () => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M3 15h18" />
                    <path d="M9 3v18" />
                    <path d="M15 3v18" />
                </svg>
            ),
            title: "Scalability",
            description: "Automation enables your business to grow efficiently while maintaining the same quality of output.",
        },
        {
            icon: () => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: "Customization",
            description: "Our solutions are flexible and tailored to the specific needs of your business.",
        },
        {
            icon: () => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
            ),
            title: "Increased Security",
            description: "Using state-of-the-art technologies, we provide maximum security for your data and processes.",
        },
    ]

    const stats = [
        { value: "85%", label: "Reduction in processing time" },
        { value: "67%", label: "Decrease in errors" },
        { value: "3.5x", label: "Increase in throughput" },
        { value: "$1.2M", label: "Average annual savings" },
    ]

    return (
        <section
            ref={setRef("benefits")}
            id="benefits"
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div
                            className={`inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 ${isVisible.benefits ? "animate-bounce-subtle" : "opacity-0"}`}
                        >
                            Benefits
                        </div>
                        <h2
                            className={`text-3xl font-bold tracking-tighter md:text-4xl/tight ${isVisible.benefits ? "animate-fadeIn" : "opacity-0"}`}
                        >
                            The Benefits of Collaborating with Us
                        </h2>
                        <p
                            className={`max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${isVisible.benefits ? "animate-fadeIn animation-delay-300" : "opacity-0"}`}
                        >
                            Our automation solutions deliver tangible advantages to your business operations.
                        </p>
                    </div>
                </div>

                <div className="mt-16 relative">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-blob"></div>
                        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-blue-200 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
                        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-10 animate-blob animation-delay-4000"></div>
                    </div>

                    {/* Benefits grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                        {/* {benefits.map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className={`group bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-blue-50 ${isVisible.benefits ? "animate-fadeIn" : "opacity-0"}`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                                        {typeof benefit.icon === "function" ? (
                                            <benefit.icon />
                                        ) : (
                                            <benefit.icon className="h-6 w-6 text-blue-600" />
                                        )}
                                    </div>
                                    <h3 className="ml-4 text-xl font-bold">{benefit.title}</h3>
                                </div>
                                <p className="text-muted-foreground">{benefit.description}</p>
                                <div className="mt-4 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
                            </div>
                        ))} */}
                    </div>

                    {/* Animated counter section */}
                    <div
                        className={`mt-20 bg-blue-600 rounded-xl p-8 shadow-lg relative overflow-hidden ${isVisible.benefits ? "animate-fadeIn animation-delay-1000" : "opacity-0"}`}
                    >
                        <div className="absolute inset-0 bg-blue-500 opacity-30">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
                        </div>
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                            {stats.map((stat, index) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-4xl font-bold mb-2 animate-count" style={{ animationDelay: `${index * 200}ms` }}>
                                        {stat.value}
                                    </div>
                                    <p className="text-blue-100">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <Button
                        className={`bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105 duration-300 ${isVisible.benefits ? "animate-bounce-subtle" : "opacity-0"}`}
                    >
                        Learn More About Our Approach
                    </Button>
                </div>
            </div>
        </section>
    )
}

