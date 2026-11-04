"use client";

import OrderActions from "@/Components/Order/OrderActions";
import OrderFormFields from "@/Components/Order/OrderFormFields";
import OrderStatus from "@/Components/Order/OrderStatus";
import OrderSummary from "@/Components/Order/OrderSummary";
import useOrderForm from "@/Hooks/UseOrderForm";
import cx from "@/Lib/Cx";

// Text inputs are read on submit, so typing causes no re-renders on low-end phones.
const OrderForm = () => {
  const { errors, handleSubmit, handleChange, sentUrl } = useOrderForm();

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
      className={cx(
        "on-light grid overflow-clip rounded-card bg-paper text-ink shadow-lift",
        "lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]",
      )}
    >
      <OrderFormFields errors={errors} />
      <div className="bg-cream p-5 sm:p-8">
        <div className="grid gap-4 lg:sticky lg:top-24">
          <OrderSummary />
          <OrderActions />
          <OrderStatus url={sentUrl} />
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
