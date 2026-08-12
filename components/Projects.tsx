'use client'

import { useState } from 'react'
import { ArrowUpRight, Film, Droplets, Megaphone } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Motion Graphics Project',
    description:
      'Created animated promotional videos using Adobe After Effects with dynamic transitions and visual effects.',
    tags: ['After Effects', 'Motion Graphics', 'Video Animation'],
    gradient: 'from-[#0052cc] to-[#0066ff]',
    Icon: Film,
  },
  {
    id: 2,
    title: 'Water Consumption Tracker',
    description:
      'Developed a hydration tracking app using HTML, CSS, and JavaScript with interactive UI elements.',
    tags: ['Web Development', 'UI Design', 'JavaScript'],
    gradient: 'from-[#0ea5e9] to-[#0066ff]',
    Icon: Droplets,
  },
  {
    id: 3,
    title: 'Branding & Social Media Design',
    description: 'Designed promotional posters and marketing creatives for social media platforms.',
    tags: ['Branding', 'Social Media', 'Photoshop'],
    gradient: 'from-[#003a99] to-[#0052cc]',
    Icon: Megaphone,
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="kp-section-eyebrow">Our Portfolios</p>
          <h2 className="kp-section-title">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A sample of design work across motion, product UI, and brand creatives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {projects.map((project) => {
            const Icon = project.Icon
            const isHovered = hoveredProject === project.id
            return (
              <article
                key={project.id}
                className="group bg-card rounded-md overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <Icon
                    className={`text-white/80 transition-transform duration-300 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                    size={48}
                    strokeWidth={1.5}
                  />
                  <div
                    className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold uppercase tracking-wider">
                      View project <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-primary/10 text-xs font-semibold text-primary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Full-bleed style CTA band */}
        <div className="bg-primary text-primary-foreground rounded-md px-8 py-12 md:px-12 md:py-14 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
            Ready to bring your design ideas to life?
          </h3>
          <p className="text-base opacity-95 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate and create stunning designs that resonate with your audience.
          </p>
          <a
            href="mailto:girimuruganshanmugasundaram@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold uppercase tracking-wider text-sm rounded-md hover:bg-white/90 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
