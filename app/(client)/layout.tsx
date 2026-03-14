import type { Metadata } from "next";
import "../globals.css";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from '@clerk/ui/themes';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";



const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

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
      <html lang="en" className={cn("font-sans ", figtree.variable)}>
        <body
          // className={`antialiased`}
          className="flex flex-col min-h-screen antialiased"
          >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
