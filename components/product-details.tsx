"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Heart, Share2, Check, Truck, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Rating } from "@/components/rating"
import { QuantitySelector } from "@/components/quantity-selector"
import { ProductCard } from "@/components/product-card"
import { SectionTitle } from "@/components/section-title"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/data/products"

interface ProductDetailsProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()

  // Generate multiple images for gallery
  const productImages = [
    product.image,
    `/placeholder.svg?height=400&width=400&query=${product.name} close up detail`,
    `/placeholder.svg?height=400&width=400&query=${product.name} organic label`,
    `/placeholder.svg?height=400&width=400&query=${product.name} lifestyle shot`,
  ]

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product, quantity)
    setTimeout(() => {
      setIsAdding(false)
      setQuantity(1)
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Breadcrumbs
        items={[
          { label: "Shop", href: "/shop" },
          { label: product.category, href: `/category/${product.categorySlug}` },
          { label: product.name },
        ]}
      />

      <div className="mt-8 grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4 animate-slide-in-left">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary group">
            <Image
              src={productImages[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {product.discount && (
              <Badge className="absolute top-4 left-4 bg-destructive text-lg px-3 py-1 animate-bounce-in">
                -{product.discount}%
              </Badge>
            )}
            {product.isOrganic && (
              <Badge className="absolute top-4 right-4 bg-primary text-lg px-3 py-1 animate-bounce-in animation-delay-200">
                Organic
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                  selectedImage === index
                    ? "border-primary ring-2 ring-primary/30"
                    : "border-transparent hover:border-primary/50"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6 animate-slide-in-right">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mt-1">{product.name}</h1>
            <div className="flex items-center gap-4 mt-3">
              <Rating value={product.rating} showValue />
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            {product.inStock ? (
              <>
                <Check className="h-5 w-5 text-primary" />
                <span className="text-primary font-medium">In Stock ({product.stockCount} available)</span>
              </>
            ) : (
              <span className="text-destructive font-medium">Out of Stock</span>
            )}
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-wrap items-center gap-4">
            <QuantitySelector value={quantity} onChange={setQuantity} max={product.stockCount} />
            <Button
              size="lg"
              className={`flex-1 md:flex-none gap-2 transition-all duration-300 ${
                isAdding ? "bg-green-600 hover:bg-green-600" : ""
              }`}
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
            >
              {isAdding ? (
                <>
                  <Check className="h-5 w-5 animate-scale-in" />
                  Added!
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="transition-all duration-300 hover:scale-110 hover:text-red-500 bg-transparent"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="transition-all duration-300 hover:scale-110 bg-transparent"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t">
            {[
              { icon: Truck, label: "Free Shipping", desc: "Orders over $50" },
              { icon: Shield, label: "Secure Payment", desc: "100% protected" },
              { icon: RotateCcw, label: "Easy Returns", desc: "30 day policy" },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-3 rounded-lg transition-all duration-300 hover:bg-secondary cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-6 w-6 mx-auto text-primary" />
                <p className="text-sm font-medium mt-1">{feature.label}</p>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="description" className="mt-12 animate-fade-in animation-delay-300">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="description" className="transition-all duration-300">
            Description
          </TabsTrigger>
          <TabsTrigger value="nutrition" className="transition-all duration-300">
            Nutrition
          </TabsTrigger>
          <TabsTrigger value="reviews" className="transition-all duration-300">
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6 animate-fade-in">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">About this product</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="nutrition" className="mt-6 animate-fade-in">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Nutrition Information</h3>
              {product.nutritionInfo ? (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {Object.entries(product.nutritionInfo).map(([key, value], index) => (
                    <div
                      key={key}
                      className="text-center p-4 bg-secondary rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <p className="text-2xl font-bold text-primary">{value}</p>
                      <p className="text-sm text-muted-foreground capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">Nutrition information not available.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6 animate-fade-in">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{product.rating}</p>
                  <Rating value={product.rating} />
                  <p className="text-sm text-muted-foreground mt-1">{product.reviewCount} reviews</p>
                </div>
              </div>
              <p className="text-muted-foreground">Customer reviews will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16 animate-fade-in animation-delay-400">
          <SectionTitle title="Related Products" subtitle="You might also like these organic products" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p, index) => (
              <ProductCard key={p.id} product={p} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
