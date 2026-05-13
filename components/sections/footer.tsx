export default function Footer() {
    return <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm text-zinc-500">
          <div>
            <h3 className="text-white font-semibold">Mark Reader</h3>
            <p className="mt-2 max-w-sm">
              Modern OMR and document processing solutions for enterprises,
              institutions and government organizations.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#">Services</a>
            <a href="#">Solutions</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
}