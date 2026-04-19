import PriceFormatter from '../product/PriceFormatter'
import { Button } from '../ui/button'
import useStore from '@/store';

const OrderSummaryContentMobile = () => {

  const { getTotalPrice, getSubTotalPrice } = useStore();
  const discount = getSubTotalPrice() - getTotalPrice();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-sm border-t border-border px-4 py-4 shadow-lg">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <PriceFormatter amount={getSubTotalPrice()} />
        </div>
        {discount > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Discount</span>
            <span className="text-green-600 font-medium">−<PriceFormatter amount={discount} /></span>
          </div>
        )}
        <div className="flex items-center justify-between font-bold text-base pt-1 border-t border-border">
          <span>Total</span>
          <PriceFormatter amount={getTotalPrice()} className="font-bold" />
        </div>
        <Button
          className="w-full rounded-full font-semibold tracking-wide hoverEffect"
          size="lg"
          // disabled={loading}
          // onClick={handleCheckout}
        >
          Proceed to Checkout
          {/* {loading ? "Please wait…" : "Proceed to Checkout"} */}
        </Button>
      </div>
    </div>

  )
}

export default OrderSummaryContentMobile