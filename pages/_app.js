// These styles apply to every route in the application
import '../styles/global.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function App({ Component, pageProps }) {
  return<>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
</>
}