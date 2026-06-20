"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Calendar, ImageIcon, Upload, X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { cn, formatCurrency } from "@/lib/utils";

// Form validation schema with $250K minimum budget requirement
const clientScreeningSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.enum([
    "residential-new",
    "residential-renovation",
    "hospitality",
    "commercial",
    "other",
  ]),
  projectLocation: z.string().min(2, "Project location is required"),
  budget: z.enum(["250k-500k", "500k-1m", "1m-2m", "2m-5m", "5m+"]),
  timeline: z.enum(["3-6months", "6-12months", "12-18months", "18months+"]),
  projectDescription: z
    .string()
    .min(50, "Please provide more detail about your project (at least 50 characters)"),
  howDidYouHear: z.string().optional(),
  inspiration: z.string().optional(),
});

type ClientScreeningForm = z.infer<typeof clientScreeningSchema>;
type InquiryAttachment = {
  id: string;
  file: File;
  previewUrl?: string;
};

const budgetOptions = [
  { value: "250k-500k", label: "$250,000 - $500,000" },
  { value: "500k-1m", label: "$500,000 - $1,000,000" },
  { value: "1m-2m", label: "$1,000,000 - $2,000,000" },
  { value: "2m-5m", label: "$2,000,000 - $5,000,000" },
  { value: "5m+", label: "$5,000,000+" },
];

const projectTypes = [
  { value: "residential-new", label: "Residential - New Construction" },
  { value: "residential-renovation", label: "Residential - Renovation" },
  { value: "hospitality", label: "Hospitality" },
  { value: "commercial", label: "Commercial" },
  { value: "other", label: "Other" },
];

const timelineOptions = [
  { value: "3-6months", label: "3-6 Months" },
  { value: "6-12months", label: "6-12 Months" },
  { value: "12-18months", label: "12-18 Months" },
  { value: "18months+", label: "18+ Months" },
];

const stepLabels = ["Contact", "Project", "Residence"];
const stepTitles = ["Your Details", "Project Details", "The Residence"];
const maxAttachments = 8;
const maxAttachmentSize = 12 * 1024 * 1024;

const inquiryImages = {
  primary: "/images/projects/Head of the Harbor /PS_HeadofHarbor_1948_Final.jpg",
  success: "/images/projects/Head of the Harbor /PS_HeadofHarbor_2306_Final.jpg",
};

const fieldFrame =
  "group relative isolate block overflow-hidden border border-cream-100/18 bg-[linear-gradient(135deg,rgba(250,249,247,0.11)_0%,rgba(250,249,247,0.052)_50%,rgba(184,175,166,0.075)_100%)] px-5 py-4 shadow-[0_16px_34px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(250,249,247,0.14)] transition-all duration-300 before:pointer-events-none before:absolute before:left-0 before:top-4 before:h-10 before:w-px before:bg-gold/28 before:content-[''] after:pointer-events-none after:absolute after:inset-x-5 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-gold/24 after:to-transparent after:content-[''] hover:border-cream-100/30 hover:bg-cream-100/[0.09] focus-within:border-gold/78 focus-within:bg-cream-100/[0.11] focus-within:shadow-[0_20px_46px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(250,249,247,0.18)] focus-within:before:bg-gold focus-within:after:via-gold/80";
const fieldLabel = "mb-2.5 block font-label text-[8px] text-gold/90";
const fieldControl =
  "w-full bg-transparent text-[17px] font-light leading-7 tracking-[0.01em] text-cream-100 caret-gold outline-none placeholder:text-cream-200/34";
const fieldError = "mt-2 text-xs leading-5 text-red-300";
const choiceTile =
  "relative flex min-h-[48px] items-center border border-cream-100/10 bg-cream-100/[0.035] px-4 py-2.5 text-sm leading-5 text-cream-200/72 shadow-[inset_0_1px_0_rgba(250,249,247,0.06)] transition-all duration-300 before:absolute before:inset-y-2 before:left-0 before:w-px before:bg-gold/0 before:content-[''] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold peer-checked:border-gold/64 peer-checked:bg-gold/12 peer-checked:text-cream-100 peer-checked:shadow-[0_12px_26px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(250,249,247,0.10)] peer-checked:before:bg-gold hover:border-cream-100/24 hover:bg-cream-100/[0.06]";

const formatFileSize = (bytes: number) => {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export default function ClientScreeningForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attachments, setAttachments] = useState<InquiryAttachment[]>([]);
  const [attachmentError, setAttachmentError] = useState("");
  const [projectDescriptionLength, setProjectDescriptionLength] = useState(0);
  const attachmentsRef = useRef<InquiryAttachment[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    clearErrors,
    getValues,
  } = useForm<ClientScreeningForm>({
    resolver: zodResolver(clientScreeningSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const totalSteps = 3;
  const currentTitle = stepTitles[step - 1];
  const projectDescriptionCharacterCount = Math.max(
    projectDescriptionLength,
    (getValues("projectDescription") ?? "").length
  );
  const projectDescriptionRegistration = register("projectDescription", {
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
      const nextLength = event.target.value.length;
      setProjectDescriptionLength(nextLength);

      if (nextLength >= 50) {
        clearErrors("projectDescription");
      }
    },
  });

  useEffect(() => {
    attachmentsRef.current = attachments;
  }, [attachments]);

  useEffect(() => {
    if (projectDescriptionCharacterCount >= 50 && errors.projectDescription) {
      clearErrors("projectDescription");
    }
  }, [clearErrors, errors.projectDescription, projectDescriptionCharacterCount]);

  useEffect(() => {
    return () => {
      attachmentsRef.current.forEach((attachment) => {
        if (attachment.previewUrl) {
          URL.revokeObjectURL(attachment.previewUrl);
        }
      });
    };
  }, []);

  const nextStep = async () => {
    let fieldsToValidate: (keyof ClientScreeningForm)[] = [];
    
    if (step === 1) {
      fieldsToValidate = ["firstName", "lastName", "email", "phone"];
    } else if (step === 2) {
      fieldsToValidate = ["projectType", "projectLocation", "budget", "timeline"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleAttachmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);

    if (!selectedFiles.length) {
      return;
    }

    const availableSlots = maxAttachments - attachments.length;
    const oversizedFiles = selectedFiles.filter(
      (file) => file.size > maxAttachmentSize
    );
    const acceptedFiles = selectedFiles
      .filter((file) => file.size <= maxAttachmentSize)
      .slice(0, Math.max(0, availableSlots));
    const messages: string[] = [];

    if (selectedFiles.length > availableSlots) {
      messages.push(`Attach up to ${maxAttachments} files.`);
    }

    if (oversizedFiles.length) {
      messages.push("Each file must be 12 MB or smaller.");
    }

    setAttachmentError(messages.join(" "));

    if (acceptedFiles.length) {
      setAttachments((current) => [
        ...current,
        ...acceptedFiles.map((file, index) => ({
          id:
            typeof crypto !== "undefined" && "randomUUID" in crypto
              ? crypto.randomUUID()
              : `${file.name}-${file.lastModified}-${index}`,
          file,
          previewUrl: file.type.startsWith("image/")
            ? URL.createObjectURL(file)
            : undefined,
        })),
      ]);
    }

    event.target.value = "";
  };

  const removeAttachment = (id: string) => {
    setAttachments((current) => {
      const attachment = current.find((item) => item.id === id);

      if (attachment?.previewUrl) {
        URL.revokeObjectURL(attachment.previewUrl);
      }

      return current.filter((item) => item.id !== id);
    });
    setAttachmentError("");
  };

  const onSubmit = async (data: ClientScreeningForm) => {
    try {
      // In production, this would send to your backend/CRM
      console.log("Form submitted:", {
        ...data,
        attachments: attachments.map((attachment) => ({
          name: attachment.file.name,
          size: attachment.file.size,
          type: attachment.file.type,
        })),
      });
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto grid max-w-[1180px] overflow-hidden border-y border-cream-100/14 bg-graphite/40 md:grid-cols-[0.9fr_1fr]"
      >
        <div className="relative min-h-[320px] bg-graphite">
          <Image
            src={inquiryImages.success}
            alt="Head of the Harbor exterior establishing the scale of a private residence"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 48vw"
          />
        </div>
        <div className="px-6 py-16 text-center md:px-10 lg:py-20">
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-charcoal/42">
            <Check className="h-10 w-10 text-gold" />
          </div>
          <p className="font-label text-[10px] text-gold">Inquiry Received</p>
          <h3 className="mt-4 font-display text-4xl leading-none text-cream-100 md:text-5xl">
            Thank you for sharing the residence.
          </h3>
          <p className="mt-6 text-base leading-8 text-cream-200/78">
            We&apos;ve received your project details. If the scope is aligned,
            the studio will follow up to arrange a private conversation.
          </p>

          {/* Calendly Integration */}
          <div className="mt-9">
            <a
              href={siteConfig.calendly.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3"
            >
              <Calendar className="h-4 w-4" />
              Request Consultation
            </a>
          </div>

          <p className="mt-6 text-sm text-cream-200/58">
            Prefer to speak directly?{" "}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-gold transition-colors hover:text-gold-light"
            >
              Call us
            </a>
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-[1460px] overflow-hidden border border-cream-100/14 bg-charcoal shadow-[0_26px_80px_rgba(0,0,0,0.24)]">
      <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
        <aside className="relative bg-charcoal lg:self-stretch">
          <div className="relative h-full min-h-[420px] overflow-hidden bg-graphite md:min-h-[560px] lg:min-h-[760px]">
            <Image
              src={inquiryImages.primary}
              alt="Head of the Harbor entry with black tile, staircase, and a framed view into the living room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 43vw"
            />
            <div className="absolute inset-x-0 bottom-0 border-t border-cream-100/14 bg-charcoal/94 px-6 py-5 md:px-8">
              <div className="flex items-center justify-between gap-6">
                <p className="font-label text-[9px] text-gold">
                  Head of the Harbor
                </p>
                <p className="font-label text-[9px] text-cream-100/62">
                  Long Island
                </p>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex bg-[#343c39] px-6 py-9 text-cream-100 md:px-10 lg:min-h-[760px] lg:px-12 lg:py-12">
          <div className="mx-auto flex w-full max-w-[760px] flex-col justify-center">
            <div className="border-b border-cream-100/12 pb-6">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="font-label text-[9px] text-gold">
                    Private Inquiry
                  </p>
                  <h2 className="mt-3 font-display text-4xl leading-none text-cream-100 md:text-5xl">
                    {currentTitle}
                  </h2>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-label text-[8px] text-cream-100/36">
                    Step
                  </p>
                  <p className="mt-1 font-display text-3xl leading-none text-gold">
                    {String(step).padStart(2, "0")}
                    <span className="ml-1 font-body text-xs text-cream-100/34">
                      / 03
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {stepLabels.map((label, index) => {
                  const s = index + 1;
                  const isActive = step === s;
                  const isComplete = step > s;

                  return (
                    <div key={label} aria-current={isActive ? "step" : undefined}>
                      <span
                        className={cn(
                          "block h-px transition-colors duration-300",
                          isActive || isComplete
                            ? "bg-gold"
                            : "bg-cream-100/16"
                        )}
                      />
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <span
                          className={cn(
                            "font-label text-[8px]",
                            isActive
                              ? "text-cream-100"
                              : isComplete
                                ? "text-gold"
                                : "text-cream-100/36"
                          )}
                        >
                          {label}
                        </span>
                        {isComplete && <Check className="h-3 w-3 text-gold" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className={fieldFrame} htmlFor="firstName">
                        <span className={fieldLabel}>First Name *</span>
                        <input
                          id="firstName"
                          {...register("firstName")}
                          className={fieldControl}
                          autoComplete="given-name"
                        />
                        {errors.firstName && (
                          <p className={fieldError}>
                            {errors.firstName.message}
                          </p>
                        )}
                      </label>

                      <label className={fieldFrame} htmlFor="lastName">
                        <span className={fieldLabel}>Last Name *</span>
                        <input
                          id="lastName"
                          {...register("lastName")}
                          className={fieldControl}
                          autoComplete="family-name"
                        />
                        {errors.lastName && (
                          <p className={fieldError}>
                            {errors.lastName.message}
                          </p>
                        )}
                      </label>
                    </div>

                    <label className={fieldFrame} htmlFor="email">
                      <span className={fieldLabel}>Email Address *</span>
                      <input
                        id="email"
                        {...register("email")}
                        type="email"
                        className={fieldControl}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className={fieldError}>{errors.email.message}</p>
                      )}
                    </label>

                    <label className={fieldFrame} htmlFor="phone">
                      <span className={fieldLabel}>Phone Number *</span>
                      <input
                        id="phone"
                        {...register("phone")}
                        type="tel"
                        className={fieldControl}
                        autoComplete="tel"
                      />
                      {errors.phone && (
                        <p className={fieldError}>{errors.phone.message}</p>
                      )}
                    </label>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <fieldset>
                      <legend className={fieldLabel}>Project Type *</legend>
                      <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                        {projectTypes.map((type) => (
                          <label key={type.value} className="block cursor-pointer">
                            <input
                              type="radio"
                              value={type.value}
                              {...register("projectType")}
                              className="peer sr-only"
                            />
                            <span className={choiceTile}>{type.label}</span>
                          </label>
                        ))}
                      </div>
                      {errors.projectType && (
                        <p className={fieldError}>
                          {errors.projectType.message}
                        </p>
                      )}
                    </fieldset>

                    <label className={fieldFrame} htmlFor="projectLocation">
                      <span className={fieldLabel}>Project Location *</span>
                      <input
                        id="projectLocation"
                        {...register("projectLocation")}
                        className={fieldControl}
                        placeholder="City, state, or destination"
                      />
                      {errors.projectLocation && (
                        <p className={fieldError}>
                          {errors.projectLocation.message}
                        </p>
                      )}
                    </label>

                    <fieldset>
                      <legend className={fieldLabel}>Design Budget *</legend>
                      <p className="-mt-1 mb-3 font-label text-[8px] text-cream-100/38">
                        Minimum {formatCurrency(siteConfig.minimumBudget)}
                      </p>
                      <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                        {budgetOptions.map((option) => (
                          <label key={option.value} className="block cursor-pointer">
                            <input
                              type="radio"
                              value={option.value}
                              {...register("budget")}
                              className="peer sr-only"
                            />
                            <span className={choiceTile}>{option.label}</span>
                          </label>
                        ))}
                      </div>
                      {errors.budget && (
                        <p className={fieldError}>{errors.budget.message}</p>
                      )}
                    </fieldset>

                    <fieldset>
                      <legend className={fieldLabel}>Timeline *</legend>
                      <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
                        {timelineOptions.map((option) => (
                          <label key={option.value} className="block cursor-pointer">
                            <input
                              type="radio"
                              value={option.value}
                              {...register("timeline")}
                              className="peer sr-only"
                            />
                            <span className={choiceTile}>{option.label}</span>
                          </label>
                        ))}
                      </div>
                      {errors.timeline && (
                        <p className={fieldError}>{errors.timeline.message}</p>
                      )}
                    </fieldset>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <label className={fieldFrame} htmlFor="projectDescription">
                      <span className="flex items-center justify-between gap-4">
                        <span className={fieldLabel}>Project Description *</span>
                        <span
                          className={cn(
                            "font-label text-[8px]",
                            projectDescriptionCharacterCount >= 50
                              ? "text-gold"
                              : "text-cream-100/36"
                          )}
                        >
                          {Math.min(projectDescriptionCharacterCount, 50)}/50
                        </span>
                      </span>
                      <textarea
                        id="projectDescription"
                        {...projectDescriptionRegistration}
                        rows={4}
                        placeholder="Residence, goals, constraints, and priorities"
                        className={`${fieldControl} resize-none`}
                      />
                      {projectDescriptionCharacterCount < 50 &&
                        errors.projectDescription && (
                        <p className={fieldError}>
                          {errors.projectDescription.message}
                        </p>
                      )}
                    </label>

                    <label className={fieldFrame} htmlFor="inspiration">
                      <span className={fieldLabel}>Design Inspiration</span>
                      <textarea
                        id="inspiration"
                        {...register("inspiration")}
                        rows={3}
                        placeholder="Artists, rooms, collections, materials"
                        className={`${fieldControl} resize-none`}
                      />
                    </label>

                    <div className="border border-cream-100/14 bg-cream-100/[0.035] p-4 shadow-[inset_0_1px_0_rgba(250,249,247,0.08)]">
                      <div className="flex flex-wrap items-end justify-between gap-3">
                        <div>
                          <p className={fieldLabel}>Attachments</p>
                          <p className="text-sm leading-6 text-cream-200/56">
                            Space photos, plans, inspiration
                          </p>
                        </div>
                        <p className="font-label text-[8px] text-cream-100/36">
                          {attachments.length}/{maxAttachments}
                        </p>
                      </div>

                      <input
                        id="residenceAttachments"
                        type="file"
                        multiple
                        accept="image/*,.pdf,.heic,.heif"
                        onChange={handleAttachmentChange}
                        disabled={attachments.length >= maxAttachments}
                        className="sr-only"
                      />
                      <label
                        htmlFor="residenceAttachments"
                        className={cn(
                          "mt-4 flex cursor-pointer items-center justify-between gap-4 border border-dashed border-gold/36 bg-charcoal/24 px-4 py-3 transition-colors hover:border-gold hover:bg-cream-100/[0.055]",
                          attachments.length >= maxAttachments &&
                            "cursor-not-allowed opacity-45"
                        )}
                      >
                        <span className="inline-flex items-center gap-3 text-sm text-cream-100">
                          <Upload className="h-4 w-4 text-gold" />
                          Add Files
                        </span>
                        <span className="font-label text-[8px] text-cream-100/36">
                          JPG PNG PDF HEIC
                        </span>
                      </label>

                      {attachmentError && (
                        <p className={fieldError}>{attachmentError}</p>
                      )}

                      {attachments.length > 0 && (
                        <div className="mt-4 grid gap-2 sm:grid-cols-2">
                          {attachments.map((attachment) => (
                            <div
                              key={attachment.id}
                              className="flex items-center gap-3 border border-cream-100/12 bg-charcoal/26 p-2"
                            >
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border border-cream-100/10 bg-charcoal/42">
                                {attachment.previewUrl ? (
                                  <span
                                    aria-hidden="true"
                                    className="h-full w-full bg-cover bg-center"
                                    style={{
                                      backgroundImage: `url(${attachment.previewUrl})`,
                                    }}
                                  />
                                ) : (
                                  <ImageIcon className="h-5 w-5 text-gold/80" />
                                )}
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm text-cream-100">
                                  {attachment.file.name}
                                </p>
                                <p className="font-label text-[8px] text-cream-100/36">
                                  {formatFileSize(attachment.file.size)}
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeAttachment(attachment.id)}
                                aria-label={`Remove ${attachment.file.name}`}
                                className="flex h-8 w-8 shrink-0 items-center justify-center border border-cream-100/14 text-cream-200 transition-colors hover:border-gold hover:text-gold"
                              >
                                <X className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <label className={fieldFrame} htmlFor="howDidYouHear">
                      <span className={fieldLabel}>Referral Source</span>
                      <input
                        id="howDidYouHear"
                        {...register("howDidYouHear")}
                        placeholder="Referral, publication, Instagram"
                        className={fieldControl}
                      />
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-7 flex flex-col-reverse gap-4 border-t border-cream-100/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex w-full items-center justify-center border border-cream-100/18 px-6 py-3.5 font-label text-[10px] text-cream-200 transition-colors hover:border-gold hover:text-gold sm:w-auto"
                  >
                    Previous
                  </button>
                ) : (
                  <p className="hidden font-label text-[8px] text-cream-100/36 sm:block">
                    Confidential Intake
                  </p>
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex w-full items-center justify-center gap-3 bg-cream-100 px-8 py-3.5 font-label text-[10px] text-charcoal shadow-[0_18px_42px_rgba(0,0,0,0.22)] transition-colors duration-300 hover:bg-gold sm:w-auto"
                  >
                    Continue
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-3 bg-cream-100 px-8 py-3.5 font-label text-[10px] text-charcoal shadow-[0_18px_42px_rgba(0,0,0,0.22)] transition-colors duration-300 hover:bg-gold disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                  >
                    {isSubmitting ? "Submitting..." : "Send Private Inquiry"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
