import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import Venkat from '../../assets/venkat.png'

const competencies = [
  'C++ / Firmware',
  'React / Angular',
  'Kubernetes & DevOps',
  'AWS (S3, EC2, RDS)',
  'REST / gRPC APIs',
  'Stakeholder Management',
  'Machine Learning & GenAI',
  'Cross-functional Collaboration',
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <GlassCard className="p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Profile
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              I'm Venkat, a Senior Application Engineer at Rohde &amp; Schwarz in Munich, with
              6+ years building test-and-measurement applications — real-time radar firmware in
              C++, and the React/Angular interfaces engineers actually use to work with it.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              I'm now working toward a move into product management. I already sit close to that
              work — scoping releases with PMs, owning DevOps automation that cut delivery
              overhead by 30%, and translating customer feedback into firmware and UI changes. I
              recently completed a Product Management (Generative &amp; Agentic AI) program at
              BITS to formalize that transition.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Outside of work — 26+ countries and counting as a traveler, a badminton player, and
              a landscape/art photographer. I speak six languages (Kannada, English, German,
              Hindi, Tamil, Telugu), which helps more than you'd expect in stakeholder
              conversations.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {competencies.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, mass: 0.4, stiffness: 140, damping: 18 }}
                  className="rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-5">
            <img
              src={Venkat}
              alt="Venkat Madhavan"
              className="h-56 w-56 rounded-3xl object-cover border border-black/[0.06] dark:border-white/[0.08] shadow-xl"
            />
            <a
              href={`${import.meta.env.BASE_URL}CV_VenkatMadhavan.pdf`}
              download
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-zinc-900 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </GlassCard>
    </section>
  )
}
