import { getGeneralWhatsAppUrl } from "./whatsapp";
import { WhatsAppIcon } from "./WhatsAppCta";
import { trackWhatsAppClick } from "../../lib/analytics";

export function WhatsAppFloatingButton() {
  return (
    <a
      className="cns-whatsapp-float"
      href={getGeneralWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      onClick={() => trackWhatsAppClick({ placement: 'floating_button', label: 'Solicitar orçamento' })}
    >
      <WhatsAppIcon size={28} title="" />
      <span className="cns-whatsapp-float__label">Solicitar orçamento</span>
    </a>
  );
}
