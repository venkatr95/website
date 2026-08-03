import { GlassCard } from '../ui/GlassCard'

export function ProductPortfolio() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 px-1">
        Product Management Portfolio
      </h2>
      <p className="mt-2 max-w-2xl px-1 text-sm text-zinc-600 dark:text-zinc-400">
        Self-directed builds where I owned the product end-to-end — scoping, prioritizing, and
        shipping solo, not just executing someone else's roadmap.
      </p>

      <div className="mt-6">
        <GlassCard className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wide text-indigo-500 dark:text-cyan-300">
                Solo Product Build · AI / Sales Tech
              </span>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                AI Revenue Intelligence Dashboard
              </h3>
            </div>
            <a
              href="https://github.com/venkatr95/sales-intel"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 self-start rounded-full border border-black/[0.08] dark:border-white/[0.1] px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-200 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              View on GitHub
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M7 7h10v10" />
              </svg>
            </a>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Problem — </span>
              Sales reps piece together lead, company, and opportunity context from scattered
              tools, with no unified, AI-assisted view to act on.
            </p>
            <p>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Approach — </span>
              Solo-scoped the product end-to-end: defined the feature set (real-time analytics,
              passwordless auth, enrichment via Apollo, NewsAPI, and OpenAI), then designed and
              built it myself with Next.js, TypeScript, and Supabase.
            </p>
            <p>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Outcome — </span>
              A working AI-native dashboard spanning auth, third-party integrations, and an
              executive-grade UI — full-cycle ownership from problem framing to shipped product.
            </p>
          </div>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {['Next.js', 'TypeScript', 'Supabase', 'OpenAI', 'Tailwind CSS'].map((s) => (
              <li
                key={s}
                className="rounded-full bg-black/[0.03] dark:bg-white/[0.05] px-2.5 py-1 text-[10px] font-medium text-zinc-600 dark:text-zinc-400"
              >
                {s}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  )
}
