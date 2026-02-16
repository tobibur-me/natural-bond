import { notFound } from "next/navigation"
import { ProductDetails } from "@/components/product-details"
import { getProductBySlug, getRelatedProducts } from "@/data/products"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id, product.categorySlug)

  return <ProductDetails product={product} relatedProducts={relatedProducts} />
}
