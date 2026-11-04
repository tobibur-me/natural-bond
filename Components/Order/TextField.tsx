import type { TextFieldProps } from "@/Types/OrderProps";

const TextField = ({ field, error }: TextFieldProps) => {
  const id = `order-${field.name}`;
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: field.name,
    placeholder: field.placeholder,
    autoComplete: field.autoComplete,
    maxLength: field.maxLength,
    required: field.required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: "field-control",
  };

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-lg text-forest">
        {field.label}
      </label>
      {field.multiline ? (
        <textarea rows={3} {...shared} />
      ) : (
        <input type={field.inputMode === "tel" ? "tel" : "text"} inputMode={field.inputMode} {...shared} />
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-base text-error">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;
