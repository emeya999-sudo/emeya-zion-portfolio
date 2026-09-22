import { siteConfig } from "@/config/site";

/**
 * Centralized contact configuration
 */
export const CONTACT_CONFIG = {
  // Use the WhatsApp number from site config, ensuring it has no spaces or +
  whatsappNumber: siteConfig.whatsappNumber.replace(/[^0-9]/g, ""),
  whatsappDisplayNumber: siteConfig.whatsappNumber,
  phoneNumber: siteConfig.phoneNumber,
  email: siteConfig.email,
};



/**
 * Generate a URL for the "Call Me" button.
 */
export function getCallMeUrl(): string {
  return `tel:${CONTACT_CONFIG.phoneNumber.replace(/[^0-9+]/g, "")}`;
}

/**
 * Interface for the detailed Contact form data
 */
export interface ContactFormData {
  name: string;
  phone: string;
  budget: string;
  services: string[];
  details: string;
}

/**
 * Generate a URL for the highly-qualified "Contact Me" form submission.
 * Constructs a readable multi-line message.
 */
export function getContactFormSubmitUrl(data: ContactFormData): string {
  const message = `New Project Inquiry

Name: ${data.name.trim()}
Phone: ${data.phone.trim()}
Budget: ${data.budget.trim()}

Services:
${data.services.map((s) => `- ${s}`).join("\n")}

Project Details:
${data.details.trim()}`;

  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
