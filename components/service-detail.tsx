"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { ArrowLeft } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  fullDescription: string
  icon: string
  details: string[]
}

interface ServiceDetailProps {
  service: Service
  index: number
}

export default function ServiceDetail({ service, index }: ServiceDetailProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent cursor-pointer ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{
        animationDelay: isInView ? `${index * 0.1}s` : "0s",
      }}
    >
      <Link href={`/services/${service.id}`} className="block h-full">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
        <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
        <p className="text-gray-700 mb-6 leading-relaxed">{service.fullDescription}</p>
        <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
          تفاصيل المزيد
          <ArrowLeft size={18} className="mr-2" />
        </div>
      </Link>
    </div>
  )
}
