// app/not-found.tsx

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020617] px-6 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-400">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white"
        >
          Back To Home
        </Link>
      </div>
    </main>
  )
}