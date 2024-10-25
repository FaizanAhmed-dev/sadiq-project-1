
import type { Metadata } from "next";
import "@/app/styles/global.css";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
