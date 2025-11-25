import { motion } from "framer-motion";
import { Shield, AlertTriangle, Database } from "lucide-react";
import { useState, useEffect } from "react";

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  delay: number;
}

const StatItem = ({ icon: Icon, value, suffix, label, prefix = "", delay }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep));
      } else {
        setCount(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="relative group"
    >
      <div className="glass rounded-2xl p-8 text-center cyber-glow hover:scale-105 transition-all duration-500">
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2
          }}
          className="inline-block mb-4"
        >
          <Icon className="w-12 h-12 text-primary" />
        </motion.div>
        <div className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-gradient">
            {prefix}{count.toLocaleString()}{suffix}
          </span>
        </div>
        <p className="text-muted-foreground text-sm md:text-base">{label}</p>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  return (
    <section className="container px-4 py-24 relative">
      {/* Animated Background Orbs */}
      <div className="gradient-orb w-96 h-96 bg-blue-500 top-0 left-1/4" style={{ animationDelay: '0s' }} />
      <div className="gradient-orb w-96 h-96 bg-purple-500 bottom-0 right-1/4" style={{ animationDelay: '2s' }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Why You Need <span className="text-gradient">Secure Software?</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        <StatItem
          icon={AlertTriangle}
          value={2199}
          suffix="+"
          label="Cyber Attacks per Day"
          delay={0.2}
        />
        <StatItem
          icon={Shield}
          value={10}
          suffix="+"
          label="Billion - Global Cybercrime Costs (2025)"
          prefix="$"
          delay={0.4}
        />
        <StatItem
          icon={Database}
          value={5000}
          suffix="+"
          label="Million Compromised Records (2023)"
          delay={0.6}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12 text-lg text-muted-foreground max-w-2xl mx-auto relative z-10"
      >
        Cyber threats evolve every second. The only safe time to act —{" "}
        <span className="text-white font-semibold">is now.</span>
      </motion.p>
    </section>
  );
};
