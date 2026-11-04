import DeliveryField from "@/Components/Order/DeliveryField";
import QuantityField from "@/Components/Order/QuantityField";
import SizeField from "@/Components/Order/SizeField";
import TextField from "@/Components/Order/TextField";
import orderCopy from "@/Data/OrderCopy";
import orderFields from "@/Data/OrderFields";
import type { FormFieldsProps } from "@/Types/OrderProps";

const [nameField, phoneField, addressField, notesField] = orderFields;

// The optional note stays collapsed, so the required fields feel short.
const OrderFormFields = ({ errors }: FormFieldsProps) => (
  <div className="grid content-start gap-6 p-5 sm:p-8">
    <SizeField />
    <QuantityField />
    <TextField field={nameField} error={errors.name} />
    <TextField field={phoneField} error={errors.phone} />
    <TextField field={addressField} error={errors.address} />
    <DeliveryField error={errors.delivery} />
    <details className="note-field">
      <summary className="text-lg">{orderCopy.noteToggle}</summary>
      <div className="mt-4">
        <TextField field={notesField} />
      </div>
    </details>
  </div>
);

export default OrderFormFields;
