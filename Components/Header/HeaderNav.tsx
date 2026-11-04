import headerCopy from "@/Data/HeaderCopy";
import navLinks from "@/Data/NavLinks";

const HeaderNav = () => (
  <nav aria-label={headerCopy.navLabel} className="hidden items-center gap-6 lg:flex xl:gap-8">
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="py-2 whitespace-nowrap text-forest underline-offset-8 hover:underline"
      >
        {link.label}
      </a>
    ))}
  </nav>
);

export default HeaderNav;
