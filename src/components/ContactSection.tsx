import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Talk <span className="text-gradient">Security</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Reach out to our experts — we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-lg">info@ncasecurity.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-lg">+977-XXXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-lg">Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Follow Us</p>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full hover:shadow-glow">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:shadow-glow">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:shadow-glow">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-6 cyber-glow"
          >
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background/50"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background/50"
            />
            <Input
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-background/50"
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-background/50 resize-none"
            />
            <Button type="submit" className="button-gradient w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};
