export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled"

export interface OrderItem {
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Order {
  id: string
  orderNumber: string
  date: string
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  shippingAddress: {
    name: string
    address: string
    city: string
    state: string
    zip: string
    country: string
  }
  paymentMethod: string
}

export const orders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2024-001",
    date: "2024-12-05",
    status: "delivered",
    items: [
      {
        productId: "1",
        name: "Organic Avocados",
        price: 6.99,
        quantity: 2,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        productId: "3",
        name: "Raw Organic Honey",
        price: 12.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    subtotal: 26.97,
    shipping: 5.99,
    tax: 2.16,
    total: 35.12,
    shippingAddress: {
      name: "John Doe",
      address: "123 Green Street",
      city: "Portland",
      state: "OR",
      zip: "97201",
      country: "USA",
    },
    paymentMethod: "Credit Card",
  },
  {
    id: "2",
    orderNumber: "ORD-2024-002",
    date: "2024-12-08",
    status: "processing",
    items: [
      {
        productId: "4",
        name: "Organic Free-Range Eggs",
        price: 7.99,
        quantity: 2,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        productId: "7",
        name: "Organic Blueberries",
        price: 5.99,
        quantity: 3,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    subtotal: 33.95,
    shipping: 5.99,
    tax: 2.72,
    total: 42.66,
    shippingAddress: {
      name: "John Doe",
      address: "123 Green Street",
      city: "Portland",
      state: "OR",
      zip: "97201",
      country: "USA",
    },
    paymentMethod: "Mobile Banking",
  },
  {
    id: "3",
    orderNumber: "ORD-2024-003",
    date: "2024-12-10",
    status: "pending",
    items: [
      {
        productId: "10",
        name: "Organic Olive Oil",
        price: 18.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    subtotal: 18.99,
    shipping: 5.99,
    tax: 1.52,
    total: 26.5,
    shippingAddress: {
      name: "John Doe",
      address: "123 Green Street",
      city: "Portland",
      state: "OR",
      zip: "97201",
      country: "USA",
    },
    paymentMethod: "COD",
  },
]

export function getOrderById(id: string): Order | undefined {
  return orders.find((o) => o.id === id)
}
