import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => (
  <motion.a
    href="https://wa.me/919098015631"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg animate-pulse-glow"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-primary-foreground" />
  </motion.a>
);

export default WhatsAppWidget;
