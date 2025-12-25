"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPInit() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  return null;
}
