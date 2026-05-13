import {workflow} from '@/lib/constants'

export default function WorkFlow() {
    return     <section
        id="workflow"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-indigo-400 font-medium">Workflow Automation</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Streamlined document processing from start to finish
          </h2>

          <p className="text-zinc-400 mt-6 text-lg">
            Simplify large-scale assessment and document workflows using
            intelligent automation and scalable infrastructure.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-6 gap-4">
          {workflow.map((step, index) => (
            <div
              key={step}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold mb-6">
                0{index + 1}
              </div>

              <h3 className="font-semibold text-lg">{step}</h3>

              <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
                Intelligent and scalable workflow management.
              </p>
            </div>
          ))}
        </div>
      </section>
}