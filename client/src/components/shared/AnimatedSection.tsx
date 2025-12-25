"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const comp = useRef(null);

  useGSAP(
    () => {
      let x = 0;
      let y = 0;

      switch (direction) {
        case "up":
          y = 50;
          break;
        case "down":
          y = -50;
          break;
        case "left":
          x = 50;
          break;
        case "right":
          x = -50;
          break;
        default:
          break;
      }

      gsap.fromTo(
        comp.current,
        {
          opacity: 0,
          x,
          y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: comp.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: comp }
  );

  return (
    <div ref={comp} className={cn(className)}>
      {children}
    </div>
  );
}
