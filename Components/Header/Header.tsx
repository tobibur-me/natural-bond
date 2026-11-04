import BrandLogo from "@/Components/Brand/BrandLogo";
import HeaderContacts from "@/Components/Header/HeaderContacts";
import HeaderNav from "@/Components/Header/HeaderNav";
import HeaderScrollWatcher from "@/Components/Header/HeaderScrollWatcher";
import MobileNav from "@/Components/Header/MobileNav";
import Container from "@/Components/Ui/Container";
import headerCopy from "@/Data/HeaderCopy";

const Header = () => (
  <>
    <div id="top-marker" aria-hidden="true" className="absolute top-0 h-px w-px" />
    <HeaderScrollWatcher />
    <header id="site-header" data-intro="fade" data-scrolled="false" className="site-header sticky top-0 z-30">
      <Container className="flex h-[4.5rem] items-center justify-between gap-2">
        <a href="#home" aria-label={headerCopy.homeLabel} className="flex shrink-0 rounded-lg">
          <BrandLogo />
        </a>
        <HeaderNav />
        <div className="flex items-center gap-1 sm:gap-2">
          <HeaderContacts />
          <MobileNav />
        </div>
      </Container>
    </header>
  </>
);

export default Header;
