import type { ReactNode } from "react"
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGithub,
    FaSwatchbook,
    FaAngular,
    FaCode,
    FaMobileAlt,
} from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiRedux, SiAntdesign, SiI18Next, SiJson } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"

interface Skill {
    name: string
    icon: ReactNode
    level: number
}

export const skillsData: Skill[] = [
    {
        name: "HTML",
        icon: <FaHtml5 />,
        level: 98,
    },
    {
        name: "CSS",
        icon: <FaCss3Alt />,
        level: 90,
    },
    {
        name: "JavaScript",
        icon: <FaJs />,
        level: 80,
    },
    {
        name: "React",
        icon: <FaReact />,
        level: 85,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 97,
    },
    {
        name: "Swiper",
        icon: <FaSwatchbook />,
        level: 88,
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        level: 76,
    },
    {
        name: "Redux",
        icon: <SiRedux />,
        level: 69,
    },
    {
        name: "Hooks",
        icon: <FaCode />,
        level: 80,
    },
    {
        name: "Angular",
        icon: <FaAngular />,
        level: 57,
    },
    {
        name: "Ant Design",
        icon: <SiAntdesign />,
        level: 65,
    },
    {
        name: "i18next",
        icon: <SiI18Next />,
        level: 83,
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        level: 80,
    },
    {
        name: "JSON",
        icon: <SiJson />,
        level: 94,
    },
    {
        name: "Responsive Design",
        icon: <FaMobileAlt />,
        level: 92,
    },
    {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion />,
        level: 64,
    },
]
