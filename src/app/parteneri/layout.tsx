import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parteneri - Crește afacerea cu CRWD",
  description:
    "Alătură-te rețelei CRWD și atrage mai mulți clienți în localul tău. Oferim marketing gratuit, audiență calificată și sistem simplu de management.",
};

export default function ParteneriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


