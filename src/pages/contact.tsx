import ContactItems from "@/components/Contact/ContactItems";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Head from "next/head";

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
