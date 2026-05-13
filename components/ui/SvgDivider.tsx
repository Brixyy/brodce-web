import { cn } from "@/lib/utils"

type Props = {
  fromColor?: string
  toColor?: string
  flip?: boolean
  variant?: "wave" | "river" | "calm"
  className?: string
}

export default function SvgDivider({
  fromColor = "#F9F8F6",
  toColor = "#0F2240",
  flip = false,
  variant = "river",
  className,
}: Props) {
  return (
    <div
      className={cn("w-full overflow-hidden leading-none relative", className)}
      style={{ background: toColor }}
      aria-hidden="true"
    >
      {variant === "river" ? (
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("w-full h-16 sm:h-24 block", flip && "rotate-180")}
        >
          {/* Back wave — subtle */}
          <path
            d="M0,50 C240,80 480,20 720,50 C960,80 1200,30 1440,55 L1440,0 L0,0 Z"
            fill={fromColor}
            opacity="0.45"
          />
          {/* Middle wave */}
          <path
            d="M0,60 C300,90 600,30 900,60 C1140,85 1320,40 1440,65 L1440,0 L0,0 Z"
            fill={fromColor}
            opacity="0.7"
          />
          {/* Front wave — solid */}
          <path
            d="M0,70 C360,100 1080,40 1440,75 L1440,0 L0,0 Z"
            fill={fromColor}
          />
        </svg>
      ) : variant === "calm" ? (
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("w-full h-10 sm:h-14 block", flip && "rotate-180")}
          style={{ fill: fromColor }}
        >
          <path d="M0,40 C480,55 960,25 1440,40 L1440,0 L0,0 Z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("w-full h-12 sm:h-16 block", flip && "rotate-180")}
          style={{ fill: fromColor }}
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      )}
    </div>
  )
}
