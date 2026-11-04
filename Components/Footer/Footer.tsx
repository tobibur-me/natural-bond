import BrandLogo from "@/Components/Brand/BrandLogo";
import FooterContacts from "@/Components/Footer/FooterContacts";
import FooterYear from "@/Components/Footer/FooterYear";
import Container from "@/Components/Ui/Container";
import siteConfig from "@/Config/SiteConfig";
import footerCopy from "@/Data/FooterCopy";

const Footer = () => (
  <footer id="site-footer" className="bg-cream pt-8 pb-10 text-ink lg:pt-12">
    <Container>
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-[46ch]">{footerCopy.description}</p>
          <p className="mt-3 text-forest">{siteConfig.brand.tagline}</p>
          <p className="mt-1 text-base text-ink">{siteConfig.brand.secondaryTagline}</p>
        </div>
        <FooterContacts />
      </div>
      <p className="mt-8 border-t border-forest/15 pt-5 text-base text-ink">
        © <FooterYear /> {footerCopy.rights}
      </p>
    </Container>
  </footer>
);

export default Footer;
