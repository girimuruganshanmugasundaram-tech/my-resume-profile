'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/40">
      {/* KP-style blue banner CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 md:mb-16">
        <div className="bg-primary text-primary-foreground rounded-md px-6 py-10 md:px-12 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                Ready to transform your vision?
              </h2>
              <p className="text-base opacity-95">
                Let&apos;s work together to create designs that make an impact
              </p>
            </div>
            <a
              href="mailto:sundaramgiri123@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold uppercase tracking-wider text-sm rounded-md hover:bg-white/90 transition-colors flex-shrink-0"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="kp-section-eyebrow">Contact</p>
          <h2 className="kp-section-title">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help bring your creative ideas to
            life.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-12">
          <a
            href="mailto:sundaramgiri123@gmail.com"
            className="flex flex-col items-center text-center p-6 bg-white rounded-md border border-border hover:border-primary/50 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={22} />
            </div>
            <p className="font-bold text-foreground mb-1">Email</p>
            <p className="text-muted-foreground text-sm break-all">sundaramgiri123@gmail.com</p>
          </a>

          <a
            href="tel:6381994374"
            className="flex flex-col items-center text-center p-6 bg-white rounded-md border border-border hover:border-primary/50 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <Phone className="text-primary" size={22} />
            </div>
            <p className="font-bold text-foreground mb-1">Phone</p>
            <p className="text-muted-foreground text-sm">6381994374</p>
          </a>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-md border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-3">
              <MapPin className="text-primary" size={22} />
            </div>
            <p className="font-bold text-foreground mb-1">Location</p>
            <p className="text-muted-foreground text-sm">
              Tharamangalam, Salem, Tamil Nadu
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-md border border-border">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="w-full kp-btn-primary">
              <Send size={16} />
              Send Message
            </button>

            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm font-medium">
                Thank you! Your message has been received. I&apos;ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
