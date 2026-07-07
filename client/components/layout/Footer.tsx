// components/layout/footer.tsx
import Link from "next/link";
import Logo from "@/components/shared/logo";
import { FaGithub , FaLinkedin  } from "react-icons/fa";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "How It Works", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border/40 px-6 sm:px-12 lg:px-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Upper Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm font-normal max-w-xs leading-relaxed">
              AI-powered personal finance platform to help you track, analyze and save smarter.
            </p>
          </div>

          {/* Dynamic Links Map Cols */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              <h4 className="text-sm font-bold tracking-wider uppercase text-foreground">
                {section.title}
              </h4>
              <ul className="flex flex-col space-y-2.5">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href={link.href} 
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials Interactive Box Col */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-foreground">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              
              <Link href="#" className="p-2 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-muted/80 transition-all">
                <FaLinkedin className="w-4 h-4 fill-current stroke-none" />
              </Link>
              <Link href="#" className="p-2 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-muted/80 transition-all">
                <FaGithub className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Lower Legals Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-muted-foreground">
          <p>© {currentYear} SmartSpend.ai. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
