"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RiArrowGoBackLine } from "@remixicon/react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8  md:py-10">
      <div className="max-w-2xl w-full space-y-8">
        {/* 404 Number */}
        <div className="text-center">
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-black text-primary/50 tracking-tight">
            404
          </h1>
        </div>

        {/* Main Card */}
        <Card className="shadow-lg hoverEffect">
          <CardHeader className="text-center space-y-3">
            <div className="flex justify-center">
              {/* logo */}
              <h2 className="hidden md:block text-2xl text-primary font-black tracking-wider uppercase hoverEffect group font-sans">
                Prime {` `}
                <span className="font-bold hoverEffect lowercase">
                  Cart
                </span>
              </h2>
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-bold">
              Looking for something?
            </CardTitle>
            <CardDescription className="text-base sm:text-lg">
              We couldn&apos;t find the page you&apos;re looking for.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">
                The web address you entered is not a functioning page on our site.
                It might have been moved, deleted, or never existed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button asChild variant="default" className="w-full gap-2">
                <Link href="/">
                  Go to Homepage
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full gap-2">
                <Link href="/shop">
                  Browse Products
                </Link>
              </Button>
            </div>
            <div>

              <Button onClick={() => router.back()}
                variant="ghost" className="w-full gap-2 text-muted-foreground hover:text-foreground cursor-pointer">
                <RiArrowGoBackLine className="w-4 h-4" />
                Go Back to Previous Page
              </Button>
            </div>

          </CardContent>

        </Card>
      </div>
    </div>
  );
};

export default NotFoundPage;