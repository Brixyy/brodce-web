type AuroraProps = {
  variant?: "river" | "warm" | "soft" | "primary"
  intensity?: "subtle" | "normal" | "vivid"
  className?: string
}

const PALETTES = {
  river: ["#5BA3C9", "#4A8FC4", "#2E6AA8"],
  warm: ["#C9A84C", "#5BA3C9", "#4A8FC4"],
  soft: ["#A8C5DC", "#D4DEE7", "#5BA3C9"],
  primary: ["#1a3f6b", "#2E6AA8", "#5BA3C9"],
} as const

const INTENSITY_OPACITY = {
  subtle: 0.18,
  normal: 0.28,
  vivid: 0.42,
}

export default function BackgroundAurora({
  variant = "river",
  intensity = "subtle",
  className = "",
}: AuroraProps) {
  const [c1, c2, c3] = PALETTES[variant]
  const o = INTENSITY_OPACITY[intensity]

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Three blurred orbs with slow independent motion */}
      <div
        className="absolute rounded-full aurora-orb aurora-orb-1"
        style={{
          width: "60vmax",
          height: "60vmax",
          top: "-20vmax",
          left: "-15vmax",
          background: `radial-gradient(circle at center, ${c1} 0%, transparent 70%)`,
          opacity: o,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute rounded-full aurora-orb aurora-orb-2"
        style={{
          width: "50vmax",
          height: "50vmax",
          bottom: "-15vmax",
          right: "-10vmax",
          background: `radial-gradient(circle at center, ${c2} 0%, transparent 70%)`,
          opacity: o,
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute rounded-full aurora-orb aurora-orb-3"
        style={{
          width: "40vmax",
          height: "40vmax",
          top: "30%",
          right: "20%",
          background: `radial-gradient(circle at center, ${c3} 0%, transparent 70%)`,
          opacity: o * 0.7,
          filter: "blur(80px)",
        }}
      />
    </div>
  )
}
