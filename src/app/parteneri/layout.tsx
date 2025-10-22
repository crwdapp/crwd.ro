import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parteneri - Crește traficul din prima lună cu CRWD",
  description:
    "Tu faci atmosfera, noi aducem oamenii care o caută. Vizibilitate, evenimente, trafic real.",
};

export default function ParteneriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
