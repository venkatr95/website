import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'

const milestones = [
  {
    label: 'Senior Associate Consultant',
    detail: 'NTT DATA Services, Bangalore — banking & investment platform, +12% transaction efficiency',
    color: 'bg-amber-400',
  },
  {
    label: 'MS, Signal Processing',
    detail: 'FAU Erlangen-Nuremberg — Communications & Signal Processing',
    color: 'bg-cyan-400',
  },
  {
    label: 'Student Software Engineer',
    detail: 'e.solutions / Siemens AG, Nuremberg — AR cloud apps on AWS, +20% model accuracy',
    color: 'bg-indigo-400',
  },
  {
    label: 'Senior Application Engineer',
    detail: 'Rohde & Schwarz, Munich — radar firmware + web UI, DevOps automation, +30% efficiency',
    color: 'bg-violet-400',
  },
  {
    label: 'Product Management Cert.',
    detail: 'BITS School of Management — Generative & Agentic AI',
    color: 'bg-fuchsia-400',
  },
  {
    label: 'Product Manager',
    detail: 'Where I’m headed next — owning strategy, not just shipping it',
    color: 'bg-emerald-400',
    target: true,
  },
]

// Reverse-chronological: most recent / aspirational first.
const timeline = [...milestones].reverse().slice(0, 3)

export function CareerTimeline() {
  return (
    <GlassCard className="col-span-12 lg:col-span-5 p-6 sm:p-8 flex flex-col">
      <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        Career Journey
      </h3>

      <div className="mt-5 grid flex-1 grid-rows-3 gap-3">
        {timeline.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, mass: 0.4, stiffness: 140, damping: 18 }}
            whileHover={{ x: 3 }}
            className={`flex items-center gap-4 rounded-xl border px-5 ${
              m.target
                ? 'border-dashed border-emerald-400/40 dark:border-emerald-300/30 bg-emerald-400/[0.04] dark:bg-emerald-300/[0.05]'
                : 'border-black/[0.05] dark:border-white/[0.07] bg-black/[0.02] dark:bg-white/[0.03]'
            }`}
          >
            <div className="flex flex-shrink-0 items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${m.color}`} />
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-500">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
                {m.label}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {m.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
