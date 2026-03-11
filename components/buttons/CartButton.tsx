"use client";

import { RiShoppingBag3Line } from "@remixicon/react";

import Link from "next/link";

const CartButton = () => {
  const items = 3;
  return (
    <Link href={"/cart"} className="group relative">
      <RiShoppingBag3Line className="w-5 h-5 hover:text-primary hoverEffect" />
      {items?
      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground h-4 w-4 rounded-full text-xs font-semibold leading-2 flex items-center justify-center">
        {/* Add Logic here */}
        {items}
      </span>
      :
      null
      }
    </Link>
  );
};

export default CartButton;
