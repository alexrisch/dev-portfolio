import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Risch - Portfolio",
  description: "Developer portfolio showcasing some of my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#101a23] dark group/design-root" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
        <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
