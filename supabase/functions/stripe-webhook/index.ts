
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@13.6.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return new Response('No signature', { status: 400 })
  }

  try {
    const body = await req.text()
    const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')
    let event

    try {
      event = stripe.webhooks.constructEvent(body, signature, endpointSecret || '')
    } catch (err) {
      console.error(`⚠️ Webhook signature verification failed.`, err.message)
      return new Response(`Webhook Error: ${err.message}`, { status: 400 })
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object

      // Update donation status
      const { error } = await supabase
        .from('donations')
        .update({ status: 'completed' })
        .eq('stripe_payment_id', session.id)

      if (error) {
        console.error('Error updating donation:', error)
        return new Response(JSON.stringify({ error: 'Error updating donation' }), { status: 400 })
      }
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 })
  } catch (err) {
    console.error(`❌ Error processing webhook:`, err)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }
})
