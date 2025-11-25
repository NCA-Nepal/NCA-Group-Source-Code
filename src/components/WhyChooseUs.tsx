import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "End-to-end security woven into every development phase",
  "Battle-tested solutions deployed across 100+ engagements",
  "Elite team: CPTS, OSCP, ISO certified experts",
  "24/7 threat monitoring with real-time incident response",
  "From startup MVPs to enterprise-scale infrastructure",
  "Transparent reporting that actually drives decisions"
];

export const WhyChooseUs = () => {
  return (
    <section className="container px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Forward-Thinking Companies <br />
            <span className="text-gradient">Choose NCA</span>
          </h2>
          
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.li
                key={reason}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="p-1 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg text-foreground">{reason}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl overflow-hidden cyber-glow"
        >
          <img
            src="/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
            alt="Security Operations Center"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
