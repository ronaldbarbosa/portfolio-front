import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";

export interface PageProps {
  locale: string
}

export async function getStaticProps(props: PageProps) {
  return {
    props: {
      ...(await serverSideTranslations(props.locale, ['common', 'index', 'projects', 'contacts']))
    }
  }
}

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
