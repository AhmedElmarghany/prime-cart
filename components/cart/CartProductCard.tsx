import Image from 'next/image'
import Link from 'next/link'
import AddToFavourite from '../buttons/AddToFavourite'
import DeleteButton from '../buttons/DeleteButton'
import QuantityButtons from '../buttons/QuantityButtons'
import PriceFormatter from '../product/PriceFormatter'
import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'

const CartProductCard = ({ product, itemCount }: { product: Product, itemCount: number }) => {

    return (
        <div
            key={product?._id}
            className="flex gap-4 p-4 rounded-2xl border border-border bg-card hoverEffect hover:border-primary/20 hover:shadow-sm"
        >
            {/* Image */}
            {product?.images && (
                <Link
                    href={`/product/${product?.slug?.current}`}
                    className="shrink-0 rounded-xl overflow-hidden border border-border bg-muted/30 group"
                >
                    <Image
                        src={urlFor(product.images[0]).url()}
                        alt={product?.name ?? "product"}
                        width={300}
                        height={300}
                        loading="lazy"
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain p-2 group-hover:scale-105 hoverEffect"
                    />
                </Link>
            )}

            {/* Info */}
            <div className="flex flex-1 flex-col justify-between min-w-0 gap-2">
                <div className="space-y-0.5">
                    <h2 className="text-sm font-semibold text-foreground line-clamp-1">
                        {product?.name}
                    </h2>
                    <p className="text-xs text-muted-foreground capitalize">
                        Variant:{" "}
                        <span className="font-medium text-foreground">{product?.variant}</span>
                    </p>
                    <p className="text-xs text-muted-foreground capitalize">
                        Status:{" "}
                        <span
                            className={`font-medium ${product?.status === "sale"
                                ? "text-green-600"
                                : "text-foreground"
                                }`}
                        >
                            {product?.status}
                        </span>
                    </p>
                </div>

                {/* Actions row */}
                    <div className="flex items-center gap-2">
                        <AddToFavourite product={product} />
                        <DeleteButton product={product} />
                    </div>
            </div>

            {/* Price */}
            <div className="flex flex-col justify-between shrink-0 text-right">
                <PriceFormatter
                    amount={(product?.price as number) * itemCount}
                    className="font-bold text-base text-foreground"
                />
                    <QuantityButtons product={product} />

            </div>
        </div>

    )
}

export default CartProductCard