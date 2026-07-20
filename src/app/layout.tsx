import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POWERING | Sales Maturity Self-Assessment",
  description:
    "Where does your sales organization stand today, and where should it be? Take the POWERING self-assessment and get a priority heatmap in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}