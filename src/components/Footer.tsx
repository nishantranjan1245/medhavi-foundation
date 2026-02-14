import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import medhaviLogo from "@/assets/medhavi-logo.png";

const Footer = () => {
  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, #1d2930 0%, #2a3d47 50%, #1d2930 100%)' }}>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img src={medhaviLogo} alt="Medhavi Foundation Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display text-xl font-bold bg-gradient-to-r from-primary via-[#d4a24e] to-primary bg-clip-text text-transparent">Medhavi Foundation</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Dedicated to environment protection through tree plantation, cleanliness drives,
              and climate awareness programs across India.
            </p>
          </div>

          {/* Quick Links & Explore - side by side on mobile */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About Us", path: "/about" },
                  { label: "Our Initiatives", path: "/initiatives" },
                  { label: "Projects", path: "/projects" },
                  { label: "Get Involved", path: "/get-involved" },
                  { label: "Donate", path: "/donate" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Explore</h4>
              <ul className="space-y-2">
                {[
                  { label: "Impact", path: "/impact" },
                  { label: "Gallery", path: "/gallery" },
                  { label: "Transparency", path: "/transparency" },
                  { label: "Contact", path: "/contact" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal & Contact - side by side on mobile */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {[
                  { label: "Privacy Policy", path: "/privacy-policy" },
                  { label: "Terms & Conditions", path: "/terms-conditions" },
                  { label: "Refund Policy", path: "/refund-policy" },
                  { label: "Disclaimer", path: "/disclaimer" },
                  { label: "Cookie Policy", path: "/cookie-policy" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 shrink-0" />
                  <span className="text-sm text-white/70">
                    Dtj-216 Dlf Tower-b Jasola, South Delhi, New Delhi, Delhi, India, 110025
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="text-sm text-white/70">
                    info@medhavifoundation.org.in
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+919878589698" className="text-sm text-white/70 hover:text-white transition-colors">
                    +91 9878589698
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Medhavi Foundation. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              CIN: U80903DL2012NPL238611 | Registration No: 238611
            </p>
            <p className="text-xs text-white/40">
              Directors: Pravesh Dudani, Aditi Dudani, Kuldip Sarma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
