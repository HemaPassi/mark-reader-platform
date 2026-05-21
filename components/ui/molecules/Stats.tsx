
type ContentData = {
  stats: [
    { label:string,
    value: string, }
  ]
}

type Props = {
  content: ContentData
}

const Stats = ({content}:Props) => {

return  <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl"
                >
                  <h3 className="text-3xl font-bold text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
}
export default Stats