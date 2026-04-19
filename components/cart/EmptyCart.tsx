"use client";

import { RiShoppingBag3Line as ShoppingBag } from "@remixicon/react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EmptyCart() {
  return (
    <div className="flex items-center justify-center py-16 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 max-w-sm w-full text-center"
      >
        {/* Animated illustration */}
        <div className="relative">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="relative w-44 h-44"
          >
            <Image
              src="/images/emptyCart.png"
              alt="Empty cart"
              fill
              className="object-contain drop-shadow-md"
            />
          </motion.div>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Your cart is empty</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Looks like you haven&apos;t added anything yet. Explore our store and find something you&apos;ll love.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="hoverEffect inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 shadow-sm"
        >
          <ShoppingBag size={15} />
          Discover Products
        </Link>

        <Link
          href="/shop"
          className="hoverEffect text-xs text-muted-foreground hover:text-primary underline underline-offset-2"
        >
          Browse the shop
        </Link>
      </motion.div>
    </div>
  );
}
