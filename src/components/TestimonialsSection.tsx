"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Michael Chen",
    role: "CTO, Tech Enterprise",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Our organization's security posture transformed completely after their assessment — highly recommended. The team's expertise in cloud security and incident response is unmatched."
  },
  {
    name: "Sarah Johnson",
    role: "CISO, Financial Services",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "NCA Security's proactive approach to threat detection and their 24/7 SOC operations have given us peace of mind. Their reports are detailed and actionable."
  },
  {
    name: "David Wilson",
    role: "VP of Engineering, Healthcare",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "The VAPT assessment uncovered vulnerabilities we didn't know existed. Their red team assessment was thorough and professional. Compliance made simple."
  },
  {
    name: "Emily Zhang",
    role: "Security Director, E-commerce",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Working with NCA Security has been transformative. Their dark web monitoring caught a potential breach before it escalated. Exceptional service and expertise."
  },
  {
    name: "James Rodriguez",
    role: "IT Manager, Manufacturing",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "Their incident response team is incredibly fast and efficient. When we faced a security incident, they contained it within hours. Professional and reliable."
  },
  {
    name: "Lisa Thompson",
    role: "Compliance Officer, FinTech",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "NCA Security helped us achieve ISO 27001 certification with minimal disruption. Their compliance expertise and structured approach made the entire process smooth."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by <span className="text-gradient">Industry Leaders</span></h2>
          <p className="text-muted-foreground text-lg">
            Protecting organizations across multiple industries
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;