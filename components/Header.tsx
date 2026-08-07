'use client'

import { useState } from 'react'
import { Mail, Phone, Menu, X } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Portfolio', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
    setMobileOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* KP-style top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2 py-2 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="tel:6381994374"
                className="inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              >
                <Phone size={14} />
                <span>6381994374</span>
              </a>
              <a
                href="mailto:sundaramgiri123@gmail.com"
                className="inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              >
                <Mail size={14} />
                <span className="truncate max-w-[11rem] sm:max-w-none">sundaramgiri123@gmail.com</span>
              </a>
            </div>
            <p className="hidden sm:block font-medium tracking-wide opacity-95">
              Graphic Designer &amp; UI Designer
            </p>
          </div>
        </div>
      </div>

      {/* Main sticky nav */}
      <div className="bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-[4.5rem]">
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className="flex-shrink-0 font-heading text-2xl font-extrabold tracking-tight text-foreground"
            >
              GIRI<span className="text-primary">.</span>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-3 right-3 -bottom-0.5 h-0.5 bg-primary transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </button>
                )
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a href="mailto:sundaramgiri123@gmail.com" className="hidden md:inline-flex kp-btn-primary !py-2.5 !px-5 !text-xs">
                Hire Me
              </a>
              <button
                type="button"
                className="lg:hidden p-2 text-foreground hover:text-primary"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileOpen((open) => !open)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3 py-3 text-sm font-semibold rounded-md ${
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a href="mailto:sundaramgiri123@gmail.com" className="mt-2 kp-btn-primary text-center">
                Hire Me
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
