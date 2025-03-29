"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false)

    // Show scroll to top button when scrolled down
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="w-full border-t bg-white text-primary">
            <div className="container mx-auto flex flex-col gap-6 py-8 md:py-12 lg:flex-row lg:justify-between lg:py-16">
                <div className="flex flex-col gap-4 lg:w-1/3 animate-fadeIn">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="inline-block font-bold text-primary text-xl">Exelentic</span>
                    </Link>
                    <p className="text-[#011826]">
                        Transforming business processes through intelligent automation. Reduce manual tasks, eliminate errors, and
                        focus on what matters most.
                    </p>
                    <div className="flex gap-4">
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
                                        className="h-5 w-5"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                ),
                                label: "Facebook",
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
                                        className="h-5 w-5"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                ),
                                label: "Twitter",
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
                                        className="h-5 w-5"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                ),
                                label: "LinkedIn",
                            },
                        ].map((social, index) => (
                            <Link
                                key={social.label}
                                href="#"
                                className="text-blue-300 hover:text-white transition-colors duration-300 hover:scale-110 transform animate-fadeIn"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {social.icon}
                                <span className="sr-only">{social.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:w-2/3">
                    {[
                        {
                            title: "Learn More",
                            links: ["About Us", "Values", "Career"],
                        },
                        {
                            title: "Services",
                            links: ["Implementation", "Project", "Full-Service"],
                        },
                        {
                            title: "Locations",
                            links: [
                                "Düsseldorf (D)",
                                "Munich (D)",
                                "Zug (CH)",
                                "Phone: +49 89 958990 281",
                                <span key="email">
                                    Email:{" "}
                                    <a href="mailto:info@exelentic.com" className="text-[#011826] hover:text-primary">
                                        info@exelentic.com
                                    </a>
                                </span>,
                            ],
                        },
                        {
                            title: "Legal",
                            links: ["Imprint", "Privacy Policy"],
                        },
                    ].map((section, sectionIndex) => (
                        <div
                            key={section.title}
                            className="space-y-3 animate-fadeIn"
                            style={{ animationDelay: `${sectionIndex * 200}ms` }}
                        >
                            <h4 className="text-base font-medium">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li
                                        key={typeof link === "string" ? link : `link-${linkIndex}`}
                                        className="animate-fadeIn"
                                        style={{ animationDelay: `${sectionIndex * 200 + linkIndex * 100}ms` }}
                                    >
                                        {typeof link === "string" ? (
                                            <Link href="#" className="text-[#011826] hover:text-primary transition-colors duration-300">
                                                {link}
                                            </Link>
                                        ) : (
                                            link
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-[#011826] py-6">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-sm text-[#011826] md:text-left animate-fadeIn">
                        © {new Date().getFullYear()} Exelentic GmbH. All rights reserved.
                    </p>
                    <p className="text-center text-sm text-[#011826] md:text-left animate-fadeIn animation-delay-500">
                        Made with <span className="animate-pulse-subtle text-red-400">❤️</span> for businesses worldwide
                    </p>
                </div>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg transition-all cursor-pointer duration-300 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-5 w-5" />
            </button>
        </footer>
    )
}

