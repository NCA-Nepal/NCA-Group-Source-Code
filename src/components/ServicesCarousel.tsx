import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServicesCarouselProps {
  title: string;
  subtitle: string;
  services: Service[];
  sectionId: string;
}

export const ServicesCarousel = ({ title, subtitle, services, sectionId }: ServicesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleServices = services.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section id={sectionId} className="container px-4 py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="gradient-orb w-96 h-96 bg-pink-500 top-1/4 right-0" style={{ animationDelay: '1s' }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {title.split(' ').map((word, i) => 
            word === 'NCA' ? (
              <span key={i} className="text-gradient">{word} </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visibleServices.map((service, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 cyber-glow"
            >
              <div className="flex flex-col h-full">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:shadow-glow transition-all duration-500 mb-4 inline-block w-fit">
                  <service.icon className="w-8 h-8 text-gradient" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
