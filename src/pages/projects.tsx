import Head from "next/head";

import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>Projects</title>
      </Head>
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}
