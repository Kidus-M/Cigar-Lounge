// These styles apply to every route in the application
import '../styles/global.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return<>
    <Head>
      <title>Wolf Den Lounge | Premium Cigars & Spirits</title>
      <meta name="description" content="A modern sanctuary for cigar aficionados and spirit connoisseurs."/>
      <link rel="icon" href="/favicon.ico"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
}