"use client"

import { Button } from "@/components/ui/button"
import { useSectionVisibility } from "@/context/SectionVisibilityContext"

export default function Careers() {
    const { isVisible, setRef } = useSectionVisibility()

    const jobs = [
        {
            category: "Engineering",
            title: "Senior Backend Developer",
            description: "Design and build scalable systems that power our automation platform.",
            requirements: [
                "5+ years experience with distributed systems",
                "Proficiency in Node.js, Python, or Go",
                "Experience with cloud infrastructure (AWS, GCP)",
            ],
        },
        {
            category: "Product",
            title: "UX/UI Designer",
            description: "Create intuitive interfaces that make complex automation simple.",
            requirements: [
                "3+ years of product design experience",
                "Proficiency in Figma and design systems",
                "Experience with complex enterprise applications",
            ],
        },
        {
            category: "Sales",
            title: "Enterprise Account Executive",
            description: "Help enterprise clients transform their operations with our platform.",
            requirements: [
                "5+ years of enterprise software sales",
                "Experience selling automation or workflow solutions",
                "Strong consultative selling skills",
            ],
        },
        {
            category: "Customer Success",
            title: "Implementation Specialist",
            description: "Guide customers through successful automation implementations.",
            requirements: [
                "3+ years in customer-facing technical roles",
                "Experience with SaaS implementation",
                "Strong project management skills",
            ],
        },
    ]

    return (
        <section ref={setRef("careers")} id="careers" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div
                            className={`inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 ${isVisible.careers ? "animate-bounce-subtle" : "opacity-0"}`}
                        >
                            Careers
                        </div>
                        <h2
                            className={`text-3xl font-bold tracking-tighter md:text-4xl/tight ${isVisible.careers ? "animate-fadeIn" : "opacity-0"}`}
                        >
                            Join Our Team
                        </h2>
                        <p
                            className={`max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${isVisible.careers ? "animate-fadeIn animation-delay-300" : "opacity-0"}`}
                        >
                            We're looking for talented individuals to help us build the future of process automation.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                    {jobs.map((job, index) => (
                        <div
                            key={job.title}
                            className={`flex flex-col rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isVisible.careers ? "animate-fadeIn" : "opacity-0"}`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                                    {job.category}
                                </div>
                                <h3 className="text-2xl font-bold">{job.title}</h3>
                                <p className="text-muted-foreground">{job.description}</p>
                                <ul className="mt-4 space-y-2">
                                    {job.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start">
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
                                                className="mr-2 h-5 w-5 text-blue-600"
                                            >
                                                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                                                <path d="m7 10 3 3 7-7" />
                                            </svg>
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                                    Apply Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className={`mx-auto max-w-3xl text-center ${isVisible.careers ? "animate-fadeIn animation-delay-1000" : "opacity-0"}`}
                >
                    <div className="rounded-xl bg-blue-50 p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                        <h3 className="mb-3 text-xl font-bold">Don't see the right position?</h3>
                        <p className="mb-4 text-muted-foreground">
                            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
                            mind for future opportunities.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                            Submit General Application
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

