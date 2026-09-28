import ReactGA from 'react-ga4';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

type AnalyticsParamValue = string | number | boolean | undefined;
export type AnalyticsParams = Record<string, AnalyticsParamValue>;

export const initGA = () => {
  if (GA_TRACKING_ID) {
    ReactGA.initialize(GA_TRACKING_ID);
  }
};

export const logPageView = (url: string) => {
  if (GA_TRACKING_ID) {
    ReactGA.send({ hitType: 'pageview', page: url });
  }
};

export const logEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (GA_TRACKING_ID) {
    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([, value]) => value !== undefined),
    );
    ReactGA.event(eventName, cleanParams);
  }
};

export type WhatsAppClickContext = {
  placement: string;
  service?: string;
  locality?: string;
  label?: string;
  messageType?: string;
};

export const trackWhatsAppClick = ({
  placement,
  service,
  locality,
  label,
  messageType,
}: WhatsAppClickContext) => {
  logEvent('whatsapp_click', {
    placement,
    service,
    locality,
    cta_label: label,
    message_type: messageType,
  });
};

export const trackChatbotOpen = () => {
  logEvent('chatbot_open', { component: 'virtual_assistant' });
};

export const trackChatbotServiceSelected = (service: string) => {
  logEvent('chatbot_service_selected', {
    component: 'virtual_assistant',
    service,
  });
};

export const trackChatbotLocationSelected = (service: string, location: string) => {
  logEvent('chatbot_location_selected', {
    component: 'virtual_assistant',
    service,
    location,
  });
};

export const trackChatbotPropertySelected = (service: string, property: string) => {
  logEvent('chatbot_property_selected', {
    component: 'virtual_assistant',
    service,
    property,
  });
};

export const trackChatbotIssueSelected = (service: string, issue: string) => {
  logEvent('chatbot_issue_selected', {
    component: 'virtual_assistant',
    service,
    issue,
  });
};

export const trackChatbotUrgencySelected = (service: string, urgency: string) => {
  logEvent('chatbot_urgency_selected', {
    component: 'virtual_assistant',
    service,
    urgency,
  });
};

export const trackChatbotAvailabilitySelected = (service: string, availability: string) => {
  logEvent('chatbot_availability_selected', {
    component: 'virtual_assistant',
    service,
    availability,
  });
};

export const trackChatbotPhotoUploadStarted = (service: string, urgency: string) => {
  logEvent('chatbot_photo_upload_started', {
    component: 'virtual_assistant',
    service,
    urgency,
  });
};

export const trackChatbotPhotoUploaded = (service: string, urgency: string) => {
  logEvent('chatbot_photo_uploaded', {
    component: 'virtual_assistant',
    service,
    urgency,
  });
};

export const trackChatbotPhotoUploadFailed = (service: string, reason: string) => {
  logEvent('chatbot_photo_upload_failed', {
    component: 'virtual_assistant',
    service,
    reason,
  });
};

export const trackChatbotPhotoSkipped = (service: string, urgency: string) => {
  logEvent('chatbot_photo_skipped', {
    component: 'virtual_assistant',
    service,
    urgency,
  });
};

export const trackChatbotRestart = () => {
  logEvent('chatbot_restart', { component: 'virtual_assistant' });
};

export const trackChatbotWhatsAppClick = (
  service: string,
  urgency: string,
  issue?: string,
  availability?: string,
) => {
  logEvent('chatbot_whatsapp_click', {
    component: 'virtual_assistant',
    service,
    urgency,
    issue,
    availability,
  });
};

export const trackCTAClick = (label: string, placement = 'unknown') => {
  logEvent('cta_click', { label, placement });
};

export const trackLandingPageConversion = (lpName: string) => {
  logEvent('landing_page_conversion', { landing_page: lpName });
};
