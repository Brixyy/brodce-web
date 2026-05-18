import { User } from "lucide-react"

type PersonAvatarProps = {
  iconSize?: number
  /** tmavé pozadí pro tmavé karty (starostka, sekce úřadu), jinak světlé */
  tone?: "light" | "dark"
}

// Neutrální silueta místo fotky — osoby na webu jsou smyšlené, fotky by mohly
// budit dojem konkrétních lidí. Vyplňuje kruhový wrapper rodiče (w/h-full).
export default function PersonAvatar({ iconSize = 24, tone = "light" }: PersonAvatarProps) {
  return (
    <div
      aria-hidden="true"
      className={
        tone === "dark"
          ? "w-full h-full flex items-center justify-center bg-white/10 text-white/45"
          : "w-full h-full flex items-center justify-center bg-stone-100 text-stone-400"
      }
    >
      <User size={iconSize} strokeWidth={1.5} />
    </div>
  )
}
