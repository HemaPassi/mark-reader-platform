'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
  label: 'Products',
  href: '/products',
},
    {
      label: 'Strength',
      href: '/strength',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Workflow',
      href: '/workflow',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          {/* <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">O</span>
          </div> */}

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              MarkReader
            </h1>

            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-1">
              Engineering Excellence
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-2 backdrop-blur-xl">
          {navItems.map((item) => {
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link href={`/get-quote`} className="hidden md:block border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 rounded-full px-5 py-2.5 text-sm font-medium text-white">
            Get Quote
          </Link>

          <Link href={`/contact`} className="rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105">
            Book Now 
          </Link>
        </div>
      </div>
    </header>
  )
}