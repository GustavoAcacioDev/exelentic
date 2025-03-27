"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2 animate-fadeIn">
                        <span className="inline-block font-bold text-primary text-xl">Exelentic</span>
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="hidden gap-6 md:flex">
                        {[
                            "company",
                            "partners",
                            "automation",
                            "how-it-works",
                            "benefits",
                            "careers",
                            "contact",
                        ].map((item, index) => (
                            <Link
                                key={item}
                                href={`#${item}`}
                                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground animate-fadeIn"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {item
                                    .split("-")
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(" ")}
                            </Link>
                        ))}

                        <Button>DE/EN</Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

