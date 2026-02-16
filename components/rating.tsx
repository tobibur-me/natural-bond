import { Star } from "lucide-react"

interface RatingProps {
  value: number
  max?: number
  size?: "sm" | "md" | "lg"
  showValue?: boolean
}

export function Rating({ value, max = 5, size = "md", showValue = false }: RatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < Math.floor(value) ? "fill-accent text-accent" : "fill-muted text-muted"
          }`}
        />
      ))}
      {showValue && <span className="ml-1 text-sm font-medium">{value.toFixed(1)}</span>}
    </div>
  )
}
