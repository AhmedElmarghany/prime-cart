import { RiShoppingBag3Line as ShoppingBag, RiHeartFill as Heart } from "@remixicon/react"
import Container from "../common/Container"
import { Button } from "../ui/button"
import Link from "next/link"


const EmptyWishlist = () => {
    return (
        <Container>
            <div className="flex min-h-120 flex-col items-center justify-center gap-6 text-center py-16">
                {/* Icon */}
                <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Heart className="w-9 h-9 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary/20 animate-ping" />
                </div>

                <div className="space-y-2 max-w-xs">
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">
                        Your wishlist is empty
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Save items you love and find them here whenever you&apos;re ready.
                    </p>
                </div>

                <Button asChild className="rounded-full px-6">
                    <Link href="/shop">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Continue Shopping
                    </Link>
                </Button>
            </div>
        </Container>
    )
}

export default EmptyWishlist