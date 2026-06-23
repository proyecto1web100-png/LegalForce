import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legal Force HN | Bufete Jurídico en Honduras",
  description:
    "Bufete jurídico especializado en Honduras. Expertos en Derecho Penal, Laboral, Civil, Administrativo, Migratorio, Tributario, Fiscal y Notarial. Defendemos tu futuro con estrategia y precisión.",
  keywords:
    "abogados Honduras, bufete jurídico Tegucigalpa, derecho penal Honduras, abogado laboral Honduras, Legal Force HN",
  authors: [{ name: "Legal Force HN" }],
  openGraph: {
    title: "Legal Force HN | Bufete Jurídico en Honduras",
    description:
      "Defendemos tu futuro con estrategia y precisión. Más de 500 casos resueltos.",
    type: "website",
    locale: "es_HN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
