import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="container px-4 py-16 sm:py-24 relative overflow-visible">
      {/* Animated Background */}
      <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 top-0 right-1/4 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Talk <span className="text-gradient">Innovation & Security</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Reach out to our experts — we'll respond within 24 hours.
          </p>
        </div>

        <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 cyber-glow">
          <div className="grid gap-8">
            {/* Email */}
            <motion.a
              href="mailto:info@ncagroup.com.np"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-primary/30"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:shadow-glow transition-all">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                <p className="text-lg font-semibold group-hover:text-gradient transition-all">
                  info@ncagroup.com.np
                </p>
              </div>
            </motion.a>

            {/* Career */}
            <motion.a
              href="/career"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-primary/30"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:shadow-glow transition-all">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Want to Work With Us?</p>
                <p className="text-lg font-semibold group-hover:text-gradient transition-all">
                  View Career Page
                </p>
              </div>
            </motion.a>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4 pt-4"
            >
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
