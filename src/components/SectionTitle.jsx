export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <header className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
