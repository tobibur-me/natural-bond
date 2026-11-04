import { useContext } from "react";
import OrderContext from "@/Context/OrderContext";

const useOrder = () => {
  const value = useContext(OrderContext);
  if (!value) throw new Error("useOrder must be used inside OrderProvider");

  return value;
};

export default useOrder;
