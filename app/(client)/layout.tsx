import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from '@clerk/ui/themes';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip";


export const metadata: Metadata = {
  title: "Prime Cart",
  description: "Your one stop shop for all you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        theme: shadcn,
        options: {
          logoImageUrl: "/LogoIcon.svg",
        },
      }}
    >
      <body
        className="flex flex-col min-h-screen antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </ClerkProvider>
  );
}
