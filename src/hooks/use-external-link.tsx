import { useCallback } from 'react';

export const useExternalLink = () => {
  const openPhone = useCallback((phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  }, []);

  const openWhatsApp = useCallback((phoneNumber: string, message?: string) => {
    const url = message 
      ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      : `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const openEmail = useCallback((email: string, subject?: string) => {
    const url = subject 
      ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
      : `mailto:${email}`;
    window.location.href = url;
  }, []);

  return { openPhone, openWhatsApp, openEmail };
};
