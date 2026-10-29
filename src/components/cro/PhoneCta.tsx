import type { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { trackPhoneClick } from '../../lib/analytics';

export type PhoneCtaProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  children: ReactNode;
  phone?: string;
  service?: string;
  placement?: string;
  label?: string;
};

const DEFAULT_PHONE = '+5561992743428';

export function PhoneCta({
  children,
  phone = DEFAULT_PHONE,
  service,
  placement = 'cta',
  label,
  onClick,
  ...props
}: PhoneCtaProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    trackPhoneClick({
      placement,
      service,
      label: label ?? (typeof children === 'string' ? children : undefined),
    });
    onClick?.(event);
  };

  return (
    <a href={`tel:${phone}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
