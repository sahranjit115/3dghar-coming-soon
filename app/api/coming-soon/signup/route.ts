import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'
import { z } from 'zod'

const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
  phone: z.string().optional(),
  userType: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const validated = signupSchema.parse(body)

    const supabase = createServerSupabase()

    // Check if email already exists
    const { data: existing } = await supabase
      .from('coming_soon_signups')
      .select('id')
      .eq('email', validated.email)
      .maybeSingle()

    if (existing) {
      return NextResponse.json(
        { error: 'This email is already registered. We\'ll notify you when we launch!' },
        { status: 400 }
      )
    }

    // Insert new signup
    const { error } = await supabase
      .from('coming_soon_signups')
      .insert({
        email: validated.email,
        name: validated.name || null,
        phone: validated.phone || null,
        user_type: validated.userType || null,
        source: validated.userType ? `homepage_${validated.userType}` : 'homepage',
      })

    if (error) {
      console.error('Signup error:', error)
      return NextResponse.json(
        { error: 'Failed to save your information. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We\'ll notify you when we launch.'
    })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }

    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}


