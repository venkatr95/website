import { GlassCard } from '../ui/GlassCard'
import githubIcon from '../../assets/github.svg'

const repos = [
  {
    name: 'pokego',
    description: 'A card app built with a modern TypeScript stack.',
    language: 'TypeScript',
    url: 'https://github.com/venkatr95/pokego',
  },
  {
    name: 'llm_exp',
    description: 'Hands-on experiments working with LLMs.',
    language: 'Python',
    url: 'https://github.com/venkatr95/llm_exp',
  },
  {
    name: 'chatbot-openai',
    description: 'A chatbot built on the OpenAI API.',
    language: 'TypeScript',
    url: 'https://github.com/venkatr95/chatbot-openai',
  },
  {
    name: 'docker-kubernetes-tutorial',
    description: 'A from-scratch tutorial covering Docker and Kubernetes fundamentals.',
    language: 'Shell',
    url: 'https://github.com/venkatr95/docker-kubernetes-tutorial',
  },
  {
    name: 'mqtt-broker-example',
    description: 'A minimal MQTT consumer/producer example in C++.',
    language: 'C++',
    url: 'https://github.com/venkatr95/mqtt-broker-example',
  },
  {
    name: 'unet_radar',
    description: 'U-Net based semantic segmentation applied to radar data.',
    language: 'Python',
    url: 'https://github.com/venkatr95/unet_radar',
  },
]

const languageDot: Record<string, string> = {
  TypeScript: 'bg-blue-400',
  Python: 'bg-yellow-400',
  Shell: 'bg-emerald-400',
  'C++': 'bg-pink-400',
}

export function GithubProjects() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          GitHub Projects
        </h2>
        <a
          href="https://github.com/venkatr95"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <img src={githubIcon} alt="" className="h-3.5 w-3.5 dark:invert" />
          @venkatr95
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {repos.map((repo, i) => (
          <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer" className="block">
            <GlassCard delay={i * 0.05} className="p-5 h-full">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 font-mono">
                  {repo.name}
                </h3>
                <svg
                  className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-zinc-400 dark:text-zinc-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M7 7h10v10" />
                </svg>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {repo.description}
              </p>
              <div className="mt-4 flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${languageDot[repo.language] ?? 'bg-zinc-400'}`} />
                <span className="text-[11px] text-zinc-500 dark:text-zinc-500">{repo.language}</span>
              </div>
            </GlassCard>
          </a>
        ))}
      </div>
    </section>
  )
}
