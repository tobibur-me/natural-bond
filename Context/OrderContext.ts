import { createContext } from "react";
import type { OrderContextValue } from "@/Types/Order";

const OrderContext = createContext<OrderContextValue | null>(null);

export default OrderContext;
