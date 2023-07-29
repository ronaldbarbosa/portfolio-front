import Head from "next/head"

import About from "@/components/About/About"
import Footer from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <About />
      <Footer />
    </div>
  )
}
