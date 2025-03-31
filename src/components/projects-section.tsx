"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("all")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, user authentication, and admin dashboard.",
      image: "/images/bivek1.jpg?height=400&width=600",
      category: "web",
      tags: ["Next.js", "Stripe", "MongoDB"],
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
    },
    {
      id: 2,
      title: "Travel Companion App",
      description: "A mobile application for travelers to plan trips, discover attractions, and share experiences.",
      image: "/images/bivek1.jpg?height=400&width=600",
      category: "mobile",
      tags: ["React Native", "Firebase", "Google Maps API"],
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "An interactive dashboard for tracking investments, expenses, and financial goals.",
      image: "/images/bivek1.jpg?height=400&width=600",
      category: "web",
      tags: ["React", "D3.js", "Node.js"],
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
    },
    {
      id: 4,
      title: "Health & Fitness App",
      description:
        "A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
      image: "/images/bivek1.jpg?height=400&width=600",
      category: "mobile",
      tags: ["Flutter", "Firebase", "RESTful API"],
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
    },
    {
      id: 5,
      title: "Corporate Website Redesign",
      description:
        "Complete redesign of a corporate website focusing on improved user experience and conversion rates.",
      image: "/images/bivek1.jpg?height=400&width=600",
      category: "design",
      tags: ["Figma", "UI/UX", "Prototyping"],
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "An application that uses AI to generate marketing content for businesses.",
      image: "/images/bivek1.jpg?height=400&width=600",
      category: "web",
      tags: ["React", "OpenAI API", "Node.js"],
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/10">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-2">Portfolio</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          </motion.div>
          <motion.p variants={itemVariants} className="text-muted-foreground">
            Here are some of my recent projects that showcase my skills and expertise. Each project represents a unique
            challenge and solution.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="mx-auto flex justify-center">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden h-full bg-background border-border/50 hover:border-primary/50 transition-colors duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={project.image || "/images/bivek1.jpg"}
                      alt={project.title}
                      className=" object-cover transition-transform duration-500 hover:scale-105"
                      fill
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary/10 text-secondary hover:bg-secondary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <Button asChild variant="outline" size="sm">
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" /> Demo
                        </a>
                      </Button>
                      <Button asChild variant="ghost" size="sm">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" /> Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <Button asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

