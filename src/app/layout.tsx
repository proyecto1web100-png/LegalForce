import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
