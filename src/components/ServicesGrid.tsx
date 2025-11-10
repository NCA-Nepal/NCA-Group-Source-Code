import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Bug, 
  Code, 
  Cloud, 
  Eye, 
  Globe, 
  AlertTriangle, 
  FileCheck, 
  Mail,
  Award 
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consultation",
    description: "Security begins with strategy."
  },
  {
    icon: Bug,
    title: "VAPT & Red Team Assessment",
    description: "Simulated attacks. Real protection."
  },
  {
    icon: Code,
    title: "Source Code Review",
    description: "Clean code is secure code."
  },
  {
    icon: Cloud,
    title: "Cloud Security Assessment",
    description: "Fortify your cloud infrastructure."
  },
  {
    icon: Eye,
    title: "SIEM/SOC & Threat Intelligence",
    description: "Monitor. Detect. Respond."
  },
  {
    icon: Globe,
    title: "Dark Web Monitoring",
    description: "Find leaks before criminals do."
  },
  {
    icon: AlertTriangle,
    title: "Incident Response & DIFR",
    description: "Act fast. Minimize damage."
  },
  {
    icon: FileCheck,
    title: "Compliance & Risk Management",
    description: "Achieve ISO 27001, GDPR, and more."
  },
  {
    icon: Mail,
    title: "Phishing Simulation & Training",
    description: "Empower your people."
  },
  {
    icon: Award,
    title: "CTF & Cybersecurity Trainings",
    description: "Learn by hacking — ethically."
  }
];

export const ServicesGrid = () => {
  return (
    <section id="services" className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive cybersecurity solutions tailored to your needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cyber-glow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:shadow-glow transition-shadow">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
