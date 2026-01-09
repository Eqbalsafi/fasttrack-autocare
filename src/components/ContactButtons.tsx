import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useExternalLink } from "@/hooks/use-external-link";

const PHONE_NUMBER = "16476400097";
const EMAIL = "fasttracktire@yahoo.com";

export const CallButton = ({ 
  className = "", 
  variant = "default",
  size = "default",
  fullWidth = false,
  children,
}: { 
  className?: string; 
  variant?: any;
  size?: any;
  fullWidth?: boolean;
  children?: React.ReactNode;
}) => {
  const { openPhone } = useExternalLink();
  
  return (
    <Button 
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
      variant={variant}
      size={size}
      onClick={() => openPhone(PHONE_NUMBER)}
    >
      {children || (
        <>
          <Phone className="mr-2 h-4 w-4" />
          Call Now
        </>
      )}
    </Button>
  );
};

export const WhatsAppButton = ({ 
  className = "", 
  variant = "default",
  size = "default",
  fullWidth = false,
  children,
}: { 
  className?: string; 
  variant?: any;
  size?: any;
  fullWidth?: boolean;
  children?: React.ReactNode;
}) => {
  const { openWhatsApp } = useExternalLink();
  
  return (
    <Button 
      className={`${fullWidth ? 'w-full' : ''} bg-green-600 hover:bg-green-700 ${className}`}
      variant={variant}
      size={size}
      onClick={() => openWhatsApp(PHONE_NUMBER)}
    >
      {children || (
        <>
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp Us
        </>
      )}
    </Button>
  );
};

export const PhoneLink = ({ 
  className = "",
  showIcon = true,
  showFullNumber = false,
}: { 
  className?: string;
  showIcon?: boolean;
  showFullNumber?: boolean;
}) => {
  const { openPhone } = useExternalLink();
  
  return (
    <button 
      onClick={() => openPhone(PHONE_NUMBER)}
      className={`flex items-center gap-2 hover:text-primary transition-colors ${className}`}
    >
      {showIcon && <Phone className="h-4 w-4" />}
      <span>{showFullNumber ? "(+1) 647-640-0097" : "647-640-0097"}</span>
    </button>
  );
};

export const EmailLink = ({ 
  className = "",
  showIcon = true,
}: { 
  className?: string;
  showIcon?: boolean;
}) => {
  const { openEmail } = useExternalLink();
  
  return (
    <button 
      onClick={() => openEmail(EMAIL)}
      className={`flex items-center gap-2 hover:text-primary transition-colors ${className}`}
    >
      {showIcon && <Mail className="h-4 w-4" />}
      <span>{EMAIL}</span>
    </button>
  );
};
