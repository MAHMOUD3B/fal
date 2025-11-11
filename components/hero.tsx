"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="./fal.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      {/* <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          حلول تقنية متكاملة للمستقبل
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
          تأسست فال الغربية عام 1995 كشريك سعودي موثوق يقدّم حلولًا متكاملة عبر
          شراكات محلية ودولية
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 animate-scale-in"
          >
            اكتشف خدماتنا
          </Link>
          <Link
            href="/#contact"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 animate-scale-in fade-in-up-delay-1"
          >
            تواصل معنا
          </Link>
        </div>
      </div> */}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );
}
