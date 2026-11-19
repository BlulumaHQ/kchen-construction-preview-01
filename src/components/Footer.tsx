import { Link } from "react-router-dom";
import footerLogo from "@/assets/kchen-logo-white.svg";

const Footer = () => {
  return (
    <footer className="kchen-dark-bg text-[hsl(var(--kchen-footer-text))]">
      <div className="section-padding py-16">
        {/* Desktop: 5-col grid with spacer. Mobile: stacked */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr_1fr] gap-8 md:gap-0">
          {/* Column A – Logo */}
          <div className="flex flex-col gap-4">
            <img src={footerLogo} alt="K. Chen Construction" className="h-[60px] w-auto self-start" />
            <p className="text-sm leading-relaxed max-w-[260px] opacity-70">
              Comprehensive development and design-build construction management in Vancouver, BC.
            </p>
          </div>

          {/* Column B – Spacer (hidden on mobile) */}
          <div className="hidden md:block" aria-hidden="true" />

          {/* Column C – Contact */}
          <div>
            <h4 className="text-[hsl(0,0%,100%)] text-sm font-semibold tracking-widest uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Vancouver, BC, Canada</li>
              <li>
                <a href="tel:6046182449" className="hover:text-[hsl(0,0%,100%)] transition-colors">
                  (604) 618-2449
                </a>
              </li>
              <li>
                <a href="mailto:info@kchencm.com" className="hover:text-[hsl(0,0%,100%)] transition-colors">
                  info@kchencm.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column D – Navigation */}
          <div>
            <h4 className="text-[hsl(0,0%,100%)] text-sm font-semibold tracking-widest uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/" className="hover:text-[hsl(0,0%,100%)] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[hsl(0,0%,100%)] transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-[hsl(0,0%,100%)] transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-[hsl(0,0%,100%)] transition-colors">Projects</Link></li>
              <li><Link to="/recognitions" className="hover:text-[hsl(0,0%,100%)] transition-colors">Recognitions</Link></li>
              <li><Link to="/contact" className="hover:text-[hsl(0,0%,100%)] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[hsl(220,5%,25%)] section-padding py-4">
        <p className="text-xs opacity-50 text-center">
          K. Chen Construction Management Inc. Copyright © 2026 All Rights Reserved. |{" "}
          Web Design by{" "}
          <a
            href="https://bluluma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[hsl(0,0%,100%)] transition-colors underline"
          >
            Bluluma Design
          </a>
        {" "}<span className="block mt-1 opacity-80" data-concept-note>Design concept for portfolio purposes only. Not the official website of K. Chen Construction Management.</span></p>
      </div>
    </footer>
  );
};

export default Footer;
