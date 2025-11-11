"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("شكراً لك! سيتم التواصل معك قريباً.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-accent font-semibold">تواصل معنا</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">اتصل بنا لتعرف أكثر</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`space-y-8 ${isInView ? "animate-slide-in-right fade-in-up-delay-1" : "opacity-0"}`}>
            <div className="flex gap-4 p-4 rounded-lg hover:bg-secondary/10 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">العنوان</h3>
                <p className="text-muted-foreground">المملكة العربية السعودية</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg hover:bg-secondary/10 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">الهاتف</h3>
                <p className="text-muted-foreground">+966 XX XXX XXXX</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg hover:bg-secondary/10 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">البريد الإلكتروني</h3>
                <p className="text-muted-foreground">info@falalgharbia.com</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`space-y-4 ${isInView ? "animate-slide-in-left fade-in-up-delay-2" : "opacity-0"}`}
          >
            <input
              type="text"
              name="name"
              placeholder="الاسم"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <textarea
              name="message"
              placeholder="رسالتك"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
