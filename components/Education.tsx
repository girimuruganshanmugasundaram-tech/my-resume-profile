'use client'

import { BookOpen, Award } from 'lucide-react'

const education = [
  {
    title: 'B.Sc Computer Science',
    school: 'Excel College for Commerce and Science',
    period: '2022 – 2025',
    grade: 'Grade: 76%',
  },
  {
    title: 'HSC',
    school: 'Sengunthar Mahajana Higher Secondary School',
    period: null,
    grade: 'Grade: 71%',
  },
]

const certifications = [
  { title: 'Frontend Development HTML', org: 'Great Learning' },
  { title: 'Artificial Intelligence Digital Skills', org: 'Oracle University' },
  { title: 'Oracle Foundations Associate', org: 'Oracle University' },
]

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <p className="kp-section-eyebrow">Learning</p>
          <h2 className="kp-section-title">
            Education &amp; <span className="text-primary">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-foreground">Education</h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.title} className="kp-card !p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <BookOpen className="text-primary" size={20} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading text-lg font-bold text-foreground">{item.title}</h4>
                      <p className="text-primary font-semibold uppercase tracking-wider text-xs mt-1">
                        {item.school}
                      </p>
                      {item.period && (
                        <p className="text-muted-foreground text-sm mt-1">{item.period}</p>
                      )}
                      <p className="text-foreground text-sm font-semibold mt-2">{item.grade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-foreground">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="kp-card !p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Award className="text-primary" size={20} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading text-lg font-bold text-foreground">{cert.title}</h4>
                      <p className="text-primary font-semibold uppercase tracking-wider text-xs mt-1">
                        {cert.org}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 kp-card">
          <h3 className="font-heading text-xl font-bold mb-6">Languages</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-foreground">Tamil</p>
                <p className="text-sm text-muted-foreground">Native Proficiency</p>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-foreground">English</p>
                <p className="text-sm text-muted-foreground">Working Proficiency</p>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary w-4/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
