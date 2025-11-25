import { Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import ncaLogo from "@/assets/nca-logo.png";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={ncaLogo} alt="NCA" className="w-10 h-10" />
                <span className="text-2xl font-bold text-gradient">N.C.A. Group Pvt. Ltd.</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Building secure, innovative digital solutions where development meets security excellence.
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
              <h4 className="font-medium">NCA Security</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#security-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    VAPT & Red Team
                  </a>
                </li>
                <li>
                  <a href="#security-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Incident Response
                  </a>
                </li>
                <li>
                  <a href="#security-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Cloud Security
                  </a>
                </li>
                <li>
                  <a href="#security-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    SIEM/SOC Operations
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">NCA Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#development-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#development-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#development-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    API Development
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
                  <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NCA. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Innovate. Secure. Scale.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;