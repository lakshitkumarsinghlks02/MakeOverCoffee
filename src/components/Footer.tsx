import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="gradient-warm py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
            <Coffee className="w-6 h-6 text-primary" />
            <span className="text-xl font-display font-bold text-foreground">
              Make Over Coffee
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Where every cup tells a story and every visit feels like home.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">Menu</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/makeovercoffeee.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © 2026 MakeOverCoffee. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
