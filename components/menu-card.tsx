"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface MenuCardProps {
  title: string
  description: string
  price: string
  imageSrc: string
  imagePosition?: string
}

export default function MenuCard({
  title,
  description,
  price,
  imageSrc,
  imagePosition = "center center",
}: MenuCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="overflow-hidden bg-white rounded-lg shadow-lg"
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out"
            style={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              objectPosition: imagePosition,
            }}
          />
        </div>
        <div className="absolute top-0 right-0 px-3 py-1 m-2 text-sm font-bold text-white bg-orange-500 rounded-full">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-orange-800">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <Button className="w-full bg-orange-500 hover:bg-orange-600">Pedir Agora</Button>
      </div>
    </motion.div>
  )
}

