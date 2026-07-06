import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-16 md:h-20",
  xl: "h-24 md:h-32 lg:h-40",
};

const BrandLogo = ({ className, size = "md" }: BrandLogoProps) => (
  <img
    src={logo}
    alt="The HUNDRED Global — Premium Maths Coaching"
    className={cn("w-auto object-contain", sizeClasses[size], className)}
  />
);

export default BrandLogo;
