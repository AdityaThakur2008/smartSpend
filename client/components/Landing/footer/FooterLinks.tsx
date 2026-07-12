import React from "react";

export default function FooterLinks() {
  return (
    <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8">
      <div className="space-y-4">
        <h4 className="font-bold text-foreground">Product</h4>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-foreground">Project</h4>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-primary transition-colors">About This Project</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Tech Stack</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Roadmap</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">GitHub Repository</a></li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-foreground">Legal</h4>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>
  );
}