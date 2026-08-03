import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

export function Footer() {
  return (
    <footer className="border-t border-black/[0.05] dark:border-white/[0.06] bg-white/30 dark:bg-zinc-900/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-6">
        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Venkat Madhavan
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/mvr1995" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" className="h-5 w-5 opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://github.com/venkatr95" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" className="h-5 w-5 opacity-70 hover:opacity-100 transition-opacity dark:invert" />
          </a>
        </div>
      </div>
    </footer>
  )
}
