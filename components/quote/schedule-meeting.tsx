import Link from 'next/link'
import { CalendarDays } from 'lucide-react'

export default function ScheduleMeeting() {
  return (
    <Link
      href="https://calendly.com/YOUR_LINK"
      target="_blank"
      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
    >
      <CalendarDays className="h-4 w-4" />

      Schedule Meeting
    </Link>
  )
}