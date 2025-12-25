"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserInfo } from "@/types/user.interface";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LayoutDashboardIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface UserDropdownProps {
  userInfo: UserInfo;
}

const UserDropdown = ({ userInfo }: UserDropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        gsap.from(containerRef.current, {
          y: -10,
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full p-0 border-2 border-primary/20 hover:border-primary/50 transition-colors overflow-hidden"
        >
          {userInfo.image ? (
            <Image
              src={userInfo.image}
              alt={userInfo.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              {userInfo.name.charAt(0).toUpperCase()}
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-2 overflow-hidden">
        <div ref={containerRef}>
          <DropdownMenuLabel className="flex items-center gap-3 p-2">
          <div>
            {userInfo.image ? (
              <Image src={userInfo.image} alt={userInfo.name} width={40} height={40} className="rounded-full border"/>
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold border">
                {userInfo.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{userInfo.name}</p>
            <p className="text-xs text-muted-foreground">{userInfo.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
         <DropdownMenuItem asChild>
          <Link href={"/dashboard"} className="cursor-pointer">
            <LayoutDashboardIcon className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/my-profile"} className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;