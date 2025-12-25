import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Obfuscated webhook URL
      const parts = ["https://discord.com/api/webhooks/", "1444331214533034046", "/", "yK8JgPNhY94Vvaxiva3E5dxve06pp9HPtuhYQCgW4dVSKrOFhcshmIeXEf6v0kELhTEA"];
      const webhookUrl = parts.join("");

      const payload = {
        embeds: [
          {
            title: "📧 New Contact Form Submission",
            color: 5814783,
            fields: [
              { name: "Name", value: formData.name, inline: true },
              { name: "Email", value: formData.email, inline: true },
              { name: "Phone", value: formData.phone || "Not provided", inline: true },
              { name: "Company", value: formData.company || "Not provided", inline: true },
              { name: "Subject", value: formData.subject, inline: false },
              { name: "Timeline", value: formData.timeline, inline: true },
              { name: "Message", value: formData.message || "No message", inline: false },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          timeline: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or email us directly at info@ncagroup.com.np",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="container px-4 py-16 sm:py-24 relative overflow-visible">
      {/* Animated Background */}
      <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 top-0 left-1/4 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Talk <span className="text-gradient">Innovation & Security</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Reach out to our experts — we'll respond within 24 hours.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-12 cyber-glow"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary"
                  placeholder="+977 98XXXXXXXX"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">What are you interested in? *</Label>
              <Select
                required
                value={formData.subject}
                onValueChange={(value) => setFormData({ ...formData, subject: value })}
              >
                <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vapt">VAPT & Security Assessment</SelectItem>
                  <SelectItem value="red-team">Red Team Operations</SelectItem>
                  <SelectItem value="incident-response">Incident Response</SelectItem>
                  <SelectItem value="cloud-security">Cloud Security</SelectItem>
                  <SelectItem value="web-development">Web Application Development</SelectItem>
                  <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                  <SelectItem value="api-development">API Development</SelectItem>
                  <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                  <SelectItem value="consulting">General Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Project Timeline *</Label>
              <Select
                required
                value={formData.timeline}
                onValueChange={(value) => setFormData({ ...formData, timeline: value })}
              >
                <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">Urgent (Within 1 month)</SelectItem>
                  <SelectItem value="1-3-months">1-3 months</SelectItem>
                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                  <SelectItem value="6-plus-months">6+ months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Project Details *</Label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/5 border-white/10 focus:border-primary min-h-[150px]"
                placeholder="Tell us about your project, goals, and any specific requirements..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full button-gradient py-6 text-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Or email us directly at{" "}
              <a href="mailto:info@ncagroup.com.np" className="text-primary hover:underline">
                info@ncagroup.com.np
              </a>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};
