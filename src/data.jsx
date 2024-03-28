import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://nextjs-3-in-1-projects.vercel.app/",
    github: "https://github.com/dhilu0001/nextjs-projects",
    title: "Next.js Showcase: Building Flexibility and Power",
    text: "Welcome to our first Next.js project! This project is a culmination of various features and functionalities aimed at showcasing the power and flexibility of Next.js. From basic counters to managing tasks and tracking drinks, this project offers a comprehensive demonstration of Next.js capabilities.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://cloud-monitor-dashboard-njw06df11-dhilurajs-projects.vercel.app/",
    github: "https://github.com/dhilu0001/cloud-monitor-dashboard",
    title: "Cloud Monitor Dashboard",
    text: "A dashboard for monitoring cloud resources, displaying server status, resource usage, and alert notifications. Built with usability in mind, it provides real-time insights and interactive elements for efficient management of cloud operations. Simplify your cloud monitoring with our intuitive dashboard solution.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://dhilu0001.github.io/kanban-board/",
    github: "https://github.com/dhilu0001/kanban-board",
    title: "Kanban Board: Streamline Your Workflow",
    text: "Welcome to our Kanban board project! This tool is designed to help you streamline your workflow and manage tasks efficiently using the Kanban methodology. With intuitive drag-and-drop functionality and customizable columns, you can visualize your tasks, prioritize work, and track progress seamlessly.",
  },
];
