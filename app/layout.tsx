import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Girimurugan - Graphic & UI Designer',
  description:
    'Creative Graphic Designer & UI Designer | Adobe Suite Expert | Motion Graphics | Branding',
  applicationName: 'Girimurugan Portfolio',
  authors: [{ name: 'Girimurugan Shanmugasundaram' }],
  keywords: [
    'Graphic Designer',
    'UI Designer',
    'Motion Graphics',
    'Branding',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'After Effects',
    'Figma',
    'Salem',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Girimurugan - Graphic & UI Designer',
    description:
      'Creative Graphic Designer & UI Designer | Adobe Suite Expert | Motion Graphics | Branding',
    siteName: 'Girimurugan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girimurugan - Graphic & UI Designer',
    description:
      'Creative Graphic Designer & UI Designer | Adobe Suite Expert | Motion Graphics | Branding',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0066ff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background light ${poppins.variable} ${montserrat.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
