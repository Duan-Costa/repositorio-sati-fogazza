"use client";

import { useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimatedImageProps extends Omit<ImageProps, "onAnimationComplete"> {
  delay?: number;
}

export default function AnimatedImage({ delay = 0, ...props }: AnimatedImageProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  if (inView) {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={controls}
      className="relative w-full h-full"
    >
      <Image {...props} />
    </motion.div>
  );
}

