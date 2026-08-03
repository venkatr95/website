import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'

const sparkPoints = [12, 18, 15, 24, 22, 30, 28, 38, 34, 44, 41, 52]

function buildPath(points: number[], width: number, height: number) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const step = width / (points.length - 1)
  return points
    .map((p, i) => {
      const x = i * step
      const y = height - ((p - min) / (max - min || 1)) * height
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

function Gauge({ label, value, color }: { label: string; value: number; color: string }) {
  const circumference = 2 * Math.PI * 26
  const offset = circumference * (1 - value / 100)
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="68" height="68" viewBox="0 0 68 68" className="-rotate-90">
        <circle cx="34" cy="34" r="26" fill="none" strokeWidth="6" className="stroke-black/[0.06] dark:stroke-white/[0.08]" />
        <motion.circle
          cx="34"
          cy="34"
          r="26"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          stroke={color}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
      </svg>
      <div className="-mt-12 text-sm font-mono font-semibold text-zinc-900 dark:text-zinc-50">{value}%</div>
      <p className="mt-9 text-[11px] uppercase tracking-wide text-zinc-500 dark:text-zinc-500 text-center">{label}</p>
    </div>
  )
}

export function MetricsMatrix() {
  const path = buildPath(sparkPoints, 260, 60)

  return (
    <GlassCard className="col-span-12 lg:col-span-7 p-8 sm:p-10">
      <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        Core Metrics Matrix
      </h3>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">North Star Growth · 12mo</p>
          <svg width="100%" height="70" viewBox="0 0 260 60" preserveAspectRatio="none" className="mt-3 overflow-visible">
            <defs>
              <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d={`${path} L260,60 L0,60 Z`}
              fill="url(#sparkFill)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <motion.path
              d={path}
              fill="none"
              stroke="#22D3EE"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </svg>
          <p className="mt-2 text-lg font-mono font-semibold text-zinc-900 dark:text-zinc-50">+186% YoY</p>
        </div>

        <div className="flex justify-around">
          <Gauge label="Retention Delight" value={92} color="#818CF8" />
          <Gauge label="North Star ROI" value={78} color="#34D399" />
        </div>
      </div>
    </GlassCard>
  )
}
