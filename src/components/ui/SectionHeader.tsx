interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${align === "left" ? "text-left mx-0!" : ""}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}
