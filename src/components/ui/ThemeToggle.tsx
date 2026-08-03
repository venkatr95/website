import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex h-9 w-16 items-center rounded-full border border-black/[0.06] dark:border-white/[0.08]
        bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl px-1 transition-colors"
    >
      <motion.div
        layout
        transition={{ mass: 0.4, stiffness: 140, damping: 18 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 dark:from-indigo-500 dark:to-cyan-300 text-xs shadow-md"
        style={{ marginLeft: isDark ? 'auto' : 0 }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.div>
    </button>
  )
}
