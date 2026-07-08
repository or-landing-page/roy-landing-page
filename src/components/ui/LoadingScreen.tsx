'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const HOLD_DELAY_MS = 1000
const REVEAL_DURATION_MS = 700
const REDUCED_MOTION_DELAY_MS = 50

type LoadingPhase = 'loading' | 'revealing' | 'done'

export function LoadingScreen() {
  const [phase, setPhase] = useState<LoadingPhase>('loading')
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setTimeout(() => setPhase('done'), REDUCED_MOTION_DELAY_MS)
      return () => clearTimeout(timer)
    }

    const holdTimer = setTimeout(() => setPhase('revealing'), HOLD_DELAY_MS)
    return () => clearTimeout(holdTimer)
  }, [prefersReducedMotion])

  useEffect(() => {
    if (phase !== 'revealing') return

    const revealTimer = setTimeout(() => setPhase('done'), REVEAL_DURATION_MS)
    return () => clearTimeout(revealTimer)
  }, [phase])

  if (phase === 'done') return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-[#080808]"
        initial={{ x: 0 }}
        animate={{ x: phase === 'revealing' ? '-100%' : 0 }}
        transition={{ duration: REVEAL_DURATION_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-[#080808]"
        initial={{ x: 0 }}
        animate={{ x: phase === 'revealing' ? '100%' : 0 }}
        transition={{ duration: REVEAL_DURATION_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
      />
      <AnimatePresence>
        {phase === 'loading' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image src="/logo.png" alt="RoyHouse" width={260} height={260} priority />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
