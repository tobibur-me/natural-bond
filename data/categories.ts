export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Fruits",
    slug: "fruits",
    description: "Fresh, organic fruits picked at peak ripeness",
    image: "/variety-of-fresh-organic-fruits.jpg",
    productCount: 24,
  },
  {
    id: "2",
    name: "Vegetables",
    slug: "vegetables",
    description: "Farm-fresh organic vegetables for healthy meals",
    image: "/colorful-organic-vegetables-arrangement.jpg",
    productCount: 32,
  },
  {
    id: "3",
    name: "Dairy & Eggs",
    slug: "dairy-eggs",
    description: "Organic dairy products and free-range eggs",
    image: "/organic-dairy-products-milk-eggs-cheese.jpg",
    productCount: 18,
  },
  {
    id: "4",
    name: "Pantry",
    slug: "pantry",
    description: "Organic pantry staples for everyday cooking",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 45,
  },
  {
    id: "5",
    name: "Grains",
    slug: "grains",
    description: "Wholesome organic grains and cereals",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 22,
  },
  {
    id: "6",
    name: "Beverages",
    slug: "beverages",
    description: "Organic drinks, juices, and teas",
    image: "/placeholder.svg?height=300&width=300",
    productCount: 28,
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
