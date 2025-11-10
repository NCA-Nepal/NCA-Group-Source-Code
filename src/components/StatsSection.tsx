import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StatItem = ({ value, label, prefix = "" }: { value: number; label: string; prefix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <span className="text-gradient">
          {prefix}{count.toLocaleString()}+
        </span>
      </div>
      <p className="text-sm md:text-base text-muted-foreground">{label}</p>
    </motion.div>
  );
};

export const StatsSection = () => {
  return (
    <section className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Why Do You Need a <br />
          <span className="text-gradient">Cybersecurity Solution Provider?</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <StatItem value={2199} label="Cyber Attacks per Day" prefix="🧨 " />
        <StatItem value={10} label="Billion - Global Cybercrime Costs (2025)" prefix="💸 $" />
        <StatItem value={5000} label="Million Compromised Records (2023)" prefix="🔓 " />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center text-lg md:text-xl text-muted-foreground mt-12 max-w-2xl mx-auto"
      >
        Cyber threats grow every second. The only safe time to act —{" "}
        <span className="text-white font-medium">is now.</span>
      </motion.p>
    </section>
  );
};
