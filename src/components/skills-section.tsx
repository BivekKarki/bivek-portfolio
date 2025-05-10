"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Database,
  Layout,
  Smartphone,
  Server,
  Figma,
  GitBranch,
  ChevronRight,
  X,
  Plus,
  Maximize2,
  BarChart2,
} from "lucide-react"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isGridView, setIsGridView] = useState(true)

  // For the radar chart animation
  const [chartAnimated, setChartAnimated] = useState(false)
  useEffect(() => {
    if (isInView && !chartAnimated) {
      const timer = setTimeout(() => {
        setChartAnimated(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView, chartAnimated])

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      color: "#e9c46a", // primary
      description: "Building responsive, accessible, and performant user interfaces",
      skills: [
        {
          name: "React",
          level: 95,
          description: "Building complex, interactive UIs with React hooks, context, and advanced patterns.",
        },
        {
          name: "Next.js",
          level: 90,
          description:
            "Creating performant, SEO-friendly applications with server-side rendering and static generation.",
        },
        {
          name: "TypeScript",
          level: 85,
          description: "Developing type-safe applications with interfaces, generics, and utility types.",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          description: "Crafting responsive designs with utility-first approach and custom configurations.",
        },
        {
          name: "Framer Motion",
          level: 80,
          description: "Implementing smooth animations and transitions with keyframes and variants.",
        },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      color: "#2a9d8f", // secondary
      description: "Developing scalable server-side applications and APIs",
      skills: [
        {
          name: "Node.js",
          level: 85,
          description: "Building scalable server applications with Express, middleware, and async patterns.",
        },
        {
          name: "Express",
          level: 80,
          description: "Creating RESTful APIs with route handling, authentication, and error management.",
        },
        { name: "Python", level: 75, description: "Developing data processing applications and automation scripts." },
        {
          name: "Django",
          level: 70,
          description: "Building full-featured web applications with Django&apos;s ORM and admin interface.",
        },
        // {
        //   name: "GraphQL",
        //   level: 75,
        //   description: "Implementing efficient data fetching with schemas, resolvers, and Apollo Server.",
        // },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      color: "#e76f51", // accent
      description: "Designing and optimizing database structures and queries",
      skills: [
        {
          name: "MongoDB",
          level: 85,
          description: "Designing NoSQL database schemas and implementing aggregation pipelines.",
        },
        {
          name: "PostgreSQL",
          level: 80,
          description: "Creating optimized relational databases with complex queries and indexing.",
        },
        {
          name: "MySQL",
          level: 75,
          description: "Managing relational data with transactions, stored procedures, and triggers.",
        },
        {
          name: "Firebase",
          level: 25,
          description: "Building real-time applications with Firestore, authentication, and cloud functions.",
        },
        // { name: "Redis", level: 70, description: "Implementing caching strategies and pub/sub messaging patterns." },
      ],
    },
    // {
    //   id: "mobile",
    //   name: "Mobile",
    //   icon: <Smartphone className="h-5 w-5" />,
    //   color: "#264653", // dark teal
    //   description: "Creating cross-platform mobile applications",
    //   skills: [
    //     {
    //       name: "React Native",
    //       level: 85,
    //       description: "Developing cross-platform mobile apps with native modules and navigation.",
    //     },
    //     {
    //       name: "Flutter",
    //       level: 70,
    //       description: "Creating beautiful UI with widgets, state management, and animations.",
    //     },
    //     { name: "Swift", level: 60, description: "Building iOS applications with UIKit and SwiftUI components." },
    //     { name: "Kotlin", level: 65, description: "Developing Android apps with Jetpack Compose and Material Design." },
    //     {
    //       name: "Expo",
    //       level: 80,
    //       description: "Rapidly prototyping and deploying mobile apps with managed workflow.",
    //     },
    //   ],
    // },
    {
      id: "design",
      name: "Design",
      icon: <Figma className="h-5 w-5" />,
      color: "#f4a261", // orange
      description: "Creating user interfaces and visual experiences",
      skills: [
        {
          name: "Figma",
          level: 70,
          description: "Creating interactive prototypes, design systems, and component libraries.",
        },
        // {
        //   name: "Adobe XD",
        //   level: 85,
        //   description: "Designing user interfaces with auto-animate and repeat grid features.",
        // },
        // { name: "Sketch", level: 75, description: "Crafting vector designs and symbols for consistent UI elements." },
        { name: "Photoshop", level: 30, description: "Editing and optimizing images for web and mobile applications." },
        // {
        //   name: "Illustrator",
        //   level: 65,
        //   description: "Creating vector graphics, icons, and illustrations for digital products.",
        // },
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <GitBranch className="h-5 w-5" />,
      color: "#457b9d", // blue
      description: "Automating deployment and infrastructure management",
      skills: [
        {
          name: "Git",
          level: 90,
          description: "Managing code with branching strategies, rebasing, and conflict resolution.",
        },
        // {
        //   name: "Docker",
        //   level: 80,
        //   description: "Containerizing applications with multi-stage builds and Docker Compose.",
        // },
        // { name: "CI/CD", level: 85, description: "Automating testing and deployment with GitHub Actions and Jenkins." },
        {
          name: "AWS",
          level: 75,
          description: "Deploying and managing cloud infrastructure with EC2, S3, and Lambda.",
        },
        {
          name: "Vercel",
          level: 90,
          description: "Deploying JAMstack applications with serverless functions and edge network.",
        },
      ],
    },
  ]

  // Function to toggle active category
  const toggleCategory = (categoryId: string) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null)
    } else {
      setActiveCategory(categoryId)
    }
  }

  // Get active category data
  const activeCategoryData = activeCategory ? skillCategories.find((category) => category.id === activeCategory) : null

  // Radar chart points calculation
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateRadarPoints = (skills: any[], radius = 150) => {
    const points = []
    const centerX = radius
    const centerY = radius
    const angleStep = (2 * Math.PI) / skills.length

    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2 // Start from top
      const level = chartAnimated ? skills[i].level / 100 : 0
      const x = centerX + radius * level * Math.cos(angle)
      const y = centerY + radius * level * Math.sin(angle)
      points.push({ x, y, angle, skill: skills[i] })
    }

    return { points, centerX, centerY }
  }

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-full h-full opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: "radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Glowing orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              background: i === 0 ? "#e9c46a" : i === 1 ? "#2a9d8f" : "#e76f51",
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${20 + i * 30}%`,
              left: `${10 + i * 30}%`,
            }}
            animate={{
              x: [0, 30, 0, -30, 0],
              y: [0, 20, -20, 0, 0],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <Badge className="mb-2">Skills</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          </motion.div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="text-muted-foreground"
          >
            Explore my technical skills across different domains. Select a category to see detailed proficiencies.
          </motion.p>
        </motion.div>

        {/* View toggle */}
        <div className="flex justify-end mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsGridView(!isGridView)}
            className="flex items-center gap-2"
          >
            {isGridView ? (
              <>
                <BarChart2 className="h-4 w-4" /> List View
              </>
            ) : (
              <>
                <Maximize2 className="h-4 w-4" /> Grid View
              </>
            )}
          </Button>
        </div>

        {/* Skill Categories - Grid View */}
        {isGridView ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`relative overflow-hidden rounded-lg border cursor-pointer transition-all duration-300 ${
                  activeCategory === category.id ? "border-2 shadow-lg" : "border-border/50 hover:border-primary/50"
                }`}
                style={{
                  borderColor: activeCategory === category.id ? category.color : undefined,
                  boxShadow: activeCategory === category.id ? `0 0 15px ${category.color}30` : undefined,
                }}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div
                    className="p-3 rounded-full mb-3"
                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-medium mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>

                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 pointer-events-none"
                  initial={false}
                  animate={{
                    opacity: activeCategory === category.id ? 0.5 : 0,
                  }}
                  style={{
                    background: `linear-gradient(45deg, transparent, ${category.color}40, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 mb-12">
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative overflow-hidden rounded-lg border cursor-pointer transition-all duration-300 ${
                  activeCategory === category.id ? "border-2 shadow-lg" : "border-border/50 hover:border-primary/50"
                }`}
                style={{
                  borderColor: activeCategory === category.id ? category.color : undefined,
                  boxShadow: activeCategory === category.id ? `0 0 15px ${category.color}30` : undefined,
                }}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="p-4 md:p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: `${category.color}20`, color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                      activeCategory === category.id ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 pointer-events-none"
                  initial={false}
                  animate={{
                    opacity: activeCategory === category.id ? 0.5 : 0,
                  }}
                  style={{
                    background: `linear-gradient(45deg, transparent, ${category.color}40, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Active Category Details */}
        <AnimatePresence mode="wait">
          {activeCategory && activeCategoryData && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div
                className="relative rounded-xl p-6 md:p-8 backdrop-blur-sm border"
                style={{
                  borderColor: `${activeCategoryData.color}40`,
                  background: `linear-gradient(to bottom right, ${activeCategoryData.color}05, ${activeCategoryData.color}10)`,
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: `${activeCategoryData.color}20`, color: activeCategoryData.color }}
                    >
                      {activeCategoryData.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{activeCategoryData.name} Skills</h3>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setActiveCategory(null)} className="rounded-full">
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Skill visualization */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Radar Chart */}
                  <div className="relative flex justify-center items-center">
                    <div className="relative w-[300px] h-[300px]">
                      {/* Background circles */}
                      {[0.2, 0.4, 0.6, 0.8, 1].map((level) => (
                        <motion.div
                          key={`circle-${level}`}
                          className="absolute rounded-full border border-border/30"
                          style={{
                            width: `${level * 300}px`,
                            height: `${level * 300}px`,
                            left: `${150 - (level * 300) / 2}px`,
                            top: `${150 - (level * 300) / 2}px`,
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 * level, duration: 0.5 }}
                        />
                      ))}

                      {/* Radar chart */}
                      {(() => {
                        const { points, centerX, centerY } = calculateRadarPoints(activeCategoryData.skills)

                        return (
                          <>
                            {/* Radar polygon */}
                            <svg className="absolute inset-0 w-full h-full">
                              <motion.polygon
                                points={points.map((p) => `${p.x},${p.y}`).join(" ")}
                                fill={`${activeCategoryData.color}20`}
                                stroke={activeCategoryData.color}
                                strokeWidth="2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                              />
                            </svg>

                            {/* Skill points */}
                            {points.map((point, i) => (
                              <motion.div
                                key={`point-${i}`}
                                className="absolute w-3 h-3 rounded-full bg-background border-2"
                                style={{
                                  left: `${point.x - 6}px`,
                                  top: `${point.y - 6}px`,
                                  borderColor: activeCategoryData.color,
                                }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                                onMouseEnter={() => setHoveredSkill(point.skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                              />
                            ))}

                            {/* Skill labels */}
                            {points.map((point, i) => {
                              const isHovered = hoveredSkill === point.skill.name
                              const distance = 160
                              const labelX = centerX + distance * Math.cos(point.angle)
                              const labelY = centerY + distance * Math.sin(point.angle)

                              return (
                                <motion.div
                                  key={`label-${i}`}
                                  className={`absolute text-xs font-medium transition-all duration-300 ${
                                    isHovered ? "text-primary scale-110" : "text-foreground"
                                  }`}
                                  style={{
                                    left: `${labelX}px`,
                                    top: `${labelY}px`,
                                    transform: `translate(-50%, -50%)`,
                                  }}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                                >
                                  {point.skill.name}
                                </motion.div>
                              )
                            })}

                            {/* Center point */}
                            <motion.div
                              className="absolute w-2 h-2 rounded-full"
                              style={{
                                left: `${centerX - 1}px`,
                                top: `${centerY - 1}px`,
                                backgroundColor: activeCategoryData.color,
                              }}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5, duration: 0.3 }}
                            />
                          </>
                        )
                      })()}
                    </div>
                  </div>

                  {/* Skill details */}
                  <div className="space-y-6">
                    {activeCategoryData.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className={`group transition-all duration-300 ${
                          hoveredSkill === skill.name ? "scale-105" : ""
                        }`}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4
                            className={`text-lg font-medium transition-colors duration-300 ${
                              hoveredSkill === skill.name ? "text-primary" : ""
                            }`}
                          >
                            {skill.name}
                          </h4>
                          <div className="text-sm font-medium" style={{ color: activeCategoryData.color }}>
                            {skill.level}%
                          </div>
                        </div>

                        <div className="h-2 w-full bg-muted/30 rounded-full overflow-hidden mb-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: activeCategoryData.color }}
                          />
                        </div>

                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to action */}
        {!activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground mb-4">Select a skill category to explore my expertise in detail</p>
            <Button variant="outline" className="group">
              <span>Explore Skills</span>
              <Plus className="ml-2 h-4 w-4 transition-transform group-hover:rotate-90" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

