import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiStarFill, RiStarLine, RiVerifiedBadgeFill } from "@remixicon/react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    date: "March 12, 2025",
    rating: 5,
    verified: true,
    title: "Absolutely love it!",
    body: "Best purchase I've made this year. The build quality is exceptional and it arrived well-packaged. Sound quality blew me away for the price point — highly recommend to anyone on the fence.",
    avatar: "SM",
  },
  {
    id: 2,
    name: "James R.",
    date: "February 28, 2025",
    rating: 4,
    verified: true,
    title: "Great value for money",
    body: "Really solid product. Setup was effortless and performance is exactly as advertised. Docking one star because the carry case feels a bit flimsy, but the product itself is a 5/5.",
    avatar: "JR",
  },
  {
    id: 3,
    name: "Lena K.",
    date: "January 19, 2025",
    rating: 5,
    verified: false,
    title: "Exceeded my expectations",
    body: "I was skeptical at first given the price, but this completely changed my mind. Comfortable for long sessions, great battery life, and the sound profile is warm and detailed. Will buy again.",
    avatar: "LK",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <RiStarFill key={i} size={14} className="text-primary" />
        ) : (
          <RiStarLine key={i} size={14} className="text-muted-foreground/40" />
        )
      )}
    </div>
  );
}

export function ProductDetails() {
  const avgRating = reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;

  return (
    <Tabs defaultValue="description" className="w-full my-8">
      <TabsList className="w-full sm:w-auto">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="information">Additional Info</TabsTrigger>
        <TabsTrigger value="reviews">
          Reviews
          <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary/15 text-primary text-[10px] font-bold">
            {reviews.length}
          </span>
        </TabsTrigger>
      </TabsList>

      {/* Description */}
      <TabsContent value="description">
        <Card className="ring-0 border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Description</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-4">
            <p>
              In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.
            </p>
            <p>
              Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.
            </p>
            <p>
              Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Additional Information */}
      <TabsContent value="information">
        <Card className="ring-0 border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-border overflow-hidden text-sm">
              {[
                { label: "Weight", value: "190 kg" },
                { label: "Dimensions", value: "3 × 72 × 109 cm" },
                { label: "Material", value: "Premium ABS + Aluminum" },
                { label: "Warranty", value: "12 months" },
                { label: "Country of Origin", value: "Japan" },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-4 py-3 ${
                    i % 2 === 0 ? "bg-muted/30" : "bg-background"
                  } ${i !== arr.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="font-medium text-foreground">{row.label}</span>
                  <span className="text-muted-foreground">{row.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Reviews */}
      <TabsContent value="reviews">
        <Card className="ring-0 border-border">
          <CardHeader className="pb-4 border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Summary */}
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-foreground leading-none">
                    {avgRating.toFixed(1)}
                  </p>
                  <StarRating rating={Math.round(avgRating)} />
                  <p className="text-xs text-muted-foreground mt-1">{reviews.length} reviews</p>
                </div>
                {/* Rating bars */}
                <div className="flex flex-col gap-1 flex-1 min-w-28">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = reviews.filter((r) => r.rating === star).length;
                    const pct = Math.round((count / reviews.length) * 100);
                    return (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-2">{star}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground w-6 text-right">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-5 space-y-5">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex gap-3 sm:gap-4 pb-5 border-b border-border last:border-0 last:pb-0"
              >
                {/* Avatar */}
                <div className="shrink-0 w-9 h-9 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{review.avatar}</span>
                </div>

                <div className="flex-1 min-w-0 space-y-1.5">
                  {/* Header row */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-sm font-semibold text-foreground">{review.name}</span>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-primary font-medium">
                        <RiVerifiedBadgeFill size={12} />
                        Verified
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground ml-auto">{review.date}</span>
                  </div>

                  <StarRating rating={review.rating} />

                  <p className="text-sm font-medium text-foreground">{review.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.body}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}