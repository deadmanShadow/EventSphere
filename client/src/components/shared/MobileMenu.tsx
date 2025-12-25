"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import UserDropdown from "../modules/Dashboard/UserDropdown";
import AnimatedHamburger from "./AnimatedHamburger";
import LogoutButton from "./LogoutButton";

interface MobileMenuProps {
  navItems: { href: string; label: string }[];
  userInfo: any;
  isUser: boolean;
  isHost: boolean;
}

const MobileMenu = ({ navItems, userInfo, isUser, isHost }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 } as const,
    },
  };

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="relative z-50">
            <AnimatedHamburger isOpen={isOpen} />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4 flex flex-col">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col space-y-4 mt-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isOpen ? "show" : "hidden"}
              className="flex flex-col space-y-4"
            >
              {navItems.map((link) => (
                <motion.div key={link.label} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium uppercase hover:text-primary transition-colors block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              {isUser && (
                <motion.div variants={itemVariants}>
                  <Link
                    href={"/dashboard/my-events"}
                    onClick={() => setIsOpen(false)}
                    className="text-lg uppercase font-semibold hover:text-primary transition-colors block"
                  >
                    My Events
                  </Link>
                </motion.div>
              )}
              
              {isHost && (
                <motion.div variants={itemVariants}>
                  <Link
                    href={"/host/dashboard/hosted-events"}
                    onClick={() => setIsOpen(false)}
                    className="text-lg uppercase font-semibold hover:text-primary transition-colors block"
                  >
                    My Events
                  </Link>
                </motion.div>
              )}

              <motion.div variants={itemVariants} className="border-t pt-6 mt-2 flex flex-col space-y-4">
                {userInfo ? (
                  <div className="flex flex-col gap-4">
                    <UserDropdown userInfo={userInfo} />
                    <LogoutButton />
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Login</Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">Register</Button>
                    </Link>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
