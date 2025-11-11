"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const services = [
  {
    id: 1,
    title: "الخدمات الأمنية والسلامة",
    description: "فحص الأمن الشامل والحماية الموثوقة",
    fullDescription: "خدمات أمنية متكاملة تشمل الفحص الشامل للمنشآت، حماية البيانات، والاستشارات الأمنية الدقيقة.",
    image: "/services/safety.jpg",
    category: "security",
  },
  {
    id: 2,
    title: "خدمات الوساطة التجارية",
    description: "تسهيل العمليات التجارية والشراكات",
    fullDescription: "خدمات وساطة تجارية احترافية تربط بين المشترين والبائعين وتسهل الصفقات التجارية المعقدة.",
    image: "/services/commercial.jpg",
    category: "commercial",
  },
  {
    id: 3,
    title: "حلول تقنية المعلومات",
    description: "حلول رقمية متطورة ومتكاملة",
    fullDescription: "تطوير تطبيقات وحلول تقنية متقدمة تساعد الشركات على التحول الرقمي والتطور التكنولوجي.",
    image: "/services/it-solutions.jpg",
    category: "it",
  },
  {
    id: 4,
    title: "خدمات الخدمات العقارية",
    description: "إدارة واستثمار عقاري متخصص",
    fullDescription: "خدمات عقارية شاملة من البيع والشراء إلى الإدارة والاستثمار العقاري المربح.",
    image: "/services/real-estate.jpg",
    category: "real-estate",
  },
  {
    id: 5,
    title: "خدمات المقاولات",
    description: "بناء ومشاريع هندسية متخصصة",
    fullDescription: "خدمات مقاولات عامة شاملة تغطي جميع أنواع المشاريع السكنية والتجارية والصناعية.",
    image: "/services/commercial-brokerage.jpg",
    category: "engineering",
  },
  {
    id: 6,
    title: "الخدمات المالية والإلكترونية",
    description: "حلول مالية وإلكترونية موثوقة",
    fullDescription: "خدمات مالية وإلكترونية متطورة تشمل التسهيلات المالية والمعاملات الإلكترونية الآمنة.",
    image: "/services/it-services.jpg",
    category: "financial",
  },
]

const filterOptions = [
  { id: "all", label: "كل الخدمات" },
  { id: "security", label: "الخدمات الأمنية" },
  { id: "real-estate", label: "الخدمات العقارية" },
  { id: "financial", label: "الخدمات المالية" },
  { id: "engineering", label: "الخدمات الهندسية" },
  { id: "commercial", label: "المزيد" },
]

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredServices =
    activeFilter === "all" ? services : services.filter((service) => service.category === activeFilter)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`font-semibold text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === option.id ? "bg-accent text-white" : "text-accent bg-accent/10 hover:bg-accent/20"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">خدماتنا</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المتخصصة التي تلبي احتياجات عملائنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-300">
            {filteredServices.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-gray-200"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative overflow-hidden h-56 bg-gray-200">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white p-6">
                  <p className="text-accent text-sm font-semibold mb-2">{service.description}</p>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.fullDescription}</p>
                  <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                    اعرف المزيد
                    <ChevronLeft size={18} className="mr-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">لا توجد خدمات في هذه الفئة</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
