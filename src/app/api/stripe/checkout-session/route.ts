import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");

  if (!stripeSecretKey) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured. Add STRIPE_SECRET_KEY to verify consultation payments.",
      },
      { status: 501 }
    );
  }

  if (!sessionId) {
    return NextResponse.json(
      { error: "Missing Stripe checkout session id." },
      { status: 400 }
    );
  }

  const stripeResponse = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(
      sessionId
    )}`,
    {
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
      },
      cache: "no-store",
    }
  );
  const result = (await stripeResponse.json()) as {
    customer_email?: string;
    payment_status?: string;
    status?: string;
    error?: { message?: string };
  };

  if (!stripeResponse.ok) {
    return NextResponse.json(
      {
        error:
          result.error?.message ||
          "Stripe checkout session could not be verified.",
      },
      { status: stripeResponse.status || 500 }
    );
  }

  return NextResponse.json({
    paid: result.payment_status === "paid" && result.status === "complete",
    paymentStatus: result.payment_status,
    status: result.status,
    customerEmail: result.customer_email,
  });
}
