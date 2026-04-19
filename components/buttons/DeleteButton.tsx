"use client"
import { Product } from '@/sanity.types';
import useStore from '@/store';
import { RiDeleteBin6Line } from '@remixicon/react';
import { toast } from 'sonner';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const DeleteButton = ({ product }: { product: Product }) => {
    const { deleteCartProduct } = useStore();

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        onClick={() => {
                            deleteCartProduct(product?._id);
                            toast.success(`${product?.name?.substring(0, 12)} removed!`);
                        }}
                        className={`p-2 rounded-full hoverEffect bg-input/30 border border-border hover:border-destructive group/delete hover:bg-destructive/20 cursor-pointer`}
                    >
                        <RiDeleteBin6Line className="w-4 h-4 text-foreground group-hover/delete:text-destructive" />
                    </button>
                </TooltipTrigger>
                <TooltipContent
                    className="font-semibold bg-foreground text-background">
                    Remove from cart
                </TooltipContent>

            </Tooltip>
        </TooltipProvider>
    )
}

export default DeleteButton;