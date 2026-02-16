"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, XCircle, ShoppingBag, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const status = searchParams.get("status")

  const isSuccess = status === "success"

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <Card>
          <CardContent className="p-8 text-center">
            {isSuccess ? (
              <>
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-2xl font-serif font-bold mb-2">Order Placed Successfully!</h1>
                <p className="text-muted-foreground mb-6">
                  Thank you for your order. You will receive a confirmation email shortly with your order details.
                </p>
                <div className="bg-secondary rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground">Order Number</p>
                  <p className="text-lg font-bold">
                    ORD-2024-
                    {Math.floor(Math.random() * 1000)
                      .toString()
                      .padStart(3, "0")}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href="/orders">
                    <Button className="w-full gap-2">
                      <ShoppingBag className="h-4 w-4" />
                      View My Orders
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="w-full gap-2 bg-transparent">
                      <Home className="h-4 w-4" />
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
                  <XCircle className="h-10 w-10 text-destructive" />
                </div>
                <h1 className="text-2xl font-serif font-bold mb-2">Payment Failed</h1>
                <p className="text-muted-foreground mb-6">
                  We couldn&#39;t process your payment. Please try again or use a different payment method.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/checkout">
                    <Button className="w-full">Try Again</Button>
                  </Link>
                  <Link href="/cart">
                    <Button variant="outline" className="w-full bg-transparent">
                      Back to Cart
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
