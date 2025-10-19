import Layout from "@/components/layout/Layout";
import { Quicksand } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quicksand.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}