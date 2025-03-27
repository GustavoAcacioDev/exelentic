"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Repeat, Zap } from "lucide-react"
import { useSectionVisibility } from "@/context/SectionVisibilityContext"
import { HeroSvg } from "@/assets/svg"

export default function Hero() {
    const { isVisible, setRef } = useSectionVisibility()

    return (
        <section
            ref={setRef("hero")}
            className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 -z-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 -z-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                <div className="container mx-auto flex items-centr justify-center gap-6">
                    <Image src={HeroSvg} alt="" className={`${isVisible.hero ? "animate-slideInLeft" : "opacity-0"}`} />

                    <div className="flex flex-col gap-6 justify-center">
                        <h1 className={`text-5xl font-extrabold text-gray-800 leading-[60px] ${isVisible.hero ? "animate-slideInLeft animation-delay-300" : "opacity-0"}`}>If you hate it,{' '}
                            <br />
                            <span className="text-primary">automate</span>{' '}
                            it!
                        </h1>

                        <div className="flex gap-4">
                            <Button variant="default" className={`${isVisible.hero ? "animate-slideInLeft animation-delay-300" : "opacity-0"}`}>Mehr erfahren</Button>
                            <Button variant="outline" className={`${isVisible.hero ? "animate-slideInLeft animation-delay-300" : "opacity-0"}`}>Watch Demo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

