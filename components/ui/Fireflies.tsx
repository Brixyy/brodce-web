"use client"

import { useMemo } from "react"

type FirefliesProps = {
  count?: number
  color?: string
  className?: string
}

export default function Fireflies({
  count = 14,
  color = "rgba(91, 163, 201, 0.7)",
  className = "",
}: FirefliesProps) {
  // Deterministic seed-like distribution
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const seed = (i + 1) * 9301 + 49297
      const rnd = (n: number) => ((Math.sin(seed * n) + 1) / 2)
      return {
        id: i,
        left: rnd(1) * 100,
        top: rnd(2) * 100,
        size: 2 + rnd(3) * 3,
        delay: rnd(4) * 12,
        duration: 10 + rnd(5) * 14,
        drift: -10 + rnd(6) * 20,
      }
    })
  }, [count])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full firefly-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: color,
            boxShadow: `0 0 ${p.size * 3}px ${color}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--drift" as string]: `${p.drift}vmax`,
          }}
        />
      ))}
    </div>
  )
}
