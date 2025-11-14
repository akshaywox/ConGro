import { createContactSubmission } from '@/app/(frontend)/components/Contact/createContactSubmission'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json()


    const submission = await createContactSubmission({
      ...body,
    })

    return NextResponse.json({ success: true, submission })
  } catch (error: any) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
