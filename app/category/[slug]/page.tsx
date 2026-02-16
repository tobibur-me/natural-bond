import { notFound } from "next/navigation"
import { SectionTitle } from "@/components/section-title"
import { ProductCard } from "@/components/product-card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getCategoryBySlug, categories } from "@/data/categories"
import { getProductsByCategory } from "@/data/products"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(slug)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: "Categories", href: "/shop" }, { label: category.name }]} />

      <div className="mt-8">
        <SectionTitle title={category.name} subtitle={category.description} />

        {categoryProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products available in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
