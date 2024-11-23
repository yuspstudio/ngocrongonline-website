import "../globals.css";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";


const archivo = Archivo({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: "Yusp Studio",
  description: "Yusp Studio Resource",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={archivo.className}>
      <body className="bg-neutral-100 dark:bg-neutral-950">
        {children}
      </body>
    </html>
  );
}
