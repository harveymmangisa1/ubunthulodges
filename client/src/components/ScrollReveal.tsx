import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, ReactNode, Children } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  distance?: number;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  distance = 50
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  const controls = useAnimation();

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: distance, opacity: 0 };
      case "right":
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getFinalPosition = () => {
    return { y: 0, x: 0, opacity: 1 };
  };

  useEffect(() => {
    if (isInView) {
      controls.start(getFinalPosition());
    } else if (!once) {
      controls.start(getInitialPosition());
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={controls}
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1], // Custom easing for luxury feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered reveal for multiple items
interface ScrollRevealStaggeredProps {
  children: ReactNode[];
  staggerDelay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  itemDelay?: number;
}

export function ScrollRevealStaggered({
  children,
  staggerDelay = 0.1,
  className = "",
  direction = "up",
  itemDelay = 0.2
}: ScrollRevealStaggeredProps) {
  return (
    <div className={className}>
      {Children.map(children, (child, index: number) => 
        child ? (
          <ScrollReveal
            key={index}
            direction={direction}
            delay={itemDelay + index * staggerDelay}
          >
            {child}
          </ScrollReveal>
        ) : null
      )}
    </div>
  );
}