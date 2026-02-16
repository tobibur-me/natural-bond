import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { Category } from "@/data/categories"

interface CategoryCardProps {
  category: Category
  index?: number
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`}>
      <Card
        className="overflow-hidden group cursor-pointer hover-lift animate-fade-in-up"
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        <div className="relative aspect-square image-zoom">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent transition-opacity duration-300 group-hover:from-foreground/80" />
          <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-background">
            <h3 className="font-serif text-xl font-bold transition-transform duration-300 group-hover:translate-y-[-4px]">
              {category.name}
            </h3>
            <p className="text-sm text-background/80 transition-all duration-300 group-hover:text-background">
              {category.productCount} products
            </p>
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}
