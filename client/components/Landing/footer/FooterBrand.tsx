
import { Wallet } from "lucide-react";
import { SiNextdotjs, SiExpress, SiPrisma, SiPostgresql, SiGooglegemini, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function FooterBrand() {
  return (
    <div className="lg:col-span-4 space-y-6">
      <div className="flex items-center gap-2 text-xl font-extrabold text-foreground">
        <div className="bg-primary p-1.5 rounded-lg">
          <Wallet className="w-5 h-5 text-white" />
        </div>
        SmartSpend
      </div>
      <p className="text-sm text-muted-foreground max-w-xs">
        AI-powered personal finance platform to help you track, analyze, and save smarter.
      </p>
      
      <div>
        <p className="text-xs font-semibold text-muted-foreground mb-3">Built with</p>
        <div className="flex gap-3">
          <div className="bg-background p-2 rounded-md border border-border shadow-sm"><SiNextdotjs className="w-4 h-4 text-foreground" /></div>
          <div className="bg-background p-2 rounded-md border border-border shadow-sm"><SiExpress className="w-4 h-4 text-foreground" /></div>
          <div className="bg-background p-2 rounded-md border border-border shadow-sm"><SiPrisma className="w-4 h-4 text-foreground" /></div>
          <div className="bg-background p-2 rounded-md border border-border shadow-sm"><SiPostgresql className="w-4 h-4 text-[#336791]" /></div>
          <div className="bg-background p-2 rounded-md border border-border shadow-sm"><SiGooglegemini className="w-4 h-4 text-ai" /></div>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-muted-foreground mb-3">Connect with me</p>
        <div className="flex gap-3">
          <a href="https://github.com/adityathakur2008" className="flex items-center gap-2 bg-background hover:bg-secondary border border-border px-3 py-1.5 rounded-md text-xs font-semibold transition-colors">
            <SiGithub className="w-3.5 h-3.5" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/aditya-thakur08" className="flex items-center gap-2 bg-background hover:bg-secondary border border-border px-3 py-1.5 rounded-md text-xs font-semibold transition-colors">
            <FaLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}