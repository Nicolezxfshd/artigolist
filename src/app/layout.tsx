import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "ArtigoList",
  description: "No Artigolist, você encontra artigos incríveis para ler e compartilhar, conhecimento sempre é o futuro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
