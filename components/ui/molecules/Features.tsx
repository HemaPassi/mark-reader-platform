import { ArrowRight, CheckCircle2, Feather } from "lucide-react";

type ContentData = {
  features: string[]
}

type Props = {
  content: ContentData
}


const Features = ({content}:Props) => {
    return <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              {content.features.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
}
export default Features;