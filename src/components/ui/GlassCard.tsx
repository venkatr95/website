import React, { useRef } from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  as?: 'div'
  delay?: number
}

const spring = { mass: 0.4, stiffness: 140, damping: 18 }

export function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.12), transparent 70%)`

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -4, scale: 1.005 }}
      whileTap={{ scale: 0.99 }}
      transition={{ ...spring, delay }}
      className={`group relative overflow-hidden rounded-3xl
        border border-black/[0.06] dark:border-white/[0.08]
        bg-white/30 dark:bg-zinc-900/20
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]
        backdrop-blur-2xl
        ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      {children}
    </motion.div>
  )
}
