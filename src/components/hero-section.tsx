"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowDown, ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed"
  })

  // Text animation variants
  const titleWords = "Creating digital experiences that matter".split(" ")

  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const wordAnimation = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const buttonContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.2,
      },
    },
  }

  const buttonAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const socialContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.5,
      },
    },
  }

  const socialAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
  }

  return (
    <section ref={targetRef} className="relative min-h-screen flex flex-col justify-center pt-16 md:pt-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 to-background opacity-50"></div>

      <motion.div
        style={{ opacity, scale, position }}
        className="w-full top-0 left-0 h-screen flex flex-col justify-center"
      >
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <motion.div initial="hidden" animate="visible" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
                >
                  Full Stack Developer
                </motion.div>

                <motion.h1
                  variants={titleContainer}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                >
                  {titleWords.map((word, i) => (
                    <motion.span
                      key={i}
                      variants={wordAnimation}
                      className="inline-block mr-2 relative"
                      whileHover={
                        word === "digital" || word === "experiences"
                          ? {
                              color: word === "digital" ? "#e9c46a" : "#2a9d8f",
                              scale: 1.05,
                              transition: { duration: 0.2 },
                            }
                          : {}
                      }
                    >
                      {word === "experiences" && (
                        <motion.span
                          className="absolute -bottom-1 left-0 w-full h-1 bg-primary"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                        />
                      )}
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="text-lg text-muted-foreground max-w-md"
                >
                  I build accessible, user-friendly websites and applications that solve real problems.
                </motion.p>

                <motion.div
                  variants={buttonContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-4"
                >
                  <motion.div variants={buttonAnimation}>
                    <Button asChild>
                      <Link href="#projects">
                        <motion.span
                          className="flex items-center"
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          View Projects
                          <motion.span
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.span>
                        </motion.span>
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div variants={buttonAnimation}>
                    <Button variant="outline" asChild>
                      <Link href="#contact">Contact Me</Link>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={socialContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-4 pt-4"
                >
                  <motion.div variants={socialAnimation}>
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div variants={socialAnimation}>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div variants={socialAnimation}>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-70 blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
                <div className="relative aspect-square w-48 md:w-64 lg:w-80 rounded-full overflow-hidden border-4 border-background mx-auto md:mx-0">
                  <Image
                    src="/images/bivek1.jpg"
                    alt="Bivek Karki"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <Link href="#about">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="cursor-pointer"
            >
              <ArrowDown className="h-8 w-8" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

