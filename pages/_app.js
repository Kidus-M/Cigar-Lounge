// These styles apply to every route in the application
import '../styles/global.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return<>
    <Head>
      <title>Wolf Den Lounge | Premium Cigars & Spirits</title>
      <meta name="description" content="A modern sanctuary for cigar aficionados and spirit connoisseurs." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
</>
}