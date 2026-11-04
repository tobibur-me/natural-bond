import siteConfig from "@/Config/SiteConfig";
import seoCopy from "@/Data/SeoCopy";

// Only verified details. No ratings or reviews, and no offers until a real price exists.
const buildProductSchema = () => {
  const { brand, sizes, heroBottle } = siteConfig;
  const priced = sizes.filter((size) => size.price !== null);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${brand.name} ${brand.product}`,
    description: seoCopy.description,
    brand: { "@type": "Brand", name: brand.name },
    image: new URL(encodeURI(heroBottle.src), brand.url).href,
    url: brand.url,
    ...(priced.length > 0 && {
      offers: priced.map((size) => ({
        "@type": "Offer",
        name: size.label,
        price: size.price,
        priceCurrency: "BDT",
        url: brand.url,
      })),
    }),
  };
};

export default buildProductSchema;
