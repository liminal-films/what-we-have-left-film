
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@13.6.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    const { priceId, successUrl, cancelUrl, email, name } = await req.json()

    // Create session configuration
    const sessionConfig: any = {
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    }

    // Only add email if provided
    if (email) {
      sessionConfig.customer_email = email;
    }

    // Only add metadata if name is provided
    if (name) {
      sessionConfig.metadata = { name };
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create(sessionConfig)

    // Create initial donation record
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const amount = session.amount_total ? session.amount_total / 100 : 0
    
    // Create donation record with optional fields
    const donationData: any = {
      amount,
      status: 'pending',
      stripe_payment_id: session.id,
    }

    if (email) donationData.email = email;
    if (name) donationData.name = name;

    await supabase.from('donations').insert(donationData)

    return new Response(
      JSON.stringify({ sessionId: session.id, sessionUrl: session.url }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
