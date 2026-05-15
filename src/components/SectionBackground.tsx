type SectionBackgroundProps = {
  variant?: "dark" | "alt";
  intensity?: "normal" | "strong";
};

const SectionBackground = ({
  variant = "dark",
  intensity = "normal",
}: SectionBackgroundProps) => {
  const orbOpacity = intensity === "strong" ? "opacity-70" : "opacity-50";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className={`si-orb si-orb-orange w-[350px] h-[350px] md:w-[600px] md:h-[600px] -top-[180px] md:-top-[250px] -left-[180px] md:-left-[250px] animate-pulse-glow ${orbOpacity}`}
      />
      <div
        className={`si-orb si-orb-orange-soft w-[280px] h-[280px] md:w-[450px] md:h-[450px] -bottom-[120px] md:-bottom-[200px] -right-[120px] md:-right-[200px] animate-pulse-glow ${orbOpacity}`}
        style={{ animationDelay: "2s" }}
      />
      {variant === "dark" && (
        <div
          className={`si-orb si-orb-sm si-orb-orange w-[260px] h-[260px] top-1/2 -translate-y-1/2 right-[-80px] md:right-[-120px] animate-pulse-glow ${orbOpacity}`}
          style={{ animationDelay: "1s" }}
        />
      )}
    </div>
  );
};


export default SectionBackground;
