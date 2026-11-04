"use client";

import { useMemo, useState } from "react";
import siteConfig from "@/Config/SiteConfig";
import OrderContext from "@/Context/OrderContext";
import clampQuantity from "@/Lib/Order/ClampQuantity";
import type { ChildrenProps } from "@/Types/UiProps";

// Only the shared choices live here. Sections pass through as children and don't re-render.
const OrderProvider = ({ children }: ChildrenProps) => {
  const [sizeId, setSizeId] = useState(siteConfig.sizes[0].id);
  const [quantity, setRawQuantity] = useState<number>(siteConfig.quantity.initial);
  const [deliveryId, setDeliveryId] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      sizeId,
      quantity,
      deliveryId,
      setSizeId,
      setDeliveryId,
      setQuantity: (next: number) => setRawQuantity(clampQuantity(next)),
    }),
    [sizeId, quantity, deliveryId],
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};

export default OrderProvider;
