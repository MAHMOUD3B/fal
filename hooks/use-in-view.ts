"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface UseInViewOptions {
  once?: boolean
  threshold?: number
}

export function useInView(ref: React.RefObject<Element>, options?: UseInViewOptions) {
  const [isInView, setIsInView] = useState(false)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options?.once) {
            hasTriggered.current = true
            observer.unobserve(entry.target)
          }
        } else if (!options?.once) {
          setIsInView(false)
        }
      },
      { threshold: options?.threshold ?? 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref, options])

  return isInView
}
