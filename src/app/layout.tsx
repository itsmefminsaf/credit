import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Credit | Perfect credit tracking app",
  description:
    "Credit is a web application that allow users to keep tracking their credit more efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">{children}</body>
    </html>
  );
}
