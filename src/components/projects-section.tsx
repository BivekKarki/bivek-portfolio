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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    // { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
  ]

  const projects = [
    {
      id: 1,
      title: "Futsal Management System",
      description: "A full-featured online booking system for futsal with payment integration, authentication, and admin dashboard",
      image: "/images/futsal.png?height=400&width=600",
      category: "web",
      tags: ["Python", "Django", "Khalti"],
      links: {
        demo: "https://bivek.pythonanywhere.com/",
        github: "https://github.com/BivekKarki/Futsal-Management-System",
      },
    },
    // {
    //   id: 2,
    //   title: "Travel Companion App",
    //   description: "A mobile application for travelers to plan trips, discover attractions, and share experiences.",
    //   image: "/images/bivek1.jpg?height=400&width=600",
    //   category: "mobile",
    //   tags: ["React Native", "Firebase", "Google Maps API"],
    //   links: {
    //     demo: "https://example.com",
    //     github: "https://github.com",
    //   },
    // },
    {
      id: 3,
      title: "Kalodhunga Corporation",
      description: "An interactive website for a software development company",
      image: "/images/kalodhunga.png?height=400&width=600",
      category: "web",
      tags: ["React", "MySql", "Django"],
      links: {
        demo: "https://kalodhunga.com/",
        // github: "https://github.com",
      },
    },
    {
      id: 4,
      title: "Mobile App Design",
      description:
        "QuickPay is a sleek, user-friendly mobile wallet app designed in Figma for seamless digital payments and money transfers.",
      image: "/images/figma.png?height=400&width=600",
      category: "design",
      tags: ["Design", "Figma", "Prototyping"],
      links: {
        demo: "https://www.figma.com/proto/2vpdybW6p01FHeYff5F7xP/QuickPay--Copy-?node-id=19-10&p=f&t=FglpCe0T0XPITjKY-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A2&show-proto-sidebar=1",
        // github: "https://github.com",
      },
    },
    {
      id: 5,
      title: "Corporate Website",
      description:
        "Nagarik Rojgar is an employment portal connecting Nepali citizens with job opportunities across various sectors.",
      image: "/images/nagarik.png?height=400&width=600",
      category: "web",
      tags: ["React", "MySql", "Django"],
      links: {
        demo: "https://nagarikrojgar.com/",
        // github: "https://github.com",
      },
    },
    {
      id: 6,
      title: "E-commerce website",
      description: "An e-commerce platform offering premium-quality, handcrafted shawls made from traditional fabrics..",
      image: "/images/babashawl.png?height=400&width=600",
      category: "web",
      tags: ["React", "OpenAI API", "Node.js"],
      links: {
        demo: "https://www.shivababafabric.com/",
        // github: "https://github.com",
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

