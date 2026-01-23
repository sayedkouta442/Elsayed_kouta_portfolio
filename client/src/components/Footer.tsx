import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold font-display tracking-tight text-foreground mb-2">
            Dev<span className="text-primary">.</span>
          </h3>
          <p className="text-muted-foreground text-sm">
            Building digital experiences that matter.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/sayedkouta442" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <SiGithub className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/elsayed-kouta-7183b8336/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <SiLinkedin className="h-5 w-5" />
          </a>
          <a href="https://wa.me/201010220187" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <SiWhatsapp className="h-5 w-5" />
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground/60">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
