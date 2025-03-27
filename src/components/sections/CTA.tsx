"use client"

import { Button } from "@/components/ui/button"
import { useSectionVisibility } from "@/context/SectionVisibilityContext"

export default function CTA() {
    const { isVisible, setRef } = useSectionVisibility()

    return (
        <section ref={setRef("cta")} className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2
                            className={`text-3xl font-bold tracking-tighter md:text-4xl/tight ${isVisible.cta ? "animate-slideInBottom" : "opacity-0"}`}
                        >
                            Ready to Transform Your Business?
                        </h2>
                        <p
                            className={`max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${isVisible.cta ? "animate-slideInBottom animation-delay-300" : "opacity-0"}`}
                        >
                            Join thousands of companies that have revolutionized their operations with our automation platform.
                        </p>
                    </div>
                    <div
                        className={`flex flex-col gap-2 min-[400px]:flex-row ${isVisible.cta ? "animate-slideInBottom animation-delay-600" : "opacity-0"}`}
                    >
                        <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-pulse-subtle">
                            Start Free Trial
                        </Button>
                        <Button variant="outline" className="transition-all duration-300 hover:scale-105">
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

