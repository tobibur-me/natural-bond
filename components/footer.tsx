import Link from "next/link"
import { Leaf, Facebook, Instagram, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Leaf className="h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-12" />
              <span className="text-xl font-serif font-bold">Nature Bond</span>
            </Link>
            <p className="text-sm text-muted">
              Your trusted source for fresh, organic produce delivered straight to your door.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/shop", label: "Shop All" },
                { href: "/category/fruits", label: "Fruits" },
                { href: "/category/vegetables", label: "Vegetables" },
                { href: "/category/dairy-eggs", label: "Dairy & Eggs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {[
                { href: "/orders", label: "My Orders" },
                { href: "#", label: "Shipping Info" },
                { href: "#", label: "Returns & Refunds" },
                { href: "#", label: "Contact Us" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted mb-4">Subscribe for exclusive offers and organic living tips.</p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-muted transition-all duration-300 focus:bg-background/20 focus:ring-2 focus:ring-primary/30"
              />
              <Button className="shrink-0 btn-press">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Nature Bond. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
