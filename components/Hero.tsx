'use client'

import { useState, useEffect } from 'react'
import { ArrowDown } from 'lucide-react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100svh-7.5rem)] flex items-center overflow-hidden pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24"
    >
      {/* Atmosphere — subtle blue gradient plane */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            'linear-gradient(135deg, #e8f1ff 0%, #ffffff 42%, #f0f5fb 70%, #dce9ff 100%)',
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle at 85% 20%, rgba(0,102,255,0.18), transparent 45%), radial-gradient(circle at 10% 80%, rgba(0,82,204,0.12), transparent 40%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-heading text-primary text-sm sm:text-base font-bold uppercase tracking-[0.25em] mb-4">
            Girimurugan Shanmugasundaram
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground mb-5">
            Graphic Designer
            <span className="block text-primary">&amp; UI Designer</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
            Creating social media creatives, motion graphics, branding materials, and UI elements
            that elevate brands — based in Salem, Tamil Nadu.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button type="button" onClick={() => scrollTo('projects')} className="kp-btn-primary">
              View Portfolio
            </button>
            <a href="mailto:girimuruganshanmugasundaram@gmail.com" className="kp-btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary animate-bounce"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
