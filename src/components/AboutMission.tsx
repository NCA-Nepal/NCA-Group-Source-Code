import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const metrics = [
  "100+ Successful VAPT Engagements",
  "24/7 SOC Operations",
  "Certified Experts: CPTS | OSCP | CEH"
];

export const AboutMission = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission: Innovate Boldly, <br />
            <span className="text-gradient">Secure Relentlessly</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We blend cutting-edge development with military-grade security — delivering solutions that don't just work today, but stand resilient tomorrow. Every line of code, every security layer, crafted with precision and purpose.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Badge 
                variant="outline" 
                className="text-sm px-6 py-3 rounded-full border-primary/30 hover:border-primary/60 hover:shadow-glow transition-all cursor-default"
              >
                {metric}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
