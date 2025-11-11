"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { label: "سنة التأسيس", value: "1995" },
    { label: "سنة الخبرة", value: "28+" },
    { label: "مجالات الخدمة", value: "6" },
  ]

  const values = [
    "الاستشارة والتخطيط للمشاريع والتنفيذ",
    "الالتزام بمعايير الجودة والحوكمة والسلامة",
    "شركات راسخة وموثوقة نحو رؤية 2030",
  ]

  return (
    <section id="about" className="pt-20 md:pt-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-accent font-semibold text-lg block mb-2">عن الشركة</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">نبذة عن فال الغربية</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`${isInView ? "animate-slide-in-right fade-in-up-delay-1" : "opacity-0"}`}>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              تأسست فال الغربية عام 1995 كشركة سعودية موثوقة، ونقدم حلولاً متكاملة من خلال شركات محلية ودولية. نلتزم
              بتطوير البنية التحتية بما يتناسب مع رؤية المملكة 2030، مع التركيز على الجودة والابتكار والخدمة العملية.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-primary/5 rounded-lg p-4 text-center hover:shadow-lg transition-shadow hover:scale-105"
                  style={{
                    animationDelay: isInView ? `${index * 0.1}s` : "0s",
                  }}
                >
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`space-y-4 ${isInView ? "animate-slide-in-left fade-in-up-delay-2" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold text-foreground mb-6">لماذا فال الغربية؟</h3>
            {values.map((value, index) => (
              <div key={index} className="flex gap-3 p-3 rounded-lg hover:bg-secondary/10 transition-colors">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1 hover:scale-110 transition-transform">
                  <span className="text-accent-foreground text-sm font-bold">✓</span>
                </div>
                <p className="text-foreground leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
