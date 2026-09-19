import { AnalyticsEvent } from '../types';

export function trackEvent(eventName: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    // Log for client diagnostics and send to analytics providers if present (e.g. dataLayer)
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...payload,
        timestamp: new Date().toISOString(),
      });
    }
    
    // Dispatch a standard custom event
    const customEvent = new CustomEvent('hamid_route_analytics', {
      detail: { event: eventName, ...payload },
    });
    window.dispatchEvent(customEvent);
  }
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
