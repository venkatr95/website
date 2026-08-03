import { GlassCard } from '../ui/GlassCard'

const caseStudies = [
  {
    tag: 'Rohde & Schwarz · Spectrum Analyzer',
    title: 'Real-time Radar Measurement Firmware + Web UI',
    problem:
      'The Spectrum Analyzer T&M application needed faster iteration without regressing measurement accuracy.',
    approach:
      'Engineered the real-time measurement firmware in C++ and built the React-based web interface on top of it, with tighter design reviews baked into the workflow.',
    outcome: '50% reduction in delivery time through optimized code and design reviews.',
    stack: ['C++', 'React', 'Firmware'],
  },
  {
    tag: 'Rohde & Schwarz · Platform',
    title: 'Kubernetes-driven Cross-platform Integration',
    problem:
      'Release delivery across platforms relied on manual steps, slowing down customer-facing feature releases.',
    approach:
      'Led DevOps automation and cross-platform integration on Kubernetes, working directly with product managers to keep releases high-quality and customer-focused.',
    outcome: '30% improvement in delivery efficiency, with sustained release quality.',
    stack: ['Kubernetes', 'CI/CD', 'DevOps'],
  },
  {
    tag: 'Siemens LDA · Augmented Reality',
    title: 'AR Cloud Applications on AWS',
    problem:
      '3D models for augmented reality tooling needed better accuracy and to scale across more use cases.',
    approach:
      'Developed and deployed AR cloud applications on AWS with an Angular front end, optimizing the underlying 3D models for cross-platform use.',
    outcome: '20% improvement in model accuracy, 25% gain in scalability.',
    stack: ['AWS', 'Angular', '3D/AR'],
  },
]

export function Project() {
  return (
    <section id="project" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 px-1">
        Case Studies
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {caseStudies.map((c, i) => (
          <GlassCard key={c.title} delay={i * 0.08} className="p-6 flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-wide text-indigo-500 dark:text-cyan-300">
              {c.tag}
            </span>
            <h3 className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-50">{c.title}</h3>

            <div className="mt-4 space-y-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p><span className="font-medium text-zinc-700 dark:text-zinc-300">Problem — </span>{c.problem}</p>
              <p><span className="font-medium text-zinc-700 dark:text-zinc-300">Approach — </span>{c.approach}</p>
              <p><span className="font-medium text-zinc-700 dark:text-zinc-300">Outcome — </span>{c.outcome}</p>
            </div>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {c.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-black/[0.03] dark:bg-white/[0.05] px-2.5 py-1 text-[10px] font-medium text-zinc-600 dark:text-zinc-400"
                >
                  {s}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
