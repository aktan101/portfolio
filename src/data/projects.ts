interface Project {
    id: string
    title: string
    description: string
    image: string
    technologies: string[]
    url: string
}

export const projectsData: Project[] = [
    {
        id: "ecommerce",
        title: "E-Commerce Website",
        description: "A fully responsive e-commerce platform with product filtering and cart functionality.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["React", "Redux", "Tailwind CSS", "Stripe"],
        url: "https://example.com/ecommerce",
    },
    {
        id: "dashboard",
        title: "Admin Dashboard",
        description: "An interactive admin dashboard with data visualization and user management.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["Next.js", "TypeScript", "Ant Design", "Chart.js"],
        url: "https://example.com/dashboard",
    },
    {
        id: "portfolio",
        title: "Portfolio Template",
        description: "A customizable portfolio template for creative professionals.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["React", "Framer Motion", "Tailwind CSS"],
        url: "https://example.com/portfolio",
    },
    {
        id: "blog",
        title: "Blog Platform",
        description: "A multilingual blog platform with content management system.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["Next.js", "i18next", "Markdown", "Vercel"],
        url: "https://example.com/blog",
    },
    {
        id: "weather",
        title: "Weather App",
        description: "A weather application with location detection and 7-day forecast.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["React", "OpenWeather API", "Geolocation"],
        url: "https://example.com/weather",
    },
    {
        id: "todo",
        title: "Task Manager",
        description: "A task management application with drag-and-drop functionality.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["React", "Redux", "DnD Kit", "LocalStorage"],
        url: "https://example.com/todo",
    },
]
