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
    <div className={`section-header ${align === "left" ? "section-header-left" : ""}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}
