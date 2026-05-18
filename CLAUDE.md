# CLAUDE.md — brodce-web

## Jazyk komunikace

**Vždy komunikuj v češtině.** Veškerá konverzace, code review, commit messages a komentáře musí být česky. Zachovej diakritiku.

## Přehled projektu

**Neoficiální kampaňový web** volebního uskupení „Brodce – náš domov“, které kandiduje
do zastupitelstva městyse Brodce (Pojizeří, okres Mladá Boleslav). Slouží jako vizuální
ukázka, jak by mohl vypadat modernizovaný web obce.

⚠️ **Není to oficiální web úřadu** a nesmí se za něj vydávat. Oficiální web obce je
www.brodce.cz. Jména osob, IČO, datová schránka a kontakty na webu musí být smyšlené
a ilustrativní (e-maily na `@brodce.cloud`). Nepřebírej obsah ani obrázky z brodce.cz.

## Tech stack

- **Framework:** Next.js **16.2.6** (App Router, Turbopack)
- **Runtime:** React **19.2.4** + React DOM 19
- **Styling:** Tailwind CSS **v4** (`@tailwindcss/postcss`), `tailwind-merge`, `class-variance-authority`, `clsx`
- **UI primitives:** `@radix-ui/react-dialog`, `lucide-react` ikony
- **Animace:** `framer-motion` v12, `embla-carousel-react` + autoplay
- **Fonts:** Inter + Playfair Display (přes `next/font/google`)
- **Jazyk:** TypeScript 5
- **Deploy:** Vercel

> ⚠️ **Next.js 16 má breaking changes** — neopírej se o memorizovanou znalost starších verzí. Před psaním kódu si přečti relevantní guide v `node_modules/next/dist/docs/` a respektuj deprecation notices.

## Příkazy

```bash
npm run dev      # dev server (default port 3000)
npm run build    # produkční build
npm run start    # produkční server
```

**Lokální dev na portu 3010** (preferovaný v této session):

```bash
npm run dev -- --port 3010
```

Pro Claude Code: `.claude/launch.json` má konfiguraci `brodce-dev` → použij `preview_start` s tímto názvem.

## Struktura

```
app/                     # Next.js App Router
  layout.tsx             # Root layout — fonts, metadata (cs_CZ)
  page.tsx               # Home — kompozice 10 sekcí
  aktuality/             # /aktuality + [slug] detail
  galerie/, kontakt/, obec/, o-obci/, urad/
  gdpr/, cookies/, pristupnost/   # právní stránky
  globals.css            # Tailwind v4 + design tokens

components/
  layout/                # Header, Footer
  sections/              # Sekce home stránky (HeroSection, NewsSection, ...)
  ui/                    # Atomární komponenty (SectionTitle, NewsCard, EventCard, SvgDivider)
  animations/            # FadeInView, CountUp (framer-motion wrappery)
  gallery/               # MasonryGrid, LightboxModal

data/                    # Statická data jako TS moduly (news, events, council, staff, ...)
lib/utils.ts             # `cn()` helper (clsx + tailwind-merge)
types/index.ts           # Sdílené typy
public/images/, icons/   # Statické assety
```

Path alias: `@/*` → root projektu (viz `tsconfig.json`).

## Konvence

- **App Router only** — žádné `pages/`.
- **Server Components default** — `"use client"` jen tam, kde je nutný (animace, interaktivita, hooks).
- Komponenty jsou v PascalCase, soubor i export se shodují.
- Data oddělená od UI — obsah obce žije v `data/*.ts`, ne natvrdo v komponentách.
- **Diakritika všude** — texty pro web jsou české, neházej `pristupnost` do UI, ale „Přístupnost".
- Barvy a fonty jdou přes design tokens v `globals.css`, ne hardcoded hex v komponentách.
- Obrázky: `next/image` s `remotePatterns` (povolené hostnames v `next.config.ts`: unsplash, randomuser.me, www.brodce.cz).
- Commit messages česky, stručně, imperativně: „přidej úřední desku", „oprav layout headeru".

## Verifikace změn

Po úpravě UI ověř v prohlížeči přes `preview_*` MCP nástroje:
1. `preview_start` (server `brodce-dev`, port 3010)
2. `preview_console_logs` / `preview_logs` na chyby
3. `preview_snapshot` na strukturu, `preview_screenshot` na vizuál
4. `preview_resize` pro responzivitu (mobil + desktop)
