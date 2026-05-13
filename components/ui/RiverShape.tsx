type RiverShapeProps = {
  className?: string
  position?: "top-right" | "bottom-left" | "center"
  size?: number
  opacity?: number
}

export default function RiverShape({
  className = "",
  position = "bottom-left",
  size = 600,
  opacity = 0.08,
}: RiverShapeProps) {
  const positionClasses = {
    "top-right": "absolute -top-32 -right-40",
    "bottom-left": "absolute -bottom-32 -left-40",
    "center": "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  }

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size * 0.7}
      viewBox="0 0 600 420"
      fill="none"
      className={`${positionClasses[position]} pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5BA3C9" />
          <stop offset="50%" stopColor="#2E6AA8" />
          <stop offset="100%" stopColor="#1a3f6b" />
        </linearGradient>
      </defs>
      {/* Wave bands — river-like flowing curves */}
      <path
        d="M0,80 C100,40 200,120 300,80 C400,40 500,100 600,70 L600,110 C500,140 400,80 300,120 C200,160 100,80 0,120 Z"
        fill="url(#riverGrad)"
      />
      <path
        d="M0,180 C120,140 240,220 360,180 C480,140 540,200 600,170 L600,210 C540,240 480,180 360,220 C240,260 120,180 0,220 Z"
        fill="url(#riverGrad)"
        opacity="0.75"
      />
      <path
        d="M0,280 C100,240 200,320 300,280 C400,240 500,300 600,270 L600,310 C500,340 400,280 300,320 C200,360 100,280 0,320 Z"
        fill="url(#riverGrad)"
        opacity="0.5"
      />
      <path
        d="M0,370 C100,340 200,400 300,370 C400,340 500,390 600,365 L600,420 L0,420 Z"
        fill="url(#riverGrad)"
        opacity="0.3"
      />
    </svg>
  )
}
