"use client";

import gsap from "gsap";
import { CalendarSearchIcon, HeadsetIcon, MegaphoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import img1 from "../../../assets/home/main.png";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      y: -20,              // move up
      duration: 2.5,
      ease: "power1.inOut",
      repeat: -1,          // infinite
      yoyo: true,          // up & down
    });
  }, []);

  return (
    <section className="relative bg-linear-to-r from-[#F7DADF] to-[#F4E4EA] overflow-hidden pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-14">
        
        {/* LEFT */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary font-primary">
            <CalendarSearchIcon />
            <p>
              Since, <span className="font-bold">2020</span>
            </p>
          </div>

          <h1 className="text-4xl lg:text-5xl leading-tight font-primary font-medium text-gray-900">
            EVENTS, MEETUPS & <br /> CONFERENCES

          </h1>

          <p className="text-gray-700 font-medium">Making Events Simpler</p>

          <div className="flex flex-wrap gap-6 text-gray-700 text-sm font-medium font-secondary pt-2">
            <div className="flex items-center gap-2">
              <HeadsetIcon />
              <span>
                <strong>500+</strong> Seats
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MegaphoneIcon />
              <span>
                <strong>50+</strong> Events
              </span>
            </div>
          </div>

          <div className="flex gap-4 pt-4 text-secondary">
            <Link href="/events">
              <button className="bg-primary text-white px-6 py-2 rounded shadow-lg hover:bg-primary/90">
                Book Now
              </button>
            </Link>

            <Link href="/events">
              <button className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary/10">
                View Details
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div ref={imageRef} className="relative flex justify-center">
          <Image
            src={img1}
            alt="main"
            width={600}
            height={600}
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
