import buildProductSchema from "@/Lib/Seo/BuildProductSchema";

const ProductJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(buildProductSchema()).replace(/</g, "\\u003c") }}
  />
);

export default ProductJsonLd;
