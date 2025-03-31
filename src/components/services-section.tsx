"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, Code, Smartphone, Palette, BarChart, Globe, Database } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("development")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const tabs = [
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "marketing", label: "Marketing" },
  ]

  const services = {
    design: [
      {
        icon: <Palette className="h-8 w-8" />,
        title: "UI/UX Design",
        description:
          "Creating intuitive, user-friendly interfaces that engage users and provide seamless experiences across all devices and platforms.",
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: "Web Design",
        description:
          "Designing modern, responsive websites that reflect your brand identity and engage visitors with compelling visuals and content.",
      },
      {
        icon: <Smartphone className="h-8 w-8" />,
        title: "Mobile Design",
        description:
          "Crafting beautiful, functional mobile app interfaces that provide intuitive navigation and exceptional user experiences.",
      },
    ],
    development: [
      {
        icon: <Code className="h-8 w-8" />,
        title: "Web Development",
        description:
          "Building fast, responsive, and scalable web applications using modern frameworks and best practices for optimal performance.",
      },
      {
        icon: <Smartphone className="h-8 w-8" />,
        title: "App Development",
        description:
          "Developing cross-platform mobile applications that deliver native-like experiences with efficient code and seamless functionality.",
      },
      {
        icon: <Database className="h-8 w-8" />,
        title: "Software Development",
        description:
          "Creating custom software solutions tailored to your specific business needs with scalable architecture and robust features.",
      },
    ],
    marketing: [
      {
        icon: <BarChart className="h-8 w-8" />,
        title: "SEO Optimization",
        description:
          "Improving your website&apos;s visibility in search engines with data-driven strategies that increase organic traffic and conversions.",
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: "Content Marketing",
        description:
          "Developing engaging content strategies that build brand awareness, establish authority, and drive meaningful engagement.",
      },
      {
        icon: <Database className="h-8 w-8" />,
        title: "Analytics & Reporting",
        description:
          "Providing detailed insights into your digital performance with custom dashboards and actionable recommendations.",
      },
    ],
  }

  // Animation variants
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

  const tabVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } },
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-background/95">
      {/* Background elements */}
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
      </div>

      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-2">Services</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Popular Services</h2>
          </motion.div>
          <motion.p variants={itemVariants} className="text-muted-foreground">
            I offer a comprehensive range of digital services to help businesses establish a strong online presence and
            achieve their goals through innovative solutions.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex rounded-full p-1 bg-muted/30 backdrop-blur-sm">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                variants={tabVariants}
                animate={activeTab === tab.id ? "active" : "inactive"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {services[activeTab as keyof typeof services].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 },
                }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 flex flex-col h-full hover:border-primary/50 transition-colors duration-300 group"
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + index * 0.1,
                    }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-center mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-muted-foreground text-center mb-6 flex-grow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-primary font-medium group-hover:underline"
                  >
                    LEARN MORE
                    <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

