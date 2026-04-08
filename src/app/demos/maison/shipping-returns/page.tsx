"use client";

import { LegalPage } from "../_legal";

export default function MaisonShippingReturnsPage() {
  return (
    <LegalPage
      eyebrow="Shipping & Returns"
      title="Shipping & returns."
      sections={[
        {
          title: "Shipping",
          body: [
            "Free shipping within Europe on orders over €200. Below that, a flat rate of €15.",
            "Orders ship within 24 hours of being placed (Mon–Fri). Europe: 3–5 business days. Rest of world: 7–10 business days.",
            "We only work with carbon-offset carriers. Sea freight is prioritised where possible.",
          ],
        },
        {
          title: "Returns policy",
          body: [
            "You have 30 days from delivery to return any unworn item in its original condition, with tags attached and in original packaging.",
            "Return shipping is free within Europe via our prepaid label. Returns from outside Europe are at the customer's cost.",
            "Refunds are issued to the original payment method within 10 working days of the returned item arriving at our warehouse.",
          ],
        },
        {
          title: "How to return",
          body: [
            "1. Log in to your account or email returns@maisonnoir.ch with your order number.",
            "2. We send you a prepaid return label (Europe) or return instructions.",
            "3. Drop your parcel at any post office.",
            "4. We confirm receipt and process the refund within 10 working days.",
          ],
        },
        {
          title: "Repairs",
          body: [
            "Every Maison Noir piece comes with a lifetime repair guarantee. Send us the item to our Geneva atelier and we'll repair it, free of charge, for as long as you own it. Shipping is at your cost.",
          ],
        },
        {
          title: "Second Life",
          body: [
            "Return a Maison Noir piece you no longer want and receive 20% credit on your next order. We either repair it and sell it secondhand or recycle the fibres.",
          ],
        },
      ]}
    />
  );
}
