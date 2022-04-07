import { AppProvider } from "../components/shop/context";
import "../styles/globals.css";
import { WhatsAppBubble } from "../components/whatsappbubble";

import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <WhatsAppBubble number="+447399660485" />
    </AppProvider>
  );
}

export default MyApp;
