import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"
import type { NewsArticle } from "@/types"
import { formatDateShort } from "@/lib/utils"
import { cn } from "@/lib/utils"

const CATEGORY_COLORS: Record<string, string> = {
  "Úřední deska": "bg-blue-100 text-blue-700",
  Akce: "bg-amber-100 text-amber-700",
  Bezpečnost: "bg-red-100 text-red-700",
  Škola: "bg-green-100 text-green-700",
  Sport: "bg-purple-100 text-purple-700",
  Ostatní: "bg-stone-100 text-stone-600",
}

type Props = {
  article: NewsArticle
  featured?: boolean
}

export default function NewsCard({ article, featured = false }: Props) {
  return (
    <Link
      href={`/aktuality/${article.slug}`}
      className={cn(
        "group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        featured && "md:grid md:grid-cols-2"
      )}
    >
      {/* Image */}
      <div className={cn("relative overflow-hidden", featured ? "h-64 md:h-full" : "h-52")}>
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "400px"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <span
          className={cn(
            "absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold",
            CATEGORY_COLORS[article.category] ?? "bg-stone-100 text-stone-600"
          )}
        >
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-stone-400 mb-2">
          <time dateTime={article.publishedAt}>{formatDateShort(article.publishedAt)}</time>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {article.readingMinutes} min čtení
          </span>
        </div>
        <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-stone-500 leading-relaxed line-clamp-3 flex-1">
          {article.perex}
        </p>
        <span className="mt-4 text-sm font-semibold text-primary group-hover:gap-2 flex items-center gap-1 transition-all">
          Číst dál →
        </span>
      </div>
    </Link>
  )
}
