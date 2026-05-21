type ContentData = {
  badge: string
  smallHeading: string

  title: {
    line1: string
    line2: string
  }

  description: string
}

type Props = {
  data: ContentData
}

const ContentBlock = ({data}:Props) => {
    return <>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur">
              {data.badge}
            </div>

            {/* Small Heading */}
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
              {data.smallHeading}
            </p>

            {/* Heading */}
            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
              {data.title.line1}

              <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                {data.title.line2}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              {data.description}
            </p>
            </>
}

export default ContentBlock;