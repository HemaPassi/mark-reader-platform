import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'MarkReader | omr.in',
  description: 'Intelligent OMR & document processing platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="premium-grid bg-slate-950 text-white overflow-x-hidden">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}