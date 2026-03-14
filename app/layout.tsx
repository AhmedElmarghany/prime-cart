import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";


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
      // <html lang="en">
      <html lang="en" className={cn("font-sans ", figtree.variable)}>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
