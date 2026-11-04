import QuantityStepper from "@/Components/Ui/QuantityStepper";
import orderCopy from "@/Data/OrderCopy";

const QuantityField = () => (
  <div>
    <p className="mb-3 text-lg text-forest">{orderCopy.quantityLabel}</p>
    <QuantityStepper label={orderCopy.quantityLabel} />
  </div>
);

export default QuantityField;
