import Link from "next/link"
import NewsCard from "@/components/ui/NewsCard"
import SectionTitle from "@/components/ui/SectionTitle"
import FadeInView from "@/components/animations/FadeInView"
import { NEWS_ARTICLES } from "@/data/news"

export default function NewsSection() {
  const featured = NEWS_ARTICLES.find((a) => a.featured)!
  const rest = NEWS_ARTICLES.filter((a) => !a.featured).slice(0, 3)

  return (
    <section id="aktuality" className="py-20 lg:py-28 bg-gradient-to-b from-[#EEF4FB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <SectionTitle
            title="Aktuality"
            subtitle="Co se děje v Brodcích"
          />
          <Link
            href="/aktuality"
            className="text-sm font-semibold text-primary hover:text-primary-mid transition-colors whitespace-nowrap"
          >
            Všechny aktuality →
          </Link>
        </FadeInView>

        <div className="space-y-6">
          {/* Featured article */}
          <FadeInView delay={50}>
            <NewsCard article={featured} featured />
          </FadeInView>

          {/* Regular articles grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((article, i) => (
              <FadeInView key={article.id} delay={100 + i * 80}>
                <NewsCard article={article} />
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
