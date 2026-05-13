import { cn } from "@/lib/utils"

type Props = {
  id?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  light?: boolean
  className?: string
}

export default function SectionTitle({
  id,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: Props) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <span
        className={cn(
          "accent-line",
          align === "center" && "mx-auto"
        )}
      />
      <h2 id={id}
        className={cn(
          "font-serif text-3xl sm:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-stone-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-2 text-base sm:text-lg",
            light ? "text-white/60" : "text-stone-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
