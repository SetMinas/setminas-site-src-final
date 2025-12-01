declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID!;
const CONTACT_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL!;
const VIEW_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_VIEW_LABEL!;
const ALLOTMENT_VIEW_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_ALLOTMENT_VIEW_LABEL!;

export function adsConversionContact(source: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${CONTACT_LABEL}`,
      ...source,
    });
  }
}

export function adsConversionView(page: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${VIEW_LABEL}`,
      ...page,
    });
  }
}

export function adsConversionAllotmentView(page: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${ALLOTMENT_VIEW_LABEL}`,
      ...page,
    });
  }
}
