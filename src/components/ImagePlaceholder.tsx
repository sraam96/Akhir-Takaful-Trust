import { User } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  className?: string
  label?: string
}

export function ImagePlaceholder({ className, label = "Portrait Placeholder" }: ImagePlaceholderProps) {
  return (
    <div className={cn("bg-muted flex flex-col items-center justify-center rounded-lg border border-border/50", className)}>
      <User className="w-12 h-12 text-muted-foreground/30 mb-2" />
      <span className="text-xs font-medium text-muted-foreground/50 tracking-wider uppercase">{label}</span>
    </div>
  )
}
