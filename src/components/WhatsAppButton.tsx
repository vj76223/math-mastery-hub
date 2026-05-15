import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-[0_10px_35px_rgba(255,115,0,0.4)] hover:scale-110 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(255,115,0,0.55)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white" size={26} />
    </a>
  );
};

export default WhatsAppButton;
