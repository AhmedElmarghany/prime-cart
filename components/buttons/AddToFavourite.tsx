"use client"
import { Product } from '@/sanity.types';
import useStore from '@/store';
import { RiHeartFill, RiHeartLine } from '@remixicon/react';
import React from 'react'
import { toast } from 'sonner';

const AddToFavourite = ({product}: {product: Product}) => {
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
                ? "Product removed successfully!"
                : "Product added successfully!"
        );
    };

    return (
        <div
            onClick={handleFavorite}
            className={`p-2 rounded-full hover:text-foreground hoverEffect border ${isFavorite? "border-[#FF2C2C]":"border-border"} group/heart hover:border-primary cursor-pointer`}
        >
            {isFavorite ?
                <RiHeartFill size={18} className="text-[#FF2C2C] group-hover/heart:text-primary" />
                :
                <RiHeartLine size={18} className="text-foreground group-hover/heart:text-primary" />
            }
        </div>
    )
}

export default AddToFavourite