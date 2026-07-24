// These styles apply to every route in the application
import 'leaflet/dist/leaflet.css'
import '../styles/global.css'
 
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
