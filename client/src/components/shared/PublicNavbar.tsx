
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getCookie } from "@/services/auth/tokenHandlers";
import Link from "next/link";
import Logo from "../../assets/logo/logo";
import UserDropdown from "../modules/Dashboard/UserDropdown";
import { Button } from "../ui/button";
import AnimatedSection from "./AnimatedSection";
import LogoutButton from "./LogoutButton";
import MobileMenu from "./MobileMenu";


const PublicNavbar = async () => {
  const navItems = [
    { href: "/events", label: "Explore Events" },
    { href: "/become-host", label: "Become a Host" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const accessToken = await getCookie("accessToken");
  const userInfo = accessToken ? await getUserInfo() : null;
  const isUser = userInfo?.role === "USER";
  const isHost = userInfo?.role === "HOST";

  return (
    <AnimatedSection direction="down" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  dark:bg-background/95">
    <header className="w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Logo />
          <p className="text-xl font-medium text-primary font-primary">
            EventSphere
          </p>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium font-secondary">
          {isUser && (
            <Link
              href={"/dashboard/my-events"}
              className="text-black uppercase hover:text-primary transition-colors"
            >
              My Events
            </Link>
          )}
          {isHost && (
            <Link
              href={"/host/dashboard/hosted-events"}
              className="text-black uppercase hover:text-primary transition-colors"
            >
              My Events
            </Link>
          )}
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-black uppercase hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          {userInfo ? (
            <div className="flex items-center gap-2">
              <UserDropdown userInfo={userInfo} />

              <LogoutButton />
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>

        <MobileMenu
          navItems={navItems}
          userInfo={userInfo}
          isUser={isUser}
          isHost={isHost}
        />
      </div>
    </header>
    </AnimatedSection>
  );
};

export default PublicNavbar;
