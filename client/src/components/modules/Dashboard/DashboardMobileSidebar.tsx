"use client";

import Logo from "@/assets/logo/logo";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { SheetTitle } from "@/components/ui/sheet";
import { getIconComponent } from "@/lib/icon-mapper";
import { cn } from "@/lib/utils";
import { NavSection } from "@/types/dashboard.interface";
import { UserInfo } from "@/types/user.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

interface DashboardMobileSidebarContentProps {
  userInfo: UserInfo;
  navItems: NavSection[];
  dashboardHome: string;
  isOpen?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 } as const,
  },
};

const DashboardMobileSidebar = ({
  userInfo,
  navItems,
  isOpen,
}: DashboardMobileSidebarContentProps) => {
  const pathname = usePathname();
  return (
    <div className=" flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 border-b px-6">
        <Link href="/" className="flex items-center">
          <Logo />
          <span className="text-xl font-primary font-medium text-primary">
            EventSphere
          </span>
        </Link>
      </div>
      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className="space-y-1"
        >
          {navItems.map((section, sectionIdx) => (
            <motion.div key={sectionIdx} variants={itemVariants}>
              {section.title && (
                <h4 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase">
                  {section.title}
                </h4>
              )}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = getIconComponent(item.icon);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <Badge variant={isActive ? "secondary" : "default"}>
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  );
                })}
              </div>
              {sectionIdx < navItems.length - 1 && (
                <Separator className="my-4" />
              )}
            </motion.div>
          ))}
        </motion.nav>
      </ScrollArea>

      {/* User Info at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.3 }}
        className="border-t p-4"
      >
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">
              {userInfo.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">{userInfo.name}</p>
            <p className="text-xs text-muted-foreground capitalize">
              {userInfo.role.toLowerCase()}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardMobileSidebar;
