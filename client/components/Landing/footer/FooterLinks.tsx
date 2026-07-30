import Link from "next/link";
import { navLinks } from "@/constants/landingConstants/navigation";

export default function FooterLinks() {
  return (
    <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8">
      <div className="space-y-4">
        <h4 className="font-bold text-foreground">Product</h4>
        <ul className="space-y-2.5 text-sm text-muted-foreground"> {navLinks.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
             className="hover:text-primary transition-colors"
            >
              {link.title}
            </Link>
          </li>
        ))}
         
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-foreground">Project</h4>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-primary transition-colors">About This Project</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Tech Stack</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Roadmap</a></li>
          <li><a href="https://github.com/AdityaThakur2008/smartSpend" className="hover:text-primary transition-colors">GitHub Repository</a></li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-foreground">Connect</h4>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
          <li><a href="https://github.com/adityathakur2008" className="hover:text-primary transition-colors">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/aditya-thakur08" className="hover:text-primary transition-colors">LinkedIn</a></li>
          <li><a href="mailto:adityathakur89362@gmail.com" className="hover:text-primary transition-colors">Email</a></li>
        </ul>
      </div>
    </div>
  );
}