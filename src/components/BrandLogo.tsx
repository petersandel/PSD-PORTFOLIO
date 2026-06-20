import Image from "next/image";
import { cn } from "@/lib/utils";

const brandLogo = {
  src: "/images/logo/psd-logo-white-tight.png",
  width: 96,
  height: 67,
  alt: "Peter Sandel Design",
};

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({ className, priority }: BrandLogoProps) {
  return (
    <Image
      src={brandLogo.src}
      alt={brandLogo.alt}
      width={brandLogo.width}
      height={brandLogo.height}
      sizes={`${brandLogo.width}px`}
      className={cn("h-auto w-24", className)}
      priority={priority}
    />
  );
}
