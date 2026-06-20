import { NextResponse } from "next/server";

export const runtime = "nodejs";

type CheckoutRequest = {
  customerEmail?: string;
  customerName?: string;
  focus?: string;
  returnPath?: string;
};

function getOrigin(request: Request) {
  return (
    request.headers.get("origin") ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://petersandel.com"
  );
}

function getReturnPath(returnPath?: string) {
  if (!returnPath || !returnPath.startsWith("/") || returnPath.startsWith("//")) {
    return "/contact";
  }

  return returnPath;
}

export async function POST(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured. Add STRIPE_SECRET_KEY to the environment before taking consultation payments.",
      },
      { status: 501 }
    );
  }

  const body = (await request.json().catch(() => ({}))) as CheckoutRequest;
  const origin = getOrigin(request);
  const returnPath = getReturnPath(body.returnPath);
  const returnSeparator = returnPath.includes("?") ? "&" : "?";
  const params = new URLSearchParams();
  const configuredPriceId = process.env.STRIPE_DESIGN_CONSULTATION_PRICE_ID;

  params.append("mode", "payment");
  params.append(
    "success_url",
    `${origin}${returnPath}${returnSeparator}payment=success&session_id={CHECKOUT_SESSION_ID}`
  );
  params.append(
    "cancel_url",
    `${origin}${returnPath}${returnSeparator}payment=cancelled`
  );
  params.append("line_items[0][quantity]", "1");
  params.append("metadata[service]", "one-hour design consultation");
  params.append("metadata[amount]", "595");

  if (body.customerName) {
    params.append("metadata[customer_name]", body.customerName);
  }

  if (body.focus) {
    params.append("metadata[focus]", body.focus);
  }

  if (body.customerEmail) {
    params.append("customer_email", body.customerEmail);
  }

  if (configuredPriceId) {
    params.append("line_items[0][price]", configuredPriceId);
  } else {
    params.append("line_items[0][price_data][currency]", "usd");
    params.append("line_items[0][price_data][unit_amount]", "59500");
    params.append(
      "line_items[0][price_data][product_data][name]",
      "One-Hour Design Consultation"
    );
    params.append(
      "line_items[0][price_data][product_data][description]",
      "A focused private design consultation with Peter Sandel."
    );
  }

  const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
    cache: "no-store",
  });
  const result = (await stripeResponse.json()) as {
    url?: string;
    error?: { message?: string };
  };

  if (!stripeResponse.ok || !result.url) {
    return NextResponse.json(
      {
        error:
          result.error?.message ||
          "Stripe checkout could not be created. Check Stripe configuration.",
      },
      { status: stripeResponse.status || 500 }
    );
  }

  return NextResponse.json({ url: result.url });
}
