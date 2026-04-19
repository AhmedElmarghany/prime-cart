"use client"

import { Product } from '@/sanity.types';
import useStore from '@/store';
import { RiHeartFill, RiHeartLine } from '@remixicon/react';
import React from 'react'
import { toast } from 'sonner';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const AddToFavourite = ({ product }: { product: Product }) => {
    const { favoriteProducts, toggleFavorite } = useStore();

    const isFavorite = favoriteProducts?.some(
        (item) => item?._id === product?._id
    );

    const handleFavorite = async (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        e.preventDefault();

        if (!product?._id) return;

        await toggleFavorite(product);

        toast.success(
            isFavorite
                ? `${product?.name?.substring(0, 12)} removed successfully!`
                : `${product?.name?.substring(0, 12)} added successfully!`
        );
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div
                        onClick={handleFavorite}
                        className={`p-2 rounded-full hoverEffect bg-input/30 border ${isFavorite? "border-[#FF2C2C]":"border-border"} hover:border-[#FF2C2C] group/heart hover:bg-[#FF2C2C]/20 cursor-pointer`}
                    >
                        {isFavorite ?
                            <RiHeartFill size={18} className="w-4 h-4 text-[#FF2C2C] group-hover/heart:text-[#FF2C2C]" />
                            :
                            <RiHeartLine size={18} className="w-4 h-4 text-foreground group-hover/heart:text-[#FF2C2C]" />
                        }
                    </div>
                </TooltipTrigger>
                <TooltipContent
                    className="font-semibold bg-foreground text-background">
                    Add to Wishlist
                </TooltipContent>

            </Tooltip>
        </TooltipProvider>
    )
}

export default AddToFavourite