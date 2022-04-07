import { AppProvider } from "../components/shop/context";
import "../styles/globals.css";
import { WhatsAppBubble } from "../components/whatsappbubble";

import * as ga from "../lib/ga";
import CookieConsent from "react-cookie-consent";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <WhatsAppBubble number="+447399660485" />
      <CookieConsent
        location="bottom"
        buttonText="Okay"
        className="z-50"
        style={{
          background: "#4EDDF0",
          fontFamily: "Poppins",
          fontSize: "14px",
          color: "#000000",
        }}
        buttonStyle={{
          background: "#E14985",
          color: "#ffffff",
          fontFamily: "Parkson-Black",
          fontSize: "18px",
        }}
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            ga.setConsentType(true);
          } else {
            ga.setConsentType(false);
          }
        }}
      >
        gigawaffle uses cookies to provide necessary website functionality,
        improve your experience and analyse our traffic.
      </CookieConsent>
    </AppProvider>
  );
}

export default MyApp;
