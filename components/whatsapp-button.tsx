"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

interface WhatsAppButtonProps {
  text?: string
  phoneNumber?: string
}

export default function WhatsAppButton({
  text = "Pedir por WhatsApp",
  phoneNumber = "5511999999999",
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de fazer um pedido.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="outline"
        size="lg"
        className="flex items-center gap-2 text-green-600 bg-white border-green-600 hover:bg-green-50"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MessageCircle size={20} className={`transition-transform duration-300 ${isHovered ? "rotate-12" : ""}`} />
        {text}
      </Button>
    </motion.div>
  )
}

