import Head from "next/head"

import About from "@/components/About/About"
import Footer from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"

export default function Home() {
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
