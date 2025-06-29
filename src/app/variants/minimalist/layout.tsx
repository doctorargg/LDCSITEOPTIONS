import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lotus Direct Care - Minimalist Variant",
  description: "Experience Lotus Direct Care with a clean, monochromatic design featuring dark mode toggle and elegant typography.",
};

export default function MinimalistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}