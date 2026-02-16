import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Truck, Shield, Leaf, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import { ProductCard } from "@/components/product-card"
import { CategoryCard } from "@/components/category-card"
import { Rating } from "@/components/rating"
import { AnimatedSection } from "@/components/animated-section"
import { getFeaturedProducts } from "@/data/products"
import { categories } from "@/data/categories"
import { testimonials } from "@/data/testimonials"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/fresh-organic-vegetables-and-fruits-farm-backgroun.jpg" alt="Fresh organic produce" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in-up">
              100% Organic & Natural
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-background mb-6 text-balance animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Fresh From Farm To Your Table
            </h1>
            <p className="text-lg text-background/80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Discover the finest organic produce sourced directly from sustainable farms. Healthy eating starts with
              quality ingredients.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/shop">
                <Button size="lg" className="gap-2 btn-press group">
                  Shop Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/category/fruits">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/10 text-background border-background/20 hover:bg-background/20 btn-press transition-all duration-300"
                >
                  Explore Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Free Delivery", desc: "On orders over $50" },
              { icon: Shield, title: "Secure Payment", desc: "100% secure checkout" },
              { icon: Leaf, title: "100% Organic", desc: "Certified products" },
              { icon: Clock, title: "Fresh Daily", desc: "Farm to door delivery" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <AnimatedSection animation="fade-in-up" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Shop by Category" subtitle="Browse our wide selection of organic food categories" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Products */}
      <AnimatedSection animation="fade-in-up" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle title="Featured Products" subtitle="Handpicked organic favorites for your healthy lifestyle" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Link href="/shop">
              <Button variant="outline" size="lg" className="gap-2 bg-transparent btn-press group">
                View All Products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Discount Banner */}
      <AnimatedSection animation="scale-in" className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src="/organic-farm-vegetables-green-fresh.jpg"
              alt="Special offer"
              width={1200}
              height={400}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-md text-background">
                  <span className="text-sm font-medium uppercase tracking-wider animate-fade-in">
                    Limited Time Offer
                  </span>
                  <h2
                    className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4 animate-fade-in-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    Get 20% Off Your First Order
                  </h2>
                  <p className="mb-6 text-background/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    Use code NATURE20 at checkout and start your organic journey today.
                  </p>
                  <Link href="/shop">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="btn-press animate-fade-in-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection animation="fade-in-up" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What Our Customers Say"
            subtitle="Join thousands of happy customers who trust Nature Bond"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Rating value={testimonial.rating} />
                  <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
