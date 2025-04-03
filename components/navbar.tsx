"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Cardápio", href: "#menu" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Localização", href: "#localizacao" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center">
          <div className="relative w-32 h-16">
            <Image src="/images/logo.png" alt="Fogazza Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`font-medium transition-colors hover:text-orange-500 ${
                    scrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Button className="bg-orange-500 hover:bg-orange-600">Pedir Online</Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="p-2 md:hidden" onClick={toggleMenu} aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
          {isOpen ? (
            <X className={scrolled ? "text-gray-800" : "text-white"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-gray-800" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <nav className="container px-4 py-4 mx-auto">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block py-2 text-lg font-medium text-gray-800 transition-colors hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Pedir Online</Button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

