"use client";

import dynamic from "next/dynamic";

// GSAP loads separately so it never delays the first paint.
const MotionDirector = dynamic(() => import("@/Components/Motion/MotionDirector"), { ssr: false });

const MotionLoader = () => <MotionDirector />;

export default MotionLoader;
