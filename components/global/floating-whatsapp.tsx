'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsapp() {
  return (
    <Link
      href="https://wa.me/919810392402"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="h-8 w-8" />
    </Link>
  )
}