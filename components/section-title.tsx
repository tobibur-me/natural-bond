interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center mb-8 animate-fade-in-up ${className}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p
          className="text-muted-foreground mt-2 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
