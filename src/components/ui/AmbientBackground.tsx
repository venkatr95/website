import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

interface Blob {
  className: string
  color: string
  size: number
  x: string
  y: string
  duration: number
}

const darkBlobs: Blob[] = [
  { className: 'mix-blend-screen', color: '#22D3EE', size: 620, x: '5%', y: '10%', duration: 26 },
  { className: 'mix-blend-screen', color: '#312E81', size: 720, x: '55%', y: '5%', duration: 32 },
  { className: 'mix-blend-screen', color: '#7C3AED', size: 560, x: '30%', y: '55%', duration: 29 },
]

const lightBlobs: Blob[] = [
  { className: 'mix-blend-multiply', color: '#FDBA8C', size: 620, x: '8%', y: '8%', duration: 26 },
  { className: 'mix-blend-multiply', color: '#FDE68A', size: 700, x: '58%', y: '4%', duration: 32 },
  { className: 'mix-blend-multiply', color: '#C4B5FD', size: 580, x: '28%', y: '58%', duration: 29 },
]

export function AmbientBackground() {
  const { theme } = useTheme()
  const blobs = theme === 'dark' ? darkBlobs : lightBlobs
  const opacity = theme === 'dark' ? 0.15 : 0.08

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F4F4F5] dark:bg-[#09090B] transition-colors duration-700">
      {blobs.map((blob, i) => (
        <motion.div
          key={`${theme}-${i}`}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            backgroundColor: blob.color,
            opacity,
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0)_100%)] dark:opacity-100 opacity-0" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
        }}
      />
    </div>
  )
}
