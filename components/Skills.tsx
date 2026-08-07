'use client'

import { PenTool, Sparkles, Code2, Lightbulb, Users, Rocket, CheckCircle2 } from 'lucide-react'

const skillCategories = [
  {
    category: 'Design Tools',
    icon: PenTool,
    description: 'Professional creative suite for print, digital, and motion.',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Figma', 'Canva'],
  },
  {
    category: 'Design Expertise',
    icon: Sparkles,
    description: 'End-to-end visual craft across brand and product surfaces.',
    skills: ['UI Design', 'Branding Design', 'Motion Graphics', 'Social Media Post Design'],
  },
  {
    category: 'Development',
    icon: Code2,
    description: 'Front-end foundations to bring UI concepts to life.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
]

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description: 'Understand the brand, audience, and goals before a single pixel is placed.',
  },
  {
    icon: Users,
    title: 'Collaborative Design',
    description: 'Transparent process with clear feedback loops and shared ownership.',
  },
  {
    icon: CheckCircle2,
    title: 'Refine & Deliver',
    description: 'Polish every asset for consistency, quality, and ready-to-use formats.',
  },
  {
    icon: Rocket,
    title: 'Impact-Focused',
    description: 'Designs built to engage audiences and support measurable brand growth.',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="kp-section-eyebrow">Expertise</p>
          <h2 className="kp-section-title">
            Skills &amp; <span className="text-primary">Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A smart mix of design tools and craft — digital or offline — balanced for colour,
            concept, and value.
          </p>
        </div>

        {/* Service-style skill cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.category} className="kp-card bg-white h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-5">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {category.category}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2.5 text-sm font-medium text-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Process / benefits row — KP style */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="kp-section-eyebrow">How I Work</p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Benefit when you engage with me
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="bg-white border border-border rounded-md p-6 text-center hover:border-primary/40 transition-colors">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold mb-4">
                    {idx + 1}
                  </div>
                  <Icon className="mx-auto text-primary mb-3" size={22} />
                  <h4 className="font-heading font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Proficiency */}
        <div className="bg-white border border-border rounded-md p-8 md:p-10">
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-8 text-foreground">
            Proficiency Levels
          </h3>
          <div className="space-y-6">
            {[
              { name: 'Adobe Suite (Photoshop, Illustrator, After Effects)', level: 95 },
              { name: 'UI/UX Design & Figma', level: 90 },
              { name: 'Branding & Visual Design', level: 88 },
              { name: 'Motion Graphics', level: 85 },
              { name: 'Web Development (HTML, CSS, JS)', level: 75 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2 gap-4">
                  <span className="font-medium text-sm sm:text-base text-foreground">{skill.name}</span>
                  <span className="text-primary font-bold text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
