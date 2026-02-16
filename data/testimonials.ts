export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Health Coach",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Nature Bond has transformed how I shop for groceries. The quality of their organic produce is unmatched, and I love knowing exactly where my food comes from.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Home Chef",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "As someone who cooks daily, the freshness and flavor of Nature Bond's products make a real difference. My dishes have never tasted better!",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Nutritionist",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "I recommend Nature Bond to all my clients. Their commitment to organic, sustainable farming aligns perfectly with healthy eating principles.",
    rating: 5,
  },
]
