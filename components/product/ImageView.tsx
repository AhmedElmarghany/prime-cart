"use client";

import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  isStock?: number | undefined;
}

const ImageView = ({ images = [], isStock }: Props) => {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-3">

      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-muted aspect-square">
        {/* Out of stock overlay */}
        {isStock === 0 && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-sm rounded-2xl">
            <span className="px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-semibold border border-destructive/20">
              Out of Stock
            </span>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={active?._key}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Image
              src={urlFor(active).url()}
              alt="Product image"
              width={700}
              height={700}
              priority
              className={`w-full h-full object-contain p-6 transition-transform duration-500 hover:scale-105 ${
                isStock === 0 ? "opacity-40" : ""
              }`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto p-1 scrollbar-hide">
          {images.map((image) => {
            const isActive = active?._key === image?._key;
            return (
              <button
                key={image?._key}
                onClick={() => setActive(image)}
                className={`
                  relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border transition-all duration-200 cursor-pointer
                  ${isActive
                    ? "border-primary shadow-sm scale-105"
                    : "border-border opacity-60 hover:opacity-90 hover:border-primary/40"
                  }
                `}
              >
                <Image
                  src={urlFor(image).width(160).height(160).url()}
                  alt={`Product thumbnail ${image._key}`}
                  width={160}
                  height={160}
                  className="w-full h-full object-contain p-1.5 bg-muted"
                />
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ImageView;