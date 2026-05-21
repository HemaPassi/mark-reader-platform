import { Clock3 } from 'lucide-react'

export default function ResponseBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 px-5 py-4 text-sm text-blue-300">
      <Clock3 className="h-4 w-4" />

      <span>
        Average response time: Within business hours
      </span>
    </div>
  )
}