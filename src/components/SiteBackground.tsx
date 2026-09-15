"use client";

import { usePathname } from "next/navigation";

export default function SiteBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <>
        <div className="fixed inset-0" style={{ zIndex: -2 }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain object-center"
            poster="/bg-head.jpeg"
          >
            <source src="/videos/bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="fixed inset-0 bg-mastertop-dark/75 backdrop-blur-[1px]" style={{ zIndex: -1 }}></div>
      </>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ zIndex: -2, backgroundImage: "url(/bg-head.jpeg)" }}
      ></div>
      <div className="fixed inset-0 bg-mastertop-dark/50 backdrop-blur-sm" style={{ zIndex: -1 }}></div>
    </>
  );
}
