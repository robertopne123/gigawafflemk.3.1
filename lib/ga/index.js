import { useState } from "react";

let consent = false;

export const pageview = (url) => {
  if (consent) {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

export const event = ({ action, params }) => {
  if (consent) {
    window.gtag("event", action, params);
  }
};

export const setConsentType = (newConsent) => {
  consent = newConsent;
};
