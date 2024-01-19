import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ERPHeader from "@/components/ERPHeader";
import ERPHeaderMobile from "@/components/ERPHeaderMobile";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ERPHeader />
          <main>{children}</main>
          <ERPHeaderMobile />
        </ClerkProvider>
      </body>
    </html>
  );
}
