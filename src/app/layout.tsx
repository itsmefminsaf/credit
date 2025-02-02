import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Credit | Manage your customers digitally",
  description:
    "Credit is a web application, that allow users to manage their customers' debts for free",
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
