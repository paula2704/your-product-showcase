export const GA_MEASUREMENT_ID = "G-7PKEC167MT";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const initAnalytics = () => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  }

  window.gtag = gtag;

  const existingScript = document.querySelector(
    `script[src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`,
  );

  if (!existingScript) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: true,
  });
};

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean | object | undefined>,
) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", eventName, params || {});
};

export const trackPageView = (path: string, title?: string) => {
  trackEvent("page_view", {
    page_path: path,
    page_title: title ?? document.title,
  });
};