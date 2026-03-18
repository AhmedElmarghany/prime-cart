"use client"
import { RiHeadphoneLine as Headset, RiArrowLeftBoxLine as ReturnArrow, RiShieldCheckLine as Guarantee, RiTruckLine as Truck } from "@remixicon/react";

const extraData = [
    {
        title: "Free Delivery",
        description: "Free shipping over $100",
        icon: <Truck size={45} className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />,
    },
    {
        title: "Free Return",
        description: "Free Return over $100",
        icon: <ReturnArrow size={45} className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />,
    },
    {
        title: "Customer Support",
        description: "Friendly 27/7 customer support",
        icon: <Headset size={45} className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />,
    },
    {
        title: "Money Back guarantee",
        description: "Quality checked by our team",
        icon: <Guarantee size={45} className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />,
    },
];

const CustomerServices = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {extraData?.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-3 group p-4 transition-colors hoverEffect"
                >
                    <span className="inline-flex scale-100 group-hover:text-primary group-hover:scale-125 hoverEffect">
                        {item?.icon}
                    </span>
                    <div>
                        <h3 className="text-foreground font-semibold group-hover:text-popover-foreground hoverEffect">
                            {item?.title}
                        </h3>
                        <p className="text-secondary-foreground text-sm mt-1 group-hover:text-popover-foreground hoverEffect">
                            {item?.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomerServices;
