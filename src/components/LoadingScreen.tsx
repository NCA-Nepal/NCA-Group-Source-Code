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
      transition={{ delay: 2.5, duration: 0.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1.1, 1],
          opacity: [0, 1, 1]
        }}
        transition={{ 
          duration: 1.5,
          times: [0, 0.6, 1],
          ease: "easeOut"
        }}
        className="relative"
      >
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0)",
              "0 0 40px rgba(59, 130, 246, 0.4)",
              "0 0 20px rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="rounded-full p-8"
        >
          <img 
            src={ncaLogo} 
            alt="NCA" 
            className="w-32 h-32 md:w-40 md:h-40"
          />
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
