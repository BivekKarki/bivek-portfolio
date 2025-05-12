"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const services = [
    "Responsive and modern website design",
    "Frontend and backend development",
    "Performance optimization and SEOI/UX Design",
    "UI Implementation (based on provided designs)",
    "Landing Pages & Marketing Sites",
    "API Development and Integration",
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/10">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
            ></motion.div>
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
            ></motion.div>
            <motion.div
              variants={itemVariants}
              className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-xl"
            >
              <Image
                src="/images/bivek.jpg?height=600&width=480"
                alt="Bivek Karki Working"
                className="object-cover"
                fill
              />
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-2">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Passionate about creating <span className="text-primary">impactful</span> digital solutions
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              With close to a year of experience in web development, I specialize in building modern,
              responsive, and user-friendly applications. My approach combines technical expertise with creative
              problem-solving to deliver solutions that exceed expectations.
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              I&apos;m passionate about staying current with emerging technologies and best practices, ensuring that my work
              is always innovative, efficient, and future-proof.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="text-xl font-semibold mb-4">What I Offer</h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <motion.div key={service} variants={itemVariants} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span>{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-lg bg-background shadow-sm">
                  <h4 className="text-3xl font-bold text-primary">1 +</h4>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="p-4 rounded-lg bg-background shadow-sm">
                  <h4 className="text-3xl font-bold text-primary">5 +</h4>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                {/* <div className="p-4 rounded-lg bg-background shadow-sm">
                  <h4 className="text-3xl font-bold text-primary">30+</h4>
                  <p className="text-sm text-muted-foreground">Clients</p>
                </div> */}
                <div className="p-4 rounded-lg bg-background shadow-sm">
                  <h4 className="text-3xl font-bold text-primary">10 +</h4>
                  <p className="text-sm text-muted-foreground">Technologies</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

