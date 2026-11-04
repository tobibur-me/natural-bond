import { ChevronDown } from "lucide-react";
import type { FaqItemProps } from "@/Types/SectionProps";

// Native <details> is keyboard accessible with no JavaScript. Sharing a `name` keeps one open at a time.
const FaqItem = ({ faq, defaultOpen }: FaqItemProps) => (
  <details name="faq" open={defaultOpen} className="faq-item border-b border-forest/20">
    <summary className="flex min-h-16 items-center justify-between gap-4 py-4 text-xl text-forest">
      {faq.question}
      <ChevronDown className="faq-chevron size-6 shrink-0" aria-hidden="true" />
    </summary>
    <p className="max-w-[65ch] pb-6 text-ink">{faq.answer}</p>
  </details>
);

export default FaqItem;
