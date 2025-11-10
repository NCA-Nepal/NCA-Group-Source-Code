import { Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">NCA Security</h3>
              <p className="text-sm text-muted-foreground">
                Defense Through Intelligence. Protecting your digital assets with expertise.
              </p>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    VAPT & Red Team
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    SOC Operations
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Cloud Security
                  </a>
                </li>
                <li>
                  <a 
                    href="https://calendly.com/rezydev/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NCA Security. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Defense Through Intelligence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;