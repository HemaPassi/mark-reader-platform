type Props = {
  organization: string
  sheets: string
  preferredContact: string
  selectedSolutions: string[]
}

export default function QuoteSummary({
  organization,
  sheets,
  preferredContact,
  selectedSolutions,
}: Props) {
  return (
    <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
      <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
        Quote Summary
      </p>

      <div className="mt-4 space-y-3 text-sm text-slate-300">
        <p>
          <span className="font-medium text-white">
            Organization:
          </span>{' '}
          {organization || '—'}
        </p>

        <p>
          <span className="font-medium text-white">
            OMR Volume:
          </span>{' '}
          {sheets || '—'}
        </p>

        <p>
          <span className="font-medium text-white">
            Contact Method:
          </span>{' '}
          {preferredContact}
        </p>

        <p>
          <span className="font-medium text-white">
            Selected Solutions:
          </span>{' '}
          {selectedSolutions.length
            ? selectedSolutions.join(', ')
            : '—'}
        </p>
      </div>
    </div>
  )
}