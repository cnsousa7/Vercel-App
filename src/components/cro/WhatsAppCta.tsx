import type { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { trackWhatsAppClick } from "../../lib/analytics";
import {
  getGeneralWhatsAppUrl,
  getMedicalWhatsAppUrl,
  getUrgentWhatsAppUrl,
  getWhatsAppUrl,
  type WhatsAppIconProps,
} from "./whatsapp";

type WhatsAppIconButtonProps = WhatsAppIconProps & {
  className?: string;
};

export function WhatsAppIcon({ size = 24, title = "WhatsApp" }: WhatsAppIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      aria-label={title || undefined}
      className="cns-whatsapp-icon"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      role={title ? "img" : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M20.52 3.48A11.88 11.88 0 0 0 12.07 0C5.51 0 .17 5.34.17 11.9c0 2.1.55 4.15 1.6 5.96L.07 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.46-8.43Z"
        fill="currentColor"
      />
      <path
        d="M17.46 14.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9.03 9.03 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
        fill="white"
      />
    </svg>
  );
}

export function WhatsAppCta({
  children,
  href,
  className = "",
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href?: string;
}) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    trackWhatsAppClick({
      placement: 'cta',
      label: typeof children === 'string' ? children : undefined,
    });
    onClick?.(event);
  };

  return (
    <a
      className={`cns-whatsapp-cta ${className}`.trim()}
      href={href ?? getGeneralWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...props}
    >
      <WhatsAppIcon size={20} title="" />
      <span>{children}</span>
    </a>
  );
}

export function UrgentMaintenanceCta({ className = "" }: { className?: string }) {
  return (
    <WhatsAppCta
      className={`cns-whatsapp-cta--urgent ${className}`.trim()}
      href={getUrgentWhatsAppUrl()}
    >
      Acionar Manutenção 24h
    </WhatsAppCta>
  );
}

export function ExpressQuoteCta({ className = "" }: { className?: string }) {
  return (
    <WhatsAppCta className={className} href={getGeneralWhatsAppUrl()}>
      Solicitar Orçamento Expresso
    </WhatsAppCta>
  );
}

export function MedicalEngineeringCta({ className = "" }: { className?: string }) {
  return (
    <WhatsAppCta className={`cns-whatsapp-cta--medical ${className}`.trim()} href={getMedicalWhatsAppUrl()}>
      Suporte para Equipamentos Médicos
    </WhatsAppCta>
  );
}

export function CustomWhatsAppCta({
  message,
  children,
  className = "",
}: {
  message: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <WhatsAppCta className={className} href={getWhatsAppUrl(message)}>
      {children}
    </WhatsAppCta>
  );
}

export function WhatsAppIconButton({
  size = 24,
  title = "Falar com a CNSOUSATEC pelo WhatsApp",
  className = "",
}: WhatsAppIconButtonProps) {
  return (
    <WhatsAppCta
      aria-label={title}
      className={`cns-whatsapp-icon-button ${className}`.trim()}
      href={getGeneralWhatsAppUrl()}
    >
      <WhatsAppIcon size={size} title="" />
      <span className="cns-sr-only">{title}</span>
    </WhatsAppCta>
  );
}
