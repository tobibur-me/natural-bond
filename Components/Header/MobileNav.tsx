"use client";

import { Menu, X } from "lucide-react";
import BrandLogo from "@/Components/Brand/BrandLogo";
import LinkButton from "@/Components/Ui/LinkButton";
import headerCopy from "@/Data/HeaderCopy";
import navLinks from "@/Data/NavLinks";
import useDialog from "@/Hooks/UseDialog";

const MobileNav = () => {
  const { ref, open, close } = useDialog();

  return (
    <div className="lg:hidden">
      <button type="button" className="icon-btn" aria-label={headerCopy.openMenu} aria-haspopup="dialog" onClick={open}>
        <Menu className="size-6" aria-hidden="true" />
      </button>
      <dialog
        ref={ref}
        aria-label={headerCopy.navLabel}
        onClick={(event) => event.target === event.currentTarget && close()}
        className="sheet"
      >
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between">
            <BrandLogo />
            <button type="button" className="icon-btn" aria-label={headerCopy.closeMenu} onClick={close}>
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={headerCopy.navLabel} className="mt-8 flex flex-col">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={close} className="border-b border-forest/15 py-4 text-xl">
                {link.label}
              </a>
            ))}
          </nav>
          <LinkButton href="#order" onClick={close} className="mt-8">
            {headerCopy.cta}
          </LinkButton>
        </div>
      </dialog>
    </div>
  );
};

export default MobileNav;
