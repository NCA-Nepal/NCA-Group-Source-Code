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
            Our Mission: Building Digital Trust <br />
            <span className="text-gradient">Through Security</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We deliver tailored cybersecurity solutions that combine human expertise, 
            advanced technology, and continuous innovation to protect organizations of every scale.
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
