import PriceFormatter from '../product/PriceFormatter'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import useStore from '@/store';

const OrderSummaryContent = () => {

  const { getTotalPrice, getSubTotalPrice } = useStore();
  const discount = getSubTotalPrice() - getTotalPrice();

  return (
    <div className="hidden md:block rounded-2xl border border-border bg-card p-6">
      <h2 className="text-base font-bold text-foreground mb-4">Order Summary</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <PriceFormatter amount={getSubTotalPrice()} />
        </div>
        {discount > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Discount</span>
            <span className="text-green-600 font-medium">
              − <PriceFormatter amount={discount} />
            </span>
          </div>
        )}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-green-600 font-medium text-xs">Free</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between font-bold text-base">
          <span>Total</span>
          <PriceFormatter amount={getTotalPrice()} className="text-base font-bold" />
        </div>
        <Button
          className="w-full font-semibold tracking-wide hoverEffect mt-1 cursor-pointer"
          size="lg"
          // disabled={loading}
          // onClick={handleCheckout}
        >
          {/* {loading ? "Please wait…" : "Proceed to Checkout"} */}
          Proceed to Checkout
        </Button>
      </div>
    </div>


  )
}

export default OrderSummaryContent