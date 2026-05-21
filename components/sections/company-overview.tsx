
import {overview } from '@/data/overview.json'
import {highlights} from '@/data/highlights.json'

import  {
  ShieldCheck,
  Workflow,
  LucideIcon,
} from 'lucide-react'

import { iconMapper } from '@/lib/iconMapper'

const items: {
  title: string
  icon: LucideIcon
}[] = [
  {
    title: 'Security',
    icon: iconMapper.ShieldCheck,
  },
  {
    title: 'Automation',
    icon: iconMapper.Workflow,
  },
]

export default function CompanyOverview() {
    {/* Company Overview */}
    return <section className="relative overflow-hidden py-24">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_30%)]" />
        
                <div className="container-enterprise relative">
                  <div className="mx-auto max-w-4xl text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                     {overview.Badge}
                    </div>
        
                    {/* Heading */}
                    <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl xl:text-6xl">
                      {overview.Heading_main}
                      <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        {overview.Heading}
                      </span>
                    </h1>
        
                    {/* Description */}
                    <p className="mt-8 text-lg leading-8 text-slate-300">
                      {overview.Description_main}
                    </p>
        
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                      {overview.Description}
                       {/* :contentReference[oaicite:0]{index=0} */}
                    </p>
                  </div>
        
                  {/* Cards */}
                  <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {highlights.map((item, index) => {
                      const Icon = item.icon;
        
                      return (
                        <div
                          key={item.title}
                          className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.05]"
                        >
                          {/* Hover Glow */}
                          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        
                          <div className="relative z-10">
                            {/* Top */}
                            <div className="flex items-center justify-between">
                              {/* Icon */}
                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/10">
                               
               {Icon && (
              // <Icon className="h-6 w-6 text-blue-300" />
              <Icon />
            )}
                              </div>
        
                              {/* Number */}
                              <span className="text-5xl font-bold text-white/[0.04]">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>
        
                            {/* Content */}
                            <div className="mt-8">
                              <h3 className="text-2xl font-semibold text-white">
                                {item.title}
                              </h3>
        
                              <p className="mt-4 leading-8 text-slate-400">
                                {item.description}
                              </p>
                            </div>
                          </div>
        
                          {/* Bottom Accent */}
                          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
}