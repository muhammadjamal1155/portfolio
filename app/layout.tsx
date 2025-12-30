import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Muhammad Jamal | Data Science & Full Stack Developer',
  description: 'Portfolio of Muhammad Jamal - Data Science student and Full Stack Developer intern showing AI-powered projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans bg-primary text-white-100 overflow-x-hidden`}>
        <ThemeProvider>
          <Navbar />
          <main className="relative z-0 bg-primary">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
