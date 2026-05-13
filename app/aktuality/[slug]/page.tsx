import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { NEWS_ARTICLES } from "@/data/news"
import { formatDate } from "@/lib/utils"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = NEWS_ARTICLES.find((a) => a.slug === slug)
  return { title: article?.title ?? "Článek" }
}

export async function generateStaticParams() {
  return NEWS_ARTICLES.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = NEWS_ARTICLES.find((a) => a.slug === slug)
  if (!article) notFound()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50 pt-20 pb-20">
        {/* Hero */}
        <div className="relative h-72 sm:h-96 w-full mb-10">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 sm:px-6 pb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-3">
              {article.category}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 text-sm text-stone-400 mb-8">
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {article.readingMinutes} min čtení
            </span>
          </div>

          <div
            className="prose prose-stone max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 pt-8 border-t border-stone-200">
            <Link
              href="/aktuality"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-mid transition-colors"
            >
              <ArrowLeft size={16} />
              Zpět na aktuality
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
