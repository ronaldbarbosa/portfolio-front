import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ContactItems from "@/components/Contact/ContactItems";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import Head from "next/head";

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


export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <ContactItems />
      <Footer />
    </div>
  );
}
