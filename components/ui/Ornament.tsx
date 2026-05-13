type OrnamentProps = {
  variant?: "wall" | "tower" | "line" | "diamond"
  size?: number
  className?: string
  stroke?: string
}

export default function Ornament({
  variant = "wall",
  size = 48,
  className,
  stroke = "currentColor",
}: OrnamentProps) {
  if (variant === "line") {
    return (
      <svg
        width={size * 4}
        height={size / 4}
        viewBox="0 0 192 12"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <line x1="0" y1="6" x2="80" y2="6" stroke={stroke} strokeWidth="1" />
        <circle cx="96" cy="6" r="3.5" fill="none" stroke={stroke} strokeWidth="1" />
        <circle cx="96" cy="6" r="1" fill={stroke} />
        <line x1="112" y1="6" x2="192" y2="6" stroke={stroke} strokeWidth="1" />
      </svg>
    )
  }

  if (variant === "diamond") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path d="M12 2 L22 12 L12 22 L2 12 Z" stroke={stroke} strokeWidth="1" />
        <path d="M12 7 L17 12 L12 17 L7 12 Z" stroke={stroke} strokeWidth="0.6" opacity="0.6" />
      </svg>
    )
  }

  if (variant === "tower") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 32"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path d="M6 14 L6 30 L18 30 L18 14" stroke={stroke} strokeWidth="1.2" />
        <path d="M4 14 L6 12 L8 14 M10 14 L12 12 L14 14 M16 14 L18 12 L20 14" stroke={stroke} strokeWidth="1.2" />
        <rect x="10" y="20" width="4" height="6" stroke={stroke} strokeWidth="1" />
      </svg>
    )
  }

  // Default: "wall" — heraldic city wall motif inspired by Brodce coat of arms
  return (
    <svg
      width={size * 2}
      height={size}
      viewBox="0 0 96 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Crenellation pattern */}
      <path
        d="M0 24 L0 16 L8 16 L8 8 L16 8 L16 16 L24 16 L24 8 L32 8 L32 16 L40 16 L40 8 L48 8 L48 16 L56 16 L56 8 L64 8 L64 16 L72 16 L72 8 L80 8 L80 16 L88 16 L88 8 L96 8 L96 24"
        stroke={stroke}
        strokeWidth="1"
      />
      {/* Wall stones (horizontal lines) */}
      <line x1="0" y1="24" x2="96" y2="24" stroke={stroke} strokeWidth="0.5" opacity="0.5" />
      <line x1="0" y1="36" x2="96" y2="36" stroke={stroke} strokeWidth="0.5" opacity="0.4" />
      {/* Center tower */}
      <path
        d="M40 4 L40 0 L44 0 L44 4 L48 4 L48 0 L52 0 L52 4 L56 4 L56 8"
        stroke={stroke}
        strokeWidth="1"
      />
      <rect x="44" y="14" width="8" height="10" stroke={stroke} strokeWidth="0.7" />
    </svg>
  )
}
