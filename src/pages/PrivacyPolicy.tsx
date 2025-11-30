import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <div className="container px-4 pt-32 pb-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="glass rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                N.C.A. Group Pvt. Ltd. and its affiliates (collectively "NCA," "we," "us," or "our") recognize the critical importance of safeguarding your personal information. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of your personal data when you interact with our services, websites, applications, and platforms (collectively, "Services").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Personal information refers to any data that can identify you as an individual. The types of personal information we may collect include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Contact details: name, email address, phone number, and postal address</li>
                <li>Professional information: company name, job title, and business details</li>
                <li>Account credentials: username, password, and authentication information</li>
                <li>Communication records: messages, inquiries, and support requests</li>
                <li>Technical data: IP address, browser type, device information, and usage analytics</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You may choose not to provide certain information; however, this may limit your access to specific features or services we offer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Sensitive Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not intentionally collect sensitive personal data such as health records, religious beliefs, political affiliations, racial or ethnic origin, or sexual orientation. We request that you refrain from sharing such information with us unless explicitly required for a specific service engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Collect Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Information You Provide</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you voluntarily provide when engaging with our Services, including when you create an account, request consultations, subscribe to newsletters, participate in surveys or events, contact our support team, or complete forms on our platforms.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Information from Third Parties</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may receive information about you from trusted third-party sources, business partners, public databases, or referral networks to enhance our understanding of your needs and improve our service delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Automatically Collected Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Services use cookies, web beacons, and similar technologies to automatically collect usage data, including pages visited, time spent on pages, links clicked, session information, and technical device details. This helps us optimize user experience, maintain security, and analyze service performance.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your personal information for legitimate business purposes, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Delivering and managing the services you request</li>
                <li>Processing transactions and sending confirmations</li>
                <li>Communicating important updates, security alerts, and service notifications</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Improving our Services through analytics and performance monitoring</li>
                <li>Conducting research and development to enhance our offerings</li>
                <li>Sending marketing communications about our services (with your consent)</li>
                <li>Ensuring security, preventing fraud, and protecting our legal rights</li>
                <li>Complying with legal obligations and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information with trusted parties under strict confidentiality agreements:
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Service Providers</h3>
                  <p className="text-muted-foreground">Third-party vendors who assist us in delivering our Services, such as hosting providers, payment processors, and analytics platforms.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Business Partners</h3>
                  <p className="text-muted-foreground">Trusted partners who collaborate with us to provide integrated solutions or complementary services.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Legal Requirements</h3>
                  <p className="text-muted-foreground">When required by law, regulatory authorities, legal proceedings, or to protect our rights, property, and safety or that of others.</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                NCA employs industry-standard security measures, including encryption, access controls, secure data centers, and regular security audits to protect your information from unauthorized access, disclosure, alteration, or destruction. While we implement robust safeguards, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary based on the nature of the information and applicable legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access and obtain a copy of your personal data</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Data portability to transfer your information to another service</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="mailto:us@ncateam.xyz" className="text-primary hover:underline">us@ncateam.xyz</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Marketing Communications</h2>
              <p className="text-muted-foreground leading-relaxed">
                With your consent, we may send you promotional materials about our services, industry insights, and special offers. You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly. Please note that even if you opt out of marketing messages, we may still send you essential service-related communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Services may contain links to external websites or applications operated by third parties. We are not responsible for the privacy practices or content of these third-party services. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take immediate steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries outside your jurisdiction. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices, technologies, legal requirements, or business operations. We will notify you of material changes by posting the updated policy on our website with a revised "Last Updated" date. We encourage you to review this policy regularly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-foreground">
                  <strong>N.C.A. Group Pvt. Ltd.</strong>
                </p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:us@ncateam.xyz" className="text-primary hover:underline">us@ncateam.xyz</a>
                </p>
                <p className="text-muted-foreground">
                  Location: Dhulikhel, Nepal
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
