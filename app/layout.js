import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Layatharang 2024",
  description: "Layatharang 2024 - Model Engineering College",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-THD9T1CGHX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-THD9T1CGHX');
            `,
          }}
        ></script>

        <link rel="stylesheet" href={inter.stylesheet} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
