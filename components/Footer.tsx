'use client'

import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f172a] text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-extrabold text-white mb-4">
              GIRI<span className="text-primary">.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Creative Graphic Designer &amp; UI Designer. Social media creatives, motion graphics,
              branding, and UI — crafted with detail and impact.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-wider text-sm text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-wider text-sm text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:sundaramgiri123@gmail.com"
                  className="inline-flex items-start gap-2.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  sundaramgiri123@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:6381994374"
                  className="inline-flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone size={16} className="flex-shrink-0 text-primary" />
                  6381994374
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-slate-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>Tharamangalam, Salem, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {currentYear} Girimurugan Shanmugasundaram. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors rounded-md text-sm font-semibold text-white"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
