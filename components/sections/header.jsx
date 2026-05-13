export default function Header() {
    return    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              Mark Reader
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#solutions" className="hover:text-white transition">
              Solutions
            </a>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#workflow" className="hover:text-white transition">
              Workflow
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <button className="rounded-xl bg-white text-black px-5 py-2 text-sm font-medium hover:scale-105 transition-transform">
            Request Demo
          </button>
        </div>
      </header>
}