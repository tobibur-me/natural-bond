"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import GalleryGrid from "@/Components/Gallery/GalleryGrid";
import siteConfig from "@/Config/SiteConfig";
import useGalleryNav from "@/Hooks/UseGalleryNav";

const Lightbox = dynamic(() => import("@/Components/Gallery/Lightbox"), { ssr: false });

const Gallery = () => {
  const items = siteConfig.gallery;
  const { index, prev, next, select } = useGalleryNav(items.length);
  const [viewerOpen, setViewerOpen] = useState(false);

  const openAt = (itemIndex: number) => {
    select(itemIndex);
    setViewerOpen(true);
  };

  return (
    <>
      <GalleryGrid items={items} onOpen={openAt} />
      {viewerOpen && (
        <Lightbox items={items} index={index} onPrev={prev} onNext={next} onClose={() => setViewerOpen(false)} />
      )}
    </>
  );
};

export default Gallery;
