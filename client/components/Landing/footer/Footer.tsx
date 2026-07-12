import React from "react";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterAbout from "./FooterAbout";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/60 pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <FooterBrand />
          <FooterLinks />
          <FooterAbout />
        </div>

        {/* Bottom Bar */}
        <FooterBottom />
        
      </div>
    </footer>
  );
}