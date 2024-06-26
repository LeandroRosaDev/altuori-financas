import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altuori Finanças",
  description: "Mudando seu jeito de lidar com o dinheiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
