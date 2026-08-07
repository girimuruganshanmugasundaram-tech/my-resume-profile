'use client'

import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'UI/UX & Graphic Designer',
    company: 'Waves Digital Media',
    period: '07/2025 – Present',
    description: 'Creating visually compelling designs and user experiences for brands and campaigns.',
    responsibilities: [
      'Designed social media posters, banners, and marketing creatives',
      'Created motion graphics and video animations using Adobe After Effects',
      'Developed vector illustrations and branding assets using Adobe Illustrator',
      'Edited promotional visuals using Adobe Photoshop',
      'Designed UI layouts and digital assets for web and mobile applications',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <p className="kp-section-eyebrow">Journey</p>
          <h2 className="kp-section-title">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-primary/25" />

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative md:ml-20">
                <div className="hidden md:block absolute -left-[3.65rem] top-6 w-4 h-4 bg-white border-[3px] border-primary rounded-full" />

                <div className="kp-card bg-white">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-primary" size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold uppercase tracking-wider text-sm mt-0.5">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp) => (
                      <li key={resp} className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
                        <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
