import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CredIt | Track your creditor and debtor",
  description:
    "Credit is SaaS platform that allow small shop owners and individuals track their credit and dept details more flexibly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
