import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Star, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import heroCoffee from "@/assets/hero-coffee.png";
import interior1 from "@/assets/cafe-interior-1.jpg";
import interior2 from "@/assets/cafe-interior-2.jpg";
import interior3 from "@/assets/cafe-interior-3.jpg";
import interior4 from "@/assets/cafe-interior-4.jpg";

const details = [
  { img: interior1, title: "Warm Interiors", desc: "Thoughtfully designed spaces for your comfort", alt: "Cafe interior with warm wood tones" },
  { img: interior2, title: "Artisan Coffee", desc: "Handcrafted by award-winning baristas", alt: "Barista pouring latte art" },
  { img: interior3, title: "Fresh Brunch", desc: "Farm-to-table ingredients every morning", alt: "Brunch spread with eggs and pastries" },
  { img: interior4, title: "Cozy Corners", desc: "Your perfect reading nook awaits", alt: "Cozy corner with books and plants" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, isMobile ? 1 : 0]);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center gradient-peach overflow-hidden">
        <motion.div style={{ y, opacity }} className="container mx-auto px-4 md:px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: window.innerWidth < 768 ? 0 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: window.innerWidth < 768 ? 0.4 : 0.8 }}
            className="text-center md:text-left"
          >
            <motion.span
              initial={{ opacity: 0, x: window.innerWidth < 768 ? 0 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: window.innerWidth < 768 ? 0.4 : 0.8 }}
              className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-6"
            >
              ✨ Brewing Happiness in Every Cup ☕
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6 text-center md:text-left">
              Where Every
              <br />
              <span className="text-gradient">Sip Inspires</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed mx-auto md:mx-0 text-center md:text-left">
              Experience the rich aroma of freshly brewed coffee made from the finest beans. From bold espressos to creamy lattes, every cup is crafted to awaken your senses.
            </p>

            <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
              <Link to="/menu">
                <MagneticButton>
                  Explore Menu <ArrowRight className="ml-2 w-4 h-4" />
                </MagneticButton>
              </Link>
              <Link to="/contact">
                <MagneticButton className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  Visit Us
                </MagneticButton>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: window.innerWidth < 768 ? 0 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: window.innerWidth < 768 ? 0.4 : 0.8 }}
            className="flex justify-center"
          >
            <div className="animate-float">
              <img
                src={heroCoffee}
                alt="Floating coffee cup"
                loading="lazy"
                className="drop-shadow-2xl w-[280px] md:w-[500px]"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-mint/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-peach/60 blur-3xl pointer-events-none" />
      </section>

      {/* Quick Info */}
      <section className="py-8 gradient-mint">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-center gap-8 text-center md:text-left">
          {[
            { icon: Clock, text: "Open 7AM – 10PM Daily" },
            { icon: MapPin, text: "Shop 45 Raj Business Park 05" },
            { icon: Star, text: "4.9★ on Google Reviews" },
          ].map(({ icon: Icon, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center md:justify-start gap-3 glass rounded-lg px-6 py-3"
            >
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cafe Details Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Experience Our <span className="text-gradient">World</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Step into a space where every detail is curated for your delight.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {details.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: window.innerWidth < 768 ? 0 : i * 0.15, duration: 0.5 }}
                whileHover={window.innerWidth < 768 ? {} : { y: -8 }}
                className="group glass rounded-lg overflow-hidden text-center md:text-left"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-warm">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ready for a <span className="text-gradient">Vibrant</span> Experience?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Join us for, a perfectly crafted cup of coffee.
            </p>
            <Link to="/menu">
              <MagneticButton>
                View Full Menu <ArrowRight className="ml-2 w-4 h-4" />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;