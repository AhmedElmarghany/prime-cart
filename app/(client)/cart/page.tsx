"use client";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Address } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import useStore from "@/store";
import { useState } from "react";
import OrderSummaryContent from "@/components/cart/OrderSummaryContent";
import OrderSummaryContentMobile from "@/components/cart/OrderSummaryContentMobile";
import CartProductCard from "@/components/cart/CartProductCard";
import EmptyCart from "@/components/cart/EmptyCart";
import { ResetCartDialog } from "@/components/cart/ResetCartDialog";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton";
import { ADDRESSES_QUERY } from "@/sanity/queries/query";


const fetchAddresses = () => client.fetch(ADDRESSES_QUERY);

const CartPage = () => {
  const { getItemCount } = useStore();
  const groupedItems = useStore((state) => state.getGroupedItems());
  
  const { data: addresses, isLoading } = useSWR(
    "addresses",
    fetchAddresses
  );
  
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const defaultAddress =
  addresses?.find((addr: Address) => addr.default) ||
  addresses?.[0] ||
  null;

  const currentAddress = selectedAddress ?? defaultAddress;

  return (
    <div className="min-h-screen bg-muted/20 pb-36 md:pb-12">
      <Container>
        {groupedItems?.length ? (
          <>
            {/* Page header */}
            <div className="flex items-center justify-between py-6">
              <div className="mx-2">
                <h1 className="text-xl font-bold text-foreground">Shopping Cart</h1>
                <p className="text-xs text-muted-foreground">
                  {groupedItems.length} item{groupedItems.length !== 1 ? "s" : ""}
                </p>
              </div>
              <ResetCartDialog />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">

              {/* ── Cart items ── */}
              <div className="lg:col-span-2 space-y-3">
                {groupedItems?.map(({ product }, index: number) => {
                  const itemCount = getItemCount(product?._id);
                  return (
                    <CartProductCard product={product} itemCount={itemCount} key={index} />
                  );
                })}
              </div>

              {/* ── Right column ── */}
              <div className="space-y-4">

                {/* Order summary — desktop */}
                <OrderSummaryContent />
                {/* Delivery address */}
                <Card className="rounded-2xl border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-bold">Delivery Address</CardTitle>
                  </CardHeader>
                  {isLoading && (
                    <CardContent className="space-y-3">
                      <Skeleton className="w-full h-16 rounded-2xl" />
                      <Skeleton className="w-full h-16 rounded-2xl" />
                    </CardContent>
                  )}
                  {!isLoading && addresses && (
                    <CardContent className="space-y-3">
                      <RadioGroup
                        defaultValue={currentAddress?._id?.toString()}
                      >
                        {addresses.map((address: Address) => {
                          const active = currentAddress?._id === address._id;
                          return (
                            <div
                              key={address._id}
                              onClick={() => setSelectedAddress(address)}
                              className={`hoverEffect flex items-start gap-3 p-3 rounded-xl border cursor-pointer ${active
                                ? "border-primary/40 bg-primary/5"
                                : "border-border hover:border-primary/20 hover:bg-muted/30"
                                }`}
                            >
                              <RadioGroupItem value={address._id.toString()} className="mt-0.5" />
                              <Label className="cursor-pointer grid gap-0.5 flex-1">
                                <span className={`font-semibold text-sm ${active ? "text-primary" : "text-foreground"}`}>
                                  {address?.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {address.address}, {address.city}, {address.state} {address.zip}
                                </span>
                              </Label>
                            </div>
                          );
                        })}
                      </RadioGroup>
                      <Button variant="outline" className="w-full text-sm mt-1 cursor-pointer">
                        + Add New Address
                      </Button>
                    </CardContent>
                  )}
                </Card>
              </div>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </Container>

      {/* ── Mobile sticky order summary ── */}
      {groupedItems?.length > 0 && (
        <OrderSummaryContentMobile />
      )}
    </div>
  );
};

export default CartPage;
