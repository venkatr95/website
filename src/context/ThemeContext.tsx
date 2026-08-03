import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const DAY_START_HOUR = 7
const DAY_END_HOUR = 19

function getTimeBasedTheme(): Theme {
  const hour = new Date().getHours()
  return hour >= DAY_START_HOUR && hour < DAY_END_HOUR ? 'light' : 'dark'
}

function isManualOverride(): boolean {
  return window.localStorage.getItem('theme-manual') === 'true'
}

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem('theme')
  if (isManualOverride() && (stored === 'light' || stored === 'dark')) return stored
  return getTimeBasedTheme()
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (isManualOverride()) return

    const id = window.setInterval(() => {
      setTheme(getTimeBasedTheme())
    }, 60_000)

    return () => window.clearInterval(id)
  }, [])

  function toggleTheme() {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('theme-manual', 'true')
      return next
    })
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
