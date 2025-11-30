import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="glass rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and N.C.A. Group Pvt. Ltd. ("NCA," "we," "us," or "our") governing your access to and use of our websites, platforms, applications, and services (collectively, the "Services"). By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must discontinue use of our Services immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Scope of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NCA provides comprehensive cybersecurity and software development solutions, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Vulnerability Assessment and Penetration Testing (VAPT)</li>
                <li>Security Operations Center (SOC) services and threat monitoring</li>
                <li>Incident response and digital forensics</li>
                <li>Cloud security assessments and compliance audits</li>
                <li>Custom software development (web, mobile, and API)</li>
                <li>Learning Management Systems (LMS) and educational platforms</li>
                <li>UI/UX design and system administration services</li>
                <li>Cybersecurity training and consultation</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Specific terms for individual services may be outlined in separate agreements or statements of work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Eligibility and Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To access certain features of our Services, you may be required to register for an account. You represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>You are at least 18 years of age and have the legal capacity to enter into binding contracts</li>
                <li>All registration information you provide is accurate, current, and complete</li>
                <li>You will maintain the security of your account credentials</li>
                <li>You will promptly update your account information to keep it accurate</li>
                <li>You are responsible for all activities that occur under your account</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, abusive, or illegal activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Acceptable Use Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using our Services, you agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Use our Services for any unlawful, fraudulent, or malicious purposes</li>
                <li>Attempt to gain unauthorized access to our systems, networks, or data</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Engage in activities that could damage, disable, or impair our infrastructure</li>
                <li>Use automated systems (bots, scrapers) without our express written permission</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Collect or harvest information about other users without consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content, materials, trademarks, logos, software, and technology provided through our Services are the exclusive property of NCA or our licensors and are protected by intellectual property laws. This includes but is not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Website design, graphics, and user interfaces</li>
                <li>Proprietary software, code, and algorithms</li>
                <li>Documentation, methodologies, and technical materials</li>
                <li>NCA trademarks, service marks, and branding elements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You are granted a limited, non-exclusive, non-transferable license to access and use our Services for their intended purpose. You may not copy, modify, distribute, sell, or create derivative works from our content without explicit written authorization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For engagement-based services (such as security assessments or custom development), clients agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate project requirements and timely feedback</li>
                <li>Grant necessary access to systems, environments, and documentation</li>
                <li>Ensure proper authorization for security testing activities</li>
                <li>Maintain appropriate backups of critical data and systems</li>
                <li>Review and approve deliverables within agreed timeframes</li>
                <li>Comply with payment terms outlined in service agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Payment and Fees</h2>
              <p className="text-muted-foreground leading-relaxed">
                Service fees, payment terms, and billing schedules will be specified in your service agreement or proposal. Unless otherwise stated, all fees are non-refundable. Late payments may incur additional charges and may result in suspension of services. We reserve the right to modify our pricing with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to maintain the confidentiality of proprietary information exchanged during service engagements. NCA will handle your data and business information with strict confidentiality in accordance with our Privacy Policy and applicable data protection regulations. Specific confidentiality terms may be outlined in separate Non-Disclosure Agreements (NDAs).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>NCA provides Services on an "as is" and "as available" basis</li>
                <li>We make no warranties regarding uninterrupted, error-free, or secure service delivery</li>
                <li>Our liability for any claim arising from our Services is limited to the fees paid for the specific service in question</li>
                <li>We shall not be liable for indirect, incidental, consequential, or punitive damages</li>
                <li>This limitation applies regardless of the legal theory under which liability arises</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Some jurisdictions do not allow certain liability limitations, so these may not fully apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless NCA and its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our Services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Service Modifications and Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without prior notice. We may also terminate or suspend your access to Services for violation of these Terms or for any other reason at our discretion. Upon termination, your right to use the Services ceases immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these Terms or your use of our Services shall first be resolved through good-faith negotiation. If negotiations fail, disputes shall be resolved through binding arbitration in accordance with the laws of Nepal. The arbitration shall be conducted in Dhulikhel, Nepal, and the decision of the arbitrator shall be final and binding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Dhulikhel, Nepal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time to reflect changes in our practices, legal requirements, or business operations. Material changes will be communicated through our website or via email. Continued use of our Services after changes take effect constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Entire Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and NCA regarding the use of our Services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
