import { motion } from "framer-motion";
import ncaLogo from "@/assets/nca-logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <motion.img 
        src={ncaLogo} 
        alt="NCA" 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1, 0.95],
          opacity: [0, 1, 1]
        }}
        transition={{ 
          duration: 1,
          times: [0, 0.5, 1],
          ease: "easeOut"
        }}
        className="w-40 h-40 md:w-48 md:h-48 object-contain"
      />
    </motion.div>
  );
};

export default LoadingScreen;
