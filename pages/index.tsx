import Head from "next/head";
import { Inter } from "@next/font/google";
import AuthHero from "../components/auth/AuthHero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Movie streaming" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthHero />
      </main>
    </>
  );
}
