import { motion } from 'framer-motion'

export function ScrollProgress({ progress }) {
  return (
    <motion.div
      className="fixed top-0 left-0 h-0.5 z-50 bg-gradient-to-r from-emerald-400 to-cyan-400"
      style={{ width: `${progress}%` }}
      animate={{ scaleX: progress / 100 }}
      transition={{ duration: 0.1, ease: 'linear' }}
      transformOrigin="left center"
    />
  )
}