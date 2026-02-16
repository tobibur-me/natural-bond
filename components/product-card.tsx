"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Check } from "lucide-react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/data/products"
import { useCart } from "@/context/cart-context"

interface ProductCardProps {
  product: Product
  view?: "grid" | "list"
  index?: number
}

export function ProductCard({ product, view = "grid", index = 0 }: ProductCardProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product)
    setTimeout(() => setIsAdding(false), 600)
  }

  if (view === "list") {
    return (
      <Card className="overflow-hidden hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-48 h-48 shrink-0 image-zoom">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            {product.discount && (
              <Badge className="absolute top-2 left-2 bg-destructive animate-bounce-in">-{product.discount}%</Badge>
            )}
            {product.isOrganic && (
              <Badge className="absolute top-2 right-2 bg-primary animate-bounce-in" style={{ animationDelay: "0.1s" }}>
                Organic
              </Badge>
            )}
          </div>
          <CardContent className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <Link href={`/product/${product.slug}`}>
                <h3 className="font-semibold text-lg hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
              <div className="flex items-center gap-1 mt-2">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <Button
                onClick={handleAddToCart}
                size="sm"
                className={`btn-press transition-all duration-300 ${isAdding ? "bg-green-600 hover:bg-green-600" : ""}`}
                disabled={isAdding}
              >
                {isAdding ? (
                  <>
                    <Check className="h-4 w-4 mr-2 animate-bounce-in" />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card
      className="overflow-hidden group hover-lift animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative aspect-square image-zoom">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.discount && (
          <Badge className="absolute top-2 left-2 bg-destructive animate-bounce-in">-{product.discount}%</Badge>
        )}
        {product.isOrganic && (
          <Badge className="absolute top-2 right-2 bg-primary animate-bounce-in" style={{ animationDelay: "0.1s" }}>
            Organic
          </Badge>
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        <Button
          onClick={handleAddToCart}
          size="icon"
          className={`absolute bottom-4 right-4 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 btn-press ${
            isAdding ? "bg-green-600 hover:bg-green-600 opacity-100 scale-100" : ""
          }`}
        >
          {isAdding ? <Check className="h-4 w-4 animate-bounce-in" /> : <ShoppingCart className="h-4 w-4" />}
        </Button>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold hover:text-primary transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mt-1">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
