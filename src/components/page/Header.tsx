import { useState } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggle } from '../ui/ThemeToggle'
import { SmoothLink } from '../ui/SmoothLink'

const Resume = `${import.meta.env.BASE_URL}CV_VenkatMadhavan.pdf`

const links = [
  { to: '#home', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#project', label: 'Work' },
  { to: '#contact', label: 'Contact' },
]

export function Header() {
  const [isActive, setActive] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ mass: 0.4, stiffness: 140, damping: 18 }}
        className="fixed top-0 z-50 w-full border-b border-black/[0.05] dark:border-white/[0.06]
          bg-white/40 dark:bg-zinc-900/30 backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
          <SmoothLink to="#home" className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            {'<Venkat '}
            <span className="text-indigo-500 dark:text-cyan-300">Madhavan/&gt;</span>
          </SmoothLink>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <SmoothLink
                key={l.to}
                to={l.to}
                className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {l.label}
              </SmoothLink>
            ))}
            <a
              href={Resume}
              download
              className="rounded-full bg-zinc-900 dark:bg-white px-4 py-2 text-xs font-medium text-white dark:text-zinc-900"
            >
              Resume
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              aria-label={isActive ? 'Close menu' : 'Open menu'}
              onClick={() => setActive(!isActive)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.06] dark:border-white/[0.08]"
            >
              <span className="text-zinc-700 dark:text-zinc-200">{isActive ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {isActive && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col gap-1 px-4 pb-4"
          >
            {links.map((l) => (
              <SmoothLink
                key={l.to}
                to={l.to}
                onClick={() => setActive(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
              >
                {l.label}
              </SmoothLink>
            ))}
            <a href={Resume} download className="mt-1 rounded-lg px-3 py-2.5 text-sm font-medium text-indigo-600 dark:text-cyan-300">
              Resume
            </a>
          </motion.nav>
        )}
      </motion.header>
    </>
  )
}
