import siteConfig from "@/Config/SiteConfig";
import orderCopy from "@/Data/OrderCopy";
import useOrder from "@/Hooks/UseOrder";

const SizeField = () => {
  const { sizeId, setSizeId } = useOrder();

  return (
    <fieldset>
      <legend className="text-lg text-forest">{orderCopy.sizeLegend}</legend>
      <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
        {siteConfig.sizes.map((size) => (
          <label key={size.id} className="relative block">
            <input
              type="radio"
              name="size"
              value={size.id}
              checked={size.id === sizeId}
              onChange={() => setSizeId(size.id)}
              className="sr-only"
            />
            <span className="size-pill">{size.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default SizeField;
