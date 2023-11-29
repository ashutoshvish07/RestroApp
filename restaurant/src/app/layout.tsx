import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Authprovider from "@/components/Authprovider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EitFit Restaurent",
  description: "Generated ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authprovider>
          <QueryProvider>
            <div>
              <Notification />
              <Navbar />
              {children}
              <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>

              <Footer />
            </div>
          </QueryProvider>
        </Authprovider>
      </body>
    </html>
  );
}
