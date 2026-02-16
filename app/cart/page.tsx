"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { QuantitySelector } from "@/components/quantity-selector"
import { useCart } from "@/context/cart-context"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  const subtotal = getCartTotal()
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: "Cart" }]} />
        <div className="flex flex-col items-center justify-center py-16 animate-fade-in-up">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mb-4 animate-float" />
          <h1 className="text-2xl font-serif font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Looks like you haven&#39;t added any items to your cart yet.</p>
          <Link href="/shop">
            <Button size="lg" className="gap-2 btn-press group">
              Start Shopping
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: "Cart" }]} />

      <h1 className="text-3xl font-serif font-bold mt-6 mb-8 animate-fade-in-up">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, index) => (
            <Card
              key={item.product.id}
              className="hover-lift animate-fade-in-up transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 shrink-0 rounded-md overflow-hidden image-zoom">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.product.slug}`}>
                      <h3 className="font-semibold hover:text-primary transition-colors duration-300">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{item.product.category}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <QuantitySelector
                        value={item.quantity}
                        onChange={(q) => updateQuantity(item.product.id, q)}
                        max={item.product.stockCount}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 transition-all duration-300 hover:scale-110"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">${(item.product.price * item.quantity).toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)} each</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-between animate-fade-in-up" style={{ animationDelay: `${items.length * 0.1}s` }}>
            <Button variant="outline" onClick={clearCart} className="btn-press bg-transparent">
              Clear Cart
            </Button>
            <Link href="/shop">
              <Button variant="outline" className="btn-press bg-transparent">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-24 animate-slide-in-right">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-sm text-muted-foreground animate-pulse-soft">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="block">
                <Button className="w-full btn-press group" size="lg">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
