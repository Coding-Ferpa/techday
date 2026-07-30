interface SectionHeadingProps {
  label?: string;
  title: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`mb-8 flex flex-col ${alignClass} ${className}`}>
      {label && (
        <span
          className={`inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-[0.2em] text-accent mb-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {align === "center" && (
            <span className="h-px w-6 bg-accent/60 shrink-0" aria-hidden />
          )}
          {label}
          {align === "center" && (
            <span className="h-px w-6 bg-accent/60 shrink-0" aria-hidden />
          )}
        </span>
      )}
      <h2 className="text-heading-2 font-bold text-text-primary font-heading text-balance max-w-3xl">
        {title}
      </h2>
    </div>
  );
}
