import { NextRequest, NextResponse } from 'next/server'
import { after } from 'next/server'
import type { ContactFormData } from '@/types'

export async function POST(req: NextRequest) {
  let body: ContactFormData

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, phone, email, message, type } = body

  if (!name?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: 'שם וטלפון הם שדות חובה' }, { status: 422 })
  }

  const response = NextResponse.json({ ok: true }, { status: 200 })

  // Non-blocking: log + send notification after response is sent
  after(async () => {
    // TODO: replace with Resend / Nodemailer to SITE_CONFIG.email
    console.info('[contact]', { name, email, phone, type, message, ts: new Date().toISOString() })
  })

  return response
}
