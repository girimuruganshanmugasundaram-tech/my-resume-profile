import { Palette, Clapperboard, Share2, Layout } from 'lucide-react'

const offerings = [
  {
    icon: Layout,
    title: 'UI / UX Design',
    description: 'Intuitive layouts and digital assets for web and mobile applications.',
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description: 'Vector illustrations and branding assets that build a memorable visual identity.',
  },
  {
    icon: Clapperboard,
    title: 'Motion Graphics',
    description: 'Animated promotional videos and motion pieces crafted in After Effects.',
  },
  {
    icon: Share2,
    title: 'Social Media Design',
    description: 'Posters, banners, and marketing creatives that stop the scroll.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="kp-section-eyebrow">About Me</p>
            <h2 className="kp-section-title mb-6">
              Creative design that{' '}
              <span className="text-primary">drives results</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a creative and detail-oriented Graphic Designer with hands-on experience
                in Adobe Photoshop, Illustrator, and After Effects. I design social media creatives,
                motion graphics, branding materials, and UI elements.
              </p>
              <p>
                Currently working as a UI/UX &amp; Graphic Designer at Waves Digital Media, I help
                brands establish a strong visual presence and connect with their audience through
                thoughtful, high-quality design.
              </p>
            </div>

            {/* Stats moved from hero */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { value: '7+', label: 'Design Skills' },
                { value: '3+', label: 'Projects' },
                { value: '1+', label: 'Years Exp.' },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left border border-border rounded-md p-4 bg-secondary/40">
                  <p className="font-heading text-2xl sm:text-3xl font-extrabold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="kp-section-eyebrow">What I Offer</p>
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              All design services under one roof
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {offerings.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="kp-card !p-5">
                    <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
