import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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

const Career = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    skills: "",
    message: "",
    portfolio: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Obfuscated webhook URL
      const parts = ["https://discord.com/api/webhooks/", "1444326789873795127", "/", "PuZB0QvIUf8MnxZUHF1vRx8k37Yy8B3CYSQ6DM2lmJ80Z9xFF1VesyXJ6ni_w8l8cGo1"];
      const webhookUrl = parts.join("");

      const payload = {
        embeds: [
          {
            title: "🚀 New Career Application",
            color: 3447003,
            fields: [
              { name: "Name", value: formData.name, inline: true },
              { name: "Email", value: formData.email, inline: true },
              { name: "Phone", value: formData.phone || "Not provided", inline: true },
              { name: "Position of Interest", value: formData.position, inline: false },
              { name: "Years of Experience", value: formData.experience, inline: true },
              { name: "Skills", value: formData.skills, inline: false },
              { name: "Portfolio/LinkedIn", value: formData.portfolio || "Not provided", inline: false },
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
          title: "Application Submitted!",
          description: "We'll review your application and contact you if there's a match.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          skills: "",
          message: "",
          portfolio: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at us@ncateam.xyz",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 pt-24 sm:pt-32 pb-12 sm:pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Join <span className="text-gradient">N.C.A. Group</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Be part of a team that develops secure software
            </p>
          </div>

          {/* Open Positions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16 sm:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Currently Open Positions
            </h2>
            <div className="grid gap-6">
              {/* Position Card 1 */}
              <div className="glass rounded-2xl p-6 md:p-8 cyber-glow hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Senior Security Analyst</h3>
                    <p className="text-muted-foreground mb-4">Full-time • Remote/Hybrid • Kathmandu</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">VAPT</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Red Team</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">5+ years</span>
                    </div>
                  </div>
                  <Button className="button-gradient whitespace-nowrap">Apply Now</Button>
                </div>
              </div>

              {/* Position Card 2 */}
              <div className="glass rounded-2xl p-6 md:p-8 cyber-glow hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
                    <p className="text-muted-foreground mb-4">Full-time • Remote/Hybrid • Kathmandu</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">3+ years</span>
                    </div>
                  </div>
                  <Button className="button-gradient whitespace-nowrap">Apply Now</Button>
                </div>
              </div>

              {/* Position Card 3 */}
              <div className="glass rounded-2xl p-6 md:p-8 cyber-glow hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">DevOps Engineer</h3>
                    <p className="text-muted-foreground mb-4">Full-time • Remote/Hybrid • Kathmandu</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AWS</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Docker</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">3+ years</span>
                    </div>
                  </div>
                  <Button className="button-gradient whitespace-nowrap">Apply Now</Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* General Application Section */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Don't See Any Open Positions? <span className="text-gradient">No Problem!</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Apply below with what you can help us with, and we'll reach out if there's a match.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 cyber-glow"
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
                  <Label htmlFor="position">Position of Interest *</Label>
                  <Select
                    required
                    value={formData.position}
                    onValueChange={(value) => setFormData({ ...formData, position: value })}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="security-analyst">Security Analyst</SelectItem>
                      <SelectItem value="penetration-tester">Penetration Tester</SelectItem>
                      <SelectItem value="security-engineer">Security Engineer</SelectItem>
                      <SelectItem value="fullstack-developer">Fullstack Developer</SelectItem>
                      <SelectItem value="frontend-developer">Frontend Developer</SelectItem>
                      <SelectItem value="backend-developer">Backend Developer</SelectItem>
                      <SelectItem value="mobile-developer">Mobile Developer</SelectItem>
                      <SelectItem value="devops-engineer">DevOps Engineer</SelectItem>
                      <SelectItem value="ui-ux-designer">UI/UX Designer</SelectItem>
                      <SelectItem value="project-manager">Project Manager</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Select
                  required
                  value={formData.experience}
                  onValueChange={(value) => setFormData({ ...formData, experience: value })}
                >
                  <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years (Entry Level)</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Key Skills & Technologies *</Label>
                <Textarea
                  id="skills"
                  required
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary min-h-[100px]"
                  placeholder="e.g., Python, React, Burp Suite, AWS, Docker..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio / LinkedIn / GitHub</Label>
                <Input
                  id="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell Us About Yourself</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-primary min-h-[120px]"
                  placeholder="Share your experience, what you're passionate about, and how you can contribute to N.C.A. Group..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full button-gradient py-6 text-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Career;
