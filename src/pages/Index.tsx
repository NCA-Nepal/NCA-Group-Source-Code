import { motion } from "framer-motion";
import { Code2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { StatsSection } from "@/components/StatsSection";
import { AboutMission } from "@/components/AboutMission";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { securityServices, developmentServices } from "@/config/services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ncaLogo from "@/assets/nca-logo.png";
import LoadingScreen from "@/components/LoadingScreen";
import { useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20 overflow-hidden"
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Primary gradient orbs with enhanced glow */}
          <div className="gradient-orb w-[700px] h-[700px] bg-gradient-to-br from-blue-500 to-blue-600 top-[-100px] left-[-100px] blur-3xl" />
          <div className="gradient-orb w-[600px] h-[600px] bg-gradient-to-br from-purple-500 to-purple-600 top-[20%] right-[10%] blur-3xl opacity-80" style={{ animationDelay: '2s' }} />
          <div className="gradient-orb w-[500px] h-[500px] bg-gradient-to-br from-pink-500 to-pink-600 bottom-[-50px] right-[-50px] blur-3xl opacity-70" style={{ animationDelay: '4s' }} />
          
          {/* Secondary ambient glow layers */}
          <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-[20%] right-[30%] w-[350px] h-[350px] bg-purple-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          
          {/* Subtle grid overlay for depth */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full glass border border-white/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
        >
          <Shield className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium text-white">Secure Development</span>
          <span className="text-white/40">•</span>
          <Code2 className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-medium text-white">Advanced Security</span>
        </motion.div>
        
        <div className="max-w-6xl relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-left leading-[1.1]">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block text-white mb-2"
            >
              Build Secure.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-gradient mb-2"
            >
              Deploy Confident.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block text-white"
            >
              Scale <span className="text-gradient">Fearlessly.</span>
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl text-left leading-relaxed"
          >
            Where innovation meets security. We craft{" "}
            <span className="text-gradient font-semibold">cutting-edge digital solutions</span>{" "}
            fortified with{" "}
            <span className="text-gradient font-semibold">enterprise-grade security</span>{" "}
            — from concept to deployment, we've got you covered.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-start mb-20"
          >
            <Button 
              size="lg" 
              className="button-gradient text-base px-8 py-6 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-300"
              onClick={() => window.open('https://calendly.com/rezydev/30min', '_blank')}
            >
              Book a Consultation →
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 hover:border-primary hover:bg-white/10 text-base px-8 py-6 rounded-full backdrop-blur-sm hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
              onClick={() => document.getElementById('security-services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </motion.div>

        </div>
      </motion.section>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-black to-background">
        <StatsSection />
      </div>

      {/* About Mission Section */}
      <div id="about" className="bg-background">
        <AboutMission />
      </div>

      {/* Security Services */}
      <div className="bg-gradient-to-b from-background to-black">
        <ServicesCarousel 
          title="What NCA Security Serves"
          subtitle="Comprehensive cybersecurity solutions protecting your digital assets 24/7"
          services={securityServices}
          sectionId="security-services"
        />
      </div>

      {/* Development Services */}
      <div className="bg-black">
        <ServicesCarousel 
          title="What NCA Solutions Serves"
          subtitle="Innovative development services transforming ideas into powerful digital experiences"
          services={developmentServices}
          sectionId="development-services"
        />
      </div>

      {/* Why Choose Us */}
      <div className="bg-black">
        <WhyChooseUs />
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-b from-black to-background">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-24 relative bg-background overflow-hidden">
        <div className="gradient-orb w-[500px] h-[500px] bg-gradient-to-br from-blue-500 to-blue-600 top-1/2 left-0 blur-3xl" />
        <div className="gradient-orb w-[500px] h-[500px] bg-gradient-to-br from-purple-500 to-purple-600 top-1/2 right-0 blur-3xl" style={{ animationDelay: '2s' }} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 md:p-16 text-center relative z-10 cyber-glow max-w-4xl mx-auto border border-white/20 shadow-[0_0_80px_rgba(59,130,246,0.15)]"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to <span className="text-gradient">Transform Your Digital Future?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build something extraordinary together. Book a free consultation and discover how we can elevate your business with secure, innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="button-gradient px-8 py-6 text-base rounded-full shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-300"
              onClick={() => window.open('https://calendly.com/rezydev/30min', '_blank')}
            >
              Book a 30-Minute Call →
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 hover:border-primary hover:bg-white/10 px-8 py-6 text-base rounded-full backdrop-blur-sm hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <div className="bg-gradient-to-b from-background to-black">
        <ContactSection />
      </div>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
