"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "../ui/hover-footer";

export default function HoverFooter() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Footer link data aligned with Neo Ayushveda B2B Pharma sections
  const footerLinks = [
    {
      title: "Discover Us",
      links: [
        { label: "About Sourcing", id: "about" },
        { label: "Executive Leadership", id: "leadership" },
        { label: "Key Differentiators", id: "whyus" },
      ],
    },
    {
      title: "Logistics",
      links: [
        { label: "Products Catalog", id: "products" },
        { label: "Global Exports Map", id: "exports" },
        { label: "Regulatory Compliance", id: "certifications" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={16} className="text-gold" />,
      text: "contact@neoayushveda.com",
      href: "mailto:contact@neoayushveda.com",
    },
    {
      icon: <Phone size={16} className="text-gold" />,
      text: "040-35247813",
      href: "tel:+914035247813",
    },
    {
      icon: <Phone size={16} className="text-gold" />,
      text: "+91 87124 43610",
      href: "tel:+918712443610",
    },
    {
      icon: <MapPin size={16} className="text-gold" />,
      text: "Banjara Hills, Hyderabad, India",
    },
  ];

  // Social media icons - Inline SVGs to avoid package export incompatibilities
  const socialLinks = [
    {
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: "LinkedIn",
      href: "https://linkedin.com"
    },
    {
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "Twitter",
      href: "https://twitter.com"
    },
    {
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
      label: "Facebook",
      href: "https://facebook.com"
    },
    {
      icon: (
        <svg className="w-4.5 h-4.5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" width="18" height="18" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      label: "Instagram",
      href: "https://instagram.com"
    },
    {
      icon: <Globe size={18} />,
      label: "Globe",
      href: "#"
    },
  ];

  return (
    <footer className="bg-emerald relative h-fit overflow-hidden border-t border-gold/20 text-cream py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">

          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/Logo.png" 
                alt="Neo Ayushveda Logo" 
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-cream/60 leading-relaxed font-jakarta">
              Blending ancient healing traditions with contemporary technology to coordinate global pharmaceutical exports.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-gold text-xs tracking-[0.18em] uppercase font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3 font-jakarta text-[13px]">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="hover:text-gold text-cream/70 text-left transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.18em] uppercase font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 font-jakarta text-[13px]">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-cream/70">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-gold transition-colors duration-200"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory Notice */}
        <div className="border-t border-white/10 pt-8 pb-4 my-8">
          <p className="text-[11px] text-cream/35 leading-relaxed">
            <span className="font-semibold text-gold/60 uppercase tracking-wider block mb-1">Regulatory & Medical Disclaimer</span>
            Statements made on this website have not been evaluated by the FDA or local health ministries. Products showcased are manufactured by licensed third-party manufacturers holding valid WHO-GMP, ISO, or AYUSH certifications. Sourced therapeutics are intended for distribution to qualified B2B importers. We do not sell directly to individual consumers.
          </p>
        </div>

        <hr className="border-t border-white/5 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 text-cream/45">
          {/* Social icons */}
          <div className="flex space-x-6 text-cream/30">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-gold hover:scale-105 transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Neo Ayushveda Pvt Ltd. All rights reserved. Registered in Hyderabad, India.
          </p>
        </div>
      </div>

      {/* Text hover effect - NEO */}
      <div className="lg:flex hidden h-[18rem] md:h-[24rem] w-full relative z-10 pointer-events-auto mt-12 border-t border-white/5 bg-black/15">
        <TextHoverEffect text="NEO" className="z-20 text-gold" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
