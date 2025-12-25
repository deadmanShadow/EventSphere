// src/app/layout.tsx
import GSAPInit from "@/components/shared/GSAPInit";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import LogoutSuccessToast from "@/components/shared/LogoutSuccessToast";
import SmoothScroll from "@/components/shared/SmoothScroll";
import type { Metadata } from "next";
import { Lobster, Roboto_Slab } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";

export const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"], // regular and bold
  variable: "--font-body",
});
export const metadata: Metadata = {
  title: "EventSphere",
  description: "Simple and smart event management for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.variable} antialiased`}
        style={{ fontFamily: "var(--font-body), sans-serif" }}
        suppressHydrationWarning
      >
        <SmoothScroll />
        {children}
        <Toaster position="top-right" richColors />
        <GSAPInit />
        <Suspense fallback={null}>
          <LoginSuccessToast />
          <LogoutSuccessToast />
        </Suspense>
      </body>
    </html>
  );
}
