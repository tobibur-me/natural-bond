"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ShoppingCart, Search, Menu, ChevronDown, Leaf, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"
import { categories } from "@/data/categories"

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartBounce, setCartBounce] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (cartCount > 0) {
      setCartBounce(true)
      const timer = setTimeout(() => setCartBounce(false), 300)
      return () => clearTimeout(timer)
    }
  }, [cartCount])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-sm"
          : "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo with hover animation */}
          <Link href="/" className="flex items-center gap-2 group">
            <Leaf className="h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-12" />
            <span className="text-xl font-serif font-bold text-foreground">Nature Bond</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors duration-300 link-hover">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors duration-300">
                Categories{" "}
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48 animate-fade-in-down">
                {categories.map((category, index) => (
                  <DropdownMenuItem
                    key={category.id}
                    asChild
                    className="transition-colors duration-200"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Link href={`/category/${category.slug}`}>{category.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/shop"
              className="text-sm font-medium hover:text-primary transition-colors duration-300 link-hover"
            >
              Shop
            </Link>
            <Link
              href="/orders"
              className="text-sm font-medium hover:text-primary transition-colors duration-300 link-hover"
            >
              Orders
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors duration-300 group-focus-within:text-primary" />
              <Input
                placeholder="Search organic products..."
                className="pl-10 bg-secondary border-0 transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:bg-background"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden btn-press"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X className="h-5 w-5 animate-scale-in" /> : <Search className="h-5 w-5" />}
            </Button>

            {/* Cart with bounce animation */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative btn-press">
                <ShoppingCart
                  className={`h-5 w-5 transition-transform duration-300 ${cartBounce ? "animate-cart-bounce" : ""}`}
                />
                {cartCount > 0 && (
                  <Badge
                    className={`absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs badge-pulse ${
                      cartBounce ? "animate-bounce-in" : ""
                    }`}
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden btn-press">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col gap-4 mt-8">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/shop", label: "Shop" },
                  ].map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary transition-colors duration-300 animate-slide-in-right"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <p className="text-sm text-muted-foreground mb-2">Categories</p>
                    {categories.map((category, index) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="block py-2 text-foreground hover:text-primary transition-colors duration-300 animate-slide-in-right"
                        style={{ animationDelay: `${(index + 3) * 0.05}s` }}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/orders"
                    className="text-lg font-medium hover:text-primary transition-colors duration-300 animate-slide-in-right"
                    style={{ animationDelay: "0.5s" }}
                  >
                    My Orders
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar with slide animation */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
            isSearchOpen ? "max-h-20 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search organic products..."
              className="pl-10 bg-secondary border-0 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              autoFocus={isSearchOpen}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
