import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { SOCIAL_LINKS } from "@/lib/constants";

const ICON_MAP = {
  Instagram: faInstagram,
} as const;

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function SocialLinks({
  size = "md",
  className = "",
}: SocialLinksProps) {
  const iconSizes = {
    sm: "w-9 h-9 text-base",
    md: "w-11 h-11 text-lg",
    lg: "w-14 h-14 text-xl",
  };

  const handleText = {
    sm: "text-caption",
    md: "text-body",
    lg: "text-body",
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform.label}
          className="inline-flex items-center gap-0 rounded-full border border-border bg-bg-elevated pl-0.5 pr-4 text-text-secondary transition-all duration-base hover:border-accent hover:text-accent hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span
            className={`${iconSizes[size]} flex shrink-0 items-center justify-center rounded-full bg-bg-surface text-inherit`}
          >
            <FontAwesomeIcon icon={ICON_MAP[platform.name]} aria-hidden />
          </span>
          <span className={`${handleText[size]} font-semibold text-text-primary pl-2`}>
            {platform.handle}
          </span>
        </a>
      ))}
    </div>
  );
}
