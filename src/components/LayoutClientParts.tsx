"use client";

import dynamic from "next/dynamic";

const BackgroundDecorations = dynamic(
  () => import("@/components/BackgroundDecorations").then((m) => ({ default: m.BackgroundDecorations })),
  { ssr: false }
);

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export function LayoutClientParts() {
  return (
    <>
      <BackgroundDecorations />
      <CustomCursor />
    </>
  );
}
