import { Link } from "react-router-dom";
import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="gradient-dark text-navy-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <span className="font-heading text-xl font-bold">MediBoost</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            India's trusted digital marketing partner for doctors and medical professionals. Growing your practice, one click at a time.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
            <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@mediboost.in</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Mumbai, India</div>
          </div>
        </div>
      </div>

      <div className="border-t border-muted-foreground/20 mt-12 pt-8 text-center text-sm opacity-50">
        © {new Date().getFullYear()} MediBoost. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
