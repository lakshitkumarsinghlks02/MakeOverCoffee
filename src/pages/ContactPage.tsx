import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen gradient-mint pt-28 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We'd love to hear from you. Drop us a message or visit us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-strong rounded-lg p-8 md:p-10"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-foreground"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <MagneticButton>
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </MagneticButton>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <CheckCircle className="w-16 h-16 text-accent mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                    className="text-sm text-primary font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-strong rounded-lg p-8 flex flex-col gap-6">
              {[
                { icon: MapPin, label: "Address", value: "Shop no. 45 Raj Business Park 05,siddhart Lake City,Bhopal," },
                { icon: Phone, label: "Phone", value: "+91 9098015631" },
                { icon: Mail, label: "Email", value: "MakeOvercafe@gmail.com" },
              ].map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
                    <p className="text-foreground font-medium">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="glass-strong rounded-lg overflow-hidden flex-1 min-h-[300px]">
              <iframe
                title="VibrantCafé Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d886.6254284829442!2d77.49102666299946!3d23.249284600711537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41002ae7df89%3A0x415436ec18e7c033!2sMake%20over%20coffee!5e1!3m2!1sen!2sin!4v1774615611745!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 300, filter: "saturate(1.2) hue-rotate(10deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
