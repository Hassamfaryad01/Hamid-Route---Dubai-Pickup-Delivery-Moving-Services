export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  problemSolved: string;
  whatYouGet: string[];
  scenarios: string[];
  whatsappMessage: string;
  iconName: string;
  badge?: string;
  detailsParagraphs: string[];
}

export interface CapacityItem {
  title: string;
  subtitle: string;
  description: string;
  idealFor: string[];
  note: string;
}

export interface RouteProofItem {
  id: string;
  whatNeededMoving: string;
  from: string;
  to: string;
  whatHamidRouteDid: string;
  result: string;
  category: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  serviceContext: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export type AnalyticsEvent = 
  | 'phone_click'
  | 'whatsapp_click'
  | 'cta_click'
  | 'service_page_view'
  | 'contact_page_view'
  | 'review_view';
