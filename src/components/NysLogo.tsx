import Image from "next/image";

interface NysLogoProps {
  className?: string;
  /** "light" = white logo for dark backgrounds (default), "dark" = dark logo for light backgrounds */
  variant?: "light" | "dark";
}

export default function NysLogo({
  className = "h-10 w-auto",
  variant = "light",
}: NysLogoProps) {
  return (
    <Image
      src="https://www.newyorksash.com/assets/NYLOGO-copy_1759006724430-BHTfyIKn.png"
      alt="New York Sash"
      width={180}
      height={60}
      className={`w-auto object-contain ${variant === "light" ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
