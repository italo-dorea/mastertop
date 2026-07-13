import type { Metadata } from "next";
import { Inter, Oswald, Dancing_Script, Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mastertop.com.br'),
  title: {
    default: "MASTERTOP EMPREENDIMENTOS | Engenharia, Construção e Tecnologia",
    template: "%s | MASTERTOP EMPREENDIMENTOS"
  },
  description: "MASTERTOP EMPREENDIMENTOS - Referência nacional em engenharia de alta complexidade, construção civil, montagem industrial, engenharia elétrica e infraestrutura.",
  keywords: ["Mastertop", "GCEC", "Mastertop Empreendimentos", "Empreendimentos", "Engenharia", "Construção Civil", "Instalações Industriais", "Plataformas Petrolíferas", "Engenharia Elétrica", "Tecnologia", "Bahia", "Dias D'Ávila", "Escoramento Metálico", "Escoramento de Valas", "Locação de Bomba Rebaixamento", "Bomba de Rebaixamento de Lençol Freático", "MND", "Microperfuração Não Destrutiva", "HDD", "Hdd Furo Direcional", "Obras de Saneamento", "Saneamento Básico", "Solda PEAD", "Soldagem de Tubulação PEAD", "Infraestrutura"],
  authors: [{ name: "MASTERTOP" }],
  creator: "MASTERTOP",
  publisher: "MASTERTOP",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mastertop.com.br",
    title: "MASTERTOP EMPREENDIMENTOS | Engenharia, Construção e Tecnologia",
    description: "Referência nacional em engenharia de alta complexidade, construção civil, montagem de canteiros, engenharia elétrica e infraestrutura.",
    siteName: "MASTERTOP EMPREENDIMENTOS",
    images: [
      {
        url: "/logo-app.png",
        width: 1200,
        height: 630,
        alt: "MASTERTOP EMPREENDIMENTOS Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MASTERTOP EMPREENDIMENTOS",
    description: "Referência em engenharia e construção civil de alta complexidade.",
    images: ["/logo-app.png"],
  },
  icons: {
    icon: "/logo-app.png",
    apple: "/logo-app.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${oswald.variable} ${dancingScript.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        {/* Global Fixed Video Background */}
        <div className="fixed inset-0" style={{ zIndex: -2 }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain object-center"
            poster="/bg-head.jpeg"
          >
            <source src="/videos/bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="fixed inset-0 bg-mastertop-dark/75 backdrop-blur-[1px]" style={{ zIndex: -1 }}></div>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
