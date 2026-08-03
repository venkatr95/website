import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import Venkat from '../../assets/venkat.png'
import { SmoothLink } from '../ui/SmoothLink'

const stats = [
  { label: 'Years Experience', value: '6+' },
  { label: 'Efficiency Gained', value: '50%' },
  { label: 'DevOps Automation Uplift', value: '30%' },
]

export function ExecutiveSummary() {
  return (
    <GlassCard className="col-span-12 lg:col-span-7 row-span-1 p-8 sm:p-10 flex flex-col justify-between min-h-[500px]">
      <div className="flex items-start justify-between gap-6">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs font-mono uppercase tracking-[0.3em] text-indigo-500 dark:text-cyan-300"
          >
            Targeting Product Manager roles
          </motion.p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Venkat Madhavan
          </h1>
          <h2 className="mt-2 text-lg sm:text-xl font-medium text-zinc-600 dark:text-zinc-400">
            Aspiring Product Manager with a Technical Background
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
            Senior Application Engineer, Rohde &amp; Schwarz
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            6+ years building measurement &amp; test applications — from real-time radar firmware
            to the web UIs on top of it. Now working toward product leadership: I already partner
            with PMs on scope and releases, and I want to own that decision-making directly.
          </p>
        </div>
        <img
          src={Venkat}
          alt="Venkat Madhavan"
          className="hidden sm:block h-24 w-24 rounded-2xl object-cover border border-black/[0.06] dark:border-white/[0.08] shadow-lg"
        />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08, mass: 0.4, stiffness: 140, damping: 18 }}
            className="rounded-2xl border border-black/[0.05] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.03] px-4 py-3"
          >
            <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 font-mono">{s.value}</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-zinc-500 dark:text-zinc-500">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <SmoothLink
          to="#contact"
          className="rounded-full bg-zinc-900 dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-zinc-900 transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Get in touch
        </SmoothLink>
        <a
          href="https://www.linkedin.com/in/mvr1995"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-black/[0.08] dark:border-white/[0.1] px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          LinkedIn
        </a>
      </div>
    </GlassCard>
  )
}
