import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { StatsSection } from "@/components/StatsSection";
import { AboutMission } from "@/components/AboutMission";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
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
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Shield className="w-4 h-4 inline-block mr-2" />
            Next-gen cybersecurity protection
          </span>
        </motion.div>
        
        <div className="max-w-5xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-left leading-tight">
            <span className="text-white">Securing Your </span>
            <span className="text-gradient">Digital Frontier</span>
            <br />
            <span className="text-white">
              Protect. Prevent. <span className="text-gradient">Prevail.</span>
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl text-left"
          >
            Your trusted cybersecurity partner providing enterprise-grade protection for digital assets, 
            networks, and data —{" "}
            <span className="text-white font-medium">from consultation to incident response.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start mb-16"
          >
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={() => window.open('https://calendly.com/rezydev/30min', '_blank')}
            >
              Book a Consultation →
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:border-primary hover:bg-primary/5"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative mx-auto max-w-4xl"
          >
            <div className="glass rounded-2xl overflow-hidden cyber-glow p-4">
              <img
                src="https://placehold.co/1200x600/0a0a0a/4169e1?text=NCA+Security+Platform&font=raleway"
                alt="NCA Security Dashboard"
                className="w-full h-auto rounded-xl"
              />
            </div>
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

      {/* Services Grid */}
      <div className="bg-gradient-to-b from-background to-black">
        <ServicesGrid />
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
      <section className="container px-4 py-24 relative bg-background">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 md:p-16 text-center relative z-10 cyber-glow max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Fortify Your Business?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation and get expert insights into your organization's current security health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={() => window.open('https://calendly.com/rezydev/30min', '_blank')}
            >
              Book a 30-Minute Call →
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/5"
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
