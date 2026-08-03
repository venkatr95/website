import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'

const CITY = 'Munich'
const COUNTRY = 'Germany'
const TIMEZONE = 'Europe/Berlin'

function useLocalTime(timeZone: string) {
  const [time, setTime] = useState('')
  useEffect(() => {
    function tick() {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date())
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [timeZone])
  return time
}

export function LocationRadar() {
  const time = useLocalTime(TIMEZONE)

  return (
    <GlassCard className="col-span-12 sm:col-span-6 lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between min-h-[240px]">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Coordinates
          </h3>
          <p className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {CITY}, {COUNTRY}
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-lg text-zinc-900 dark:text-zinc-50 tabular-nums">{time}</p>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-500">local time</p>
        </div>
      </div>

      <div className="relative mt-6 h-32 w-full overflow-hidden rounded-2xl border border-black/[0.05] dark:border-white/[0.07] bg-black/[0.015] dark:bg-white/[0.02]">
        <svg viewBox="0 0 300 130" className="h-full w-full">
          <g className="stroke-black/[0.08] dark:stroke-cyan-400/20" strokeWidth="1" fill="none">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="130" />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 32.5} x2="300" y2={i * 32.5} />
            ))}
          </g>
          <path
            d="M20,90 Q60,40 110,55 T190,45 Q230,60 280,35"
            className="stroke-zinc-400/40 dark:stroke-cyan-300/40"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="165" cy="58" r="3" className="fill-indigo-500 dark:fill-cyan-300" />
          <circle cx="165" cy="58" r="8" className="fill-indigo-500/20 dark:fill-cyan-300/20 animate-ping" style={{ transformOrigin: '165px 58px' }} />
        </svg>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-4 text-[11px] font-mono text-zinc-400 dark:text-zinc-500"
      >
        LAT 48.1351° N · LON 11.5820° E
      </motion.p>
    </GlassCard>
  )
}
