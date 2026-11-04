import FacebookIcon from "@/Components/Icons/FacebookIcon";
import siteConfig from "@/Config/SiteConfig";
import footerCopy from "@/Data/FooterCopy";
import contactLinks from "@/Lib/ContactLinks";

const { brand, contact } = siteConfig;
const linkClass = "underline-offset-4 hover:underline";

const FooterContacts = () => (
  <div>
    <h2 className="text-2xl text-forest">{footerCopy.contactTitle}</h2>
    <dl className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-[auto_1fr]">
      <dt className="text-forest">{footerCopy.website}</dt>
      <dd className="max-sm:mb-2"><a href={brand.url} className={linkClass}>naturalbond.shop</a></dd>
      <dt className="text-forest">{footerCopy.whatsapp}</dt>
      <dd className="max-sm:mb-2">
        <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {contact.phoneDisplay}
        </a>
      </dd>
      <dt className="text-forest">{footerCopy.phone}</dt>
      <dd className="max-sm:mb-2"><a href={contactLinks.call} className={linkClass}>{contact.phoneDisplay}</a></dd>
      <dt className="text-forest">{footerCopy.address}</dt>
      <dd>{contact.address}</dd>
    </dl>
    <a
      href={contact.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-3 inline-flex min-h-11 items-center gap-2 text-forest ${linkClass}`}
    >
      <FacebookIcon className="size-5" />
      {footerCopy.facebook}
    </a>
  </div>
);

export default FooterContacts;
