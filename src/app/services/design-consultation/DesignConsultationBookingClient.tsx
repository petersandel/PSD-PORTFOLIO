"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  CreditCard,
  Loader2,
  Lock,
  Upload,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type BriefForm = {
  name: string;
  email: string;
  bookingDate: string;
  focus: string;
  challenge: string;
  imageLinks: string;
};

type PaymentStatus = "idle" | "checking" | "paid" | "cancelled" | "error";

const storageKey = "psd-design-consultation-brief";

const initialBrief: BriefForm = {
  name: "",
  email: "",
  bookingDate: "",
  focus: "",
  challenge: "",
  imageLinks: "",
};

export default function DesignConsultationBookingClient() {
  const [brief, setBrief] = useState<BriefForm>(initialBrief);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [isPaying, setIsPaying] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle");
  const [paymentMessage, setPaymentMessage] = useState(
    "Payment is required before Peter's weekday calendar opens."
  );

  useEffect(() => {
    let restoreTimer: number | undefined;
    const setPaymentState = (status: PaymentStatus, message: string) => {
      window.setTimeout(() => {
        setPaymentStatus(status);
        setPaymentMessage(message);
      }, 0);
    };
    const savedBrief = window.sessionStorage.getItem(storageKey);

    if (savedBrief) {
      try {
        const parsedBrief = JSON.parse(savedBrief) as BriefForm;
        restoreTimer = window.setTimeout(() => setBrief(parsedBrief), 0);
      } catch {
        window.sessionStorage.removeItem(storageKey);
      }
    }

    const searchParams = new URLSearchParams(window.location.search);
    const sessionId = searchParams.get("session_id");
    const payment = searchParams.get("payment");

    if (payment === "cancelled") {
      setPaymentState(
        "cancelled",
        "Payment was not completed. You can restart checkout when ready."
      );
      return;
    }

    if (!sessionId) {
      return;
    }

    async function verifyPayment(stripeSessionId: string) {
      setPaymentState("checking", "Confirming payment with Stripe...");

      try {
        const response = await fetch(
          `/api/stripe/checkout-session?session_id=${encodeURIComponent(
            stripeSessionId
          )}`
        );
        const result = (await response.json()) as {
          paid?: boolean;
          error?: string;
          paymentStatus?: string;
        };

        if (!response.ok || !result.paid) {
          setPaymentState(
            "error",
            result.error ||
              "Stripe did not confirm a completed payment for this session."
          );
          return;
        }

        setPaymentState(
          "paid",
          "Payment confirmed. Peter's weekday calendar is unlocked."
        );
      } catch {
        setPaymentState(
          "error",
          "Payment could not be verified. Please try again."
        );
      }
    }

    void verifyPayment(sessionId);

    return () => {
      if (restoreTimer) {
        window.clearTimeout(restoreTimer);
      }
    };
  }, []);

  const mailtoHref = useMemo(() => {
    const body = [
      "Design Consultation Brief",
      "",
      `Name: ${brief.name}`,
      `Email: ${brief.email}`,
      `Confirmed booking date: ${brief.bookingDate || "Not selected yet"}`,
      `Primary focus: ${brief.focus || "Not selected"}`,
      "",
      "Design challenge:",
      brief.challenge || "Not provided",
      "",
      "Image links / shared folder / artwork URLs:",
      brief.imageLinks || "Not provided",
      "",
      `Selected files: ${fileNames.length ? fileNames.join(", ") : "None"}`,
    ].join("\n");

    return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      "Design Consultation Brief"
    )}&body=${encodeURIComponent(body)}`;
  }, [brief, fileNames]);

  function updateBrief(field: keyof BriefForm, value: string) {
    setBrief((current) => ({ ...current, [field]: value }));
  }

  function persistBrief() {
    window.sessionStorage.setItem(storageKey, JSON.stringify(brief));
  }

  async function startCheckout() {
    persistBrief();
    setIsPaying(true);
    setPaymentStatus("idle");
    setPaymentMessage("Opening secure Stripe checkout...");

    try {
      const response = await fetch("/api/stripe/design-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerEmail: brief.email,
          customerName: brief.name,
          focus: brief.focus,
        }),
      });
      const result = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !result.url) {
        setPaymentStatus("error");
        setPaymentMessage(
          result.error ||
            "Stripe checkout is not available. Confirm the Stripe environment variables are set."
        );
        setIsPaying(false);
        return;
      }

      window.location.href = result.url;
    } catch {
      setPaymentStatus("error");
      setPaymentMessage("Stripe checkout could not be started. Please try again.");
      setIsPaying(false);
    }
  }

  function openCalendly() {
    if (paymentStatus !== "paid") {
      setPaymentStatus("error");
      setPaymentMessage(
        `Complete the $${siteConfig.designConsultation.price} payment before opening the calendar.`
      );
      return;
    }

    const calendlyUrl = `${siteConfig.calendly.url}?hide_event_type_details=1&hide_gdpr_banner=1`;

    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
      return;
    }

    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  }

  function handleBriefSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    persistBrief();
    window.location.href = mailtoHref;
  }

  const paymentIsConfirmed = paymentStatus === "paid";

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <section className="min-h-[100svh] bg-charcoal px-6 pb-24 pt-32 text-cream-100 md:px-10 lg:px-14 lg:pb-32 lg:pt-36">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href="/services"
            className="font-label text-[10px] text-cream-100/58 transition-colors duration-500 hover:text-gold"
          >
            Services / Design Consultation
          </Link>

          <div className="mt-10 max-w-6xl">
            <h1 className="font-display-xl text-6xl leading-[0.98] [letter-spacing:0] md:text-7xl lg:text-8xl xl:text-[8rem]">
              Send the room before the conversation.
            </h1>
            <p className="mt-10 max-w-4xl text-lg leading-9 text-cream-200/68 md:text-2xl md:leading-[1.65]">
              After your paid consultation is booked, submit the decisions you
              need help with and the imagery Peter should review before the call.
            </p>
          </div>

          <form
            onSubmit={handleBriefSubmit}
            className="mt-16 border-t border-cream-100/18 pt-12 lg:mt-20"
          >
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
              <input
                name="name"
                type="text"
                required
                value={brief.name}
                onChange={(event) => updateBrief("name", event.target.value)}
                placeholder="Name *"
                className="input-luxury text-xl"
              />
              <input
                name="email"
                type="email"
                required
                value={brief.email}
                onChange={(event) => updateBrief("email", event.target.value)}
                placeholder="Email *"
                className="input-luxury text-xl"
              />
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:gap-16">
              <input
                name="booking-date"
                type="text"
                value={brief.bookingDate}
                onChange={(event) =>
                  updateBrief("bookingDate", event.target.value)
                }
                placeholder="Confirmed booking date"
                className="input-luxury text-xl"
              />
              <select
                name="focus"
                value={brief.focus}
                onChange={(event) => updateBrief("focus", event.target.value)}
                className="input-luxury cursor-pointer text-xl"
              >
                <option value="">Primary focus</option>
                <option>Color selection</option>
                <option>Artwork selection</option>
                <option>Furniture layout</option>
                <option>Room edit</option>
                <option>Second opinion</option>
              </select>
            </div>

            <textarea
              name="design-challenge"
              required
              rows={5}
              value={brief.challenge}
              onChange={(event) => updateBrief("challenge", event.target.value)}
              placeholder="What decision do you need help making? Include dimensions, constraints, links, or options you are considering. *"
              className="input-luxury mt-12 resize-none text-xl leading-9"
            />

            <input
              name="image-links"
              type="text"
              value={brief.imageLinks}
              onChange={(event) => updateBrief("imageLinks", event.target.value)}
              placeholder="Image links, shared folder, floor plan, or artwork URLs"
              className="input-luxury mt-12 text-xl"
            />

            <label className="mt-12 block border border-cream-100/18 px-6 py-7 transition-colors duration-500 hover:border-gold/60">
              <span className="flex items-center gap-4 font-label text-[10px] text-cream-100/74">
                <Upload className="h-5 w-5 text-gold" />
                Upload Room Images Or Plans
              </span>
              <input
                name="attachments"
                type="file"
                multiple
                accept="image/*,.pdf"
                onChange={(event) => {
                  const files = Array.from(event.currentTarget.files ?? []);
                  setFileNames(files.map((file) => file.name));
                }}
                className="mt-6 block w-full text-base text-cream-200/62 file:mr-6 file:border-0 file:bg-cream-100/14 file:px-6 file:py-4 file:font-label file:text-[10px] file:text-cream-100"
              />
            </label>

            <div className="mt-14 grid gap-8 border-y border-cream-100/18 py-9 lg:grid-cols-[1fr_0.78fr] lg:items-center">
              <div>
                <p className="font-label text-[10px] text-gold">
                  Payment Required Before Calendar
                </p>
                <h2 className="mt-5 font-display text-4xl leading-none [letter-spacing:0] md:text-5xl">
                  Secure the hour, then select a weekday.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-cream-200/68">
                  Stripe processes the ${siteConfig.designConsultation.price}{" "}
                  consultation payment first. Once Stripe confirms payment,
                  Peter&apos;s Calendly availability unlocks on this page.
                </p>
              </div>

              <div className="border border-cream-100/18 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center border border-cream-100/22 text-gold">
                    {paymentIsConfirmed ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Lock className="h-5 w-5" />
                    )}
                  </span>
                  <div>
                    <p className="font-label text-[9px] text-cream-100/52">
                      Stripe / Calendly
                    </p>
                    <p className="mt-2 text-sm leading-6 text-cream-200/68">
                      {paymentMessage}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={startCheckout}
                  disabled={isPaying}
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 border border-gold bg-gold px-8 py-4 font-label text-[10px] text-charcoal transition-colors duration-500 hover:border-cream-100 hover:bg-cream-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isPaying ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <CreditCard className="h-4 w-4" />
                  )}
                  Pay ${siteConfig.designConsultation.price} And Unlock Calendar
                </button>

                <button
                  type="button"
                  onClick={openCalendly}
                  disabled={!paymentIsConfirmed}
                  className="mt-4 inline-flex w-full items-center justify-center gap-3 border border-cream-100/28 px-8 py-4 font-label text-[10px] text-cream-100 transition-colors duration-500 hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Open Weekday Calendar
                  <CalendarDays className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 border border-cream-100/28 px-8 py-4 font-label text-[10px] text-cream-100 transition-colors duration-500 hover:border-gold hover:text-gold"
              >
                Send Consultation Brief
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-cream-100/16 px-8 py-4 font-label text-[10px] text-cream-100/68 transition-colors duration-500 hover:border-gold hover:text-gold"
              >
                Discuss Full Service Instead
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
