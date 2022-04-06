import { AppProvider } from "../components/shop/context";
import "../styles/globals.css";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <WhatsAppWidget phoneNumber="+447399660485" />
    </AppProvider>
  );
}

export default MyApp;
