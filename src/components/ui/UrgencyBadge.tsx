'use client'

import { NEXT_COHORT } from '@/lib/constants'

export function UrgencyBadge() {
  const spotsRemaining = NEXT_COHORT.spotsTotal - NEXT_COHORT.spotsTaken

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold rounded-full">
      <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
      <span className="text-gold font-bold text-sm">
        {spotsRemaining} מקומות בלבד — מהירו!
      </span>
    </div>
  )
}
