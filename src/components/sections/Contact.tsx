"use client"

import { Button } from "@/components/ui/button"
import { useSectionVisibility } from "@/context/SectionVisibilityContext"

export default function Contact() {
    const { isVisible, setRef } = useSectionVisibility()

    return (
        <section
            ref={setRef("contact")}
            id="contact"
            className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 relative overflow-hidden"
        >
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-6">
                            <h2
                                className={`text-3xl font-bold tracking-tighter text-white md:text-4xl/tight ${isVisible.contact ? "animate-fadeIn" : "opacity-0"}`}
                            >
                                Get in Touch
                            </h2>
                            <p
                                className={`max-w-[600px] text-blue-100 md:text-xl/relaxed ${isVisible.contact ? "animate-fadeIn animation-delay-300" : "opacity-0"}`}
                            >
                                Ready to transform your business with automation? Contact us today to discuss your needs and discover
                                how we can help you achieve your goals.
                            </p>
                        </div>

                        <div className="space-y-4 text-blue-100">
                            {[
                                {
                                    icon: (
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
                                            className="h-6 w-6 text-blue-100"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    ),
                                    title: "Phone",
                                    content: "+1 (555) 123-4567",
                                },
                                {
                                    icon: (
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
                                            className="h-6 w-6 text-blue-100"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    ),
                                    title: "Email",
                                    content: "info@automatex.com",
                                },
                                {
                                    icon: (
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
                                            className="h-6 w-6 text-blue-100"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    ),
                                    title: "Location",
                                    content: "123 Automation Avenue, Tech City, TC 10101",
                                },
                            ].map((contact, index) => (
                                <div
                                    key={contact.title}
                                    className={`flex items-start space-x-4 ${isVisible.contact ? "animate-fadeIn" : "opacity-0"}`}
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    {contact.icon}
                                    <div>
                                        <h3 className="font-bold">{contact.title}</h3>
                                        <p>{contact.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className={`rounded-xl bg-white p-8 shadow-lg ${isVisible.contact ? "animate-slideInRight" : "opacity-0"}`}
                    >
                        <form className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="first-name"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        First name
                                    </label>
                                    <input
                                        id="first-name"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-blue-500"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="last-name"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        id="last-name"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-blue-500"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-blue-500"
                                    placeholder="john.doe@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="company"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Company
                                </label>
                                <input
                                    id="company"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-blue-500"
                                    placeholder="Your Company Ltd."
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-blue-500"
                                    placeholder="Tell us about your automation needs..."
                                />
                            </div>

                            <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-pulse-subtle">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

