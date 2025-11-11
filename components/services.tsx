"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "قطاع السلامة والأمن",
      description: "خدمات الأمن والسلامة",
      image: "/services/safety.jpg",
    },
    {
      id: 2,
      title: "الوساطة التجارية",
      description: "خدمات الوساطة التجارية",
      image: "/services/commercial.jpg",
    },
    {
      id: 3,
      title: "حلول تقنية متقدمة",
      description: "الخدمات الإلكترونية",
      image: "/services/it-services.jpg",
    },
    {
      id: 4,
      title: "إدارة وتطوير العقارات",
      description: "الخدمات العقارية",
      image: "/services/real-estate.jpg",
    },
    {
      id: 5,
      title: "تقنية وتكنولوجيا وتطوير",
      description: "الخدمات المالية",
      image: "/services/commercial-brokerage.jpg",
    },
  ]

  const partners = [
    { id: 1, name: "KIA", logo: "KIA" },
    { id: 2, name: "MOTC", logo: "MOTC" },
    { id: 3, name: "MG", logo: "MG" },
    { id: 4, name: "شركة الجزيرة", logo: "شركة" },
  ]

  const [current, setCurrent] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  const itemsPerView = 4
  const totalSlides = Math.ceil(partners.length / itemsPerView)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const diff = e.clientX - startX
    setDragOffset(diff)
  }

  const handleMouseUp = (e) => {
    if (!isDragging) return
    setIsDragging(false)

    const diff = e.clientX - startX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && current > 0) {
        setCurrent(current - 1)
      } else if (diff < 0 && current < totalSlides - 1) {
        setCurrent(current + 1)
      }
    }
    setDragOffset(0)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setDragOffset(0)
    }
  }

  const next = () => {
    if (current < totalSlides - 1) setCurrent(current + 1)
  }

  const prev = () => {
    if (current > 0) setCurrent(current - 1)
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-lg block mb-2">خدماتنا</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">أبرز الخدمات التي تقدمها شركة فال الغربية</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="bg-white p-6">
                <span className="text-accent text-sm font-semibold block mb-2">{service.description}</span>
                <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mb-16">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            جميع الخدمات
          </Link>
        </div>

        {/* Partners Section */}
        <div className="border-t border-b border-gray-200 py-16 mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">شركاء النجاح</h3>

          <div className="relative">
            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
                }}
              >
                {partners.map((partner) => (
                  <div key={partner.id} className="w-full md:w-1/4 flex-shrink-0 px-4">
                    <div className="text-center h-24 flex items-center justify-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-3xl font-bold text-gray-400">{partner.logo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              disabled={current === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-accent hover:bg-accent/90 text-white disabled:bg-gray-300 transition-all z-10"
              aria-label="السابق"
            >
              <ChevronRight size={24} />
            </button>
            <button
              onClick={next}
              disabled={current === totalSlides - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-accent hover:bg-accent/90 text-white disabled:bg-gray-300 transition-all z-10"
              aria-label="التالي"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? "bg-accent w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
                  aria-label={`اذهب إلى الشريحة ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold text-primary mb-12">سنوات من التميز</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">+30</div>
              <div className="text-foreground font-semibold">سنة خبرة</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">8,991+</div>
              <div className="text-foreground font-semibold">تقرير</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">9,919+</div>
              <div className="text-foreground font-semibold">عملية</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">14,983+</div>
              <div className="text-foreground font-semibold">عميل</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-300">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">24</div>
              <div className="text-foreground font-semibold">عامل</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">499+</div>
              <div className="text-foreground font-semibold">شركة عميل</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">1,998</div>
              <div className="text-foreground font-semibold">عقد</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">6</div>
              <div className="text-foreground font-semibold">فرع</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">19</div>
              <div className="text-foreground font-semibold">شركة تابعة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
