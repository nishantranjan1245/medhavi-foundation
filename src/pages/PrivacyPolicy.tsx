import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, UserCheck, Bell } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import legalHero from "@/assets/legal-hero.jpg";
import privacyDataSecurity from "@/assets/privacy-data-security.jpg";
import privacyVolunteerSignup from "@/assets/privacy-volunteer-signup.jpg";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal identification information (name, email address, phone number, mailing address) when you donate, volunteer, or contact us.",
        "Payment information processed securely through third-party payment gateways for donations.",
        "Usage data including IP address, browser type, pages visited, and time spent on our website.",
        "Information provided through forms, surveys, or newsletter subscriptions.",
      ],
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "To process donations and issue tax receipts under Section 80G.",
        "To communicate about our environmental initiatives, events, and volunteer opportunities.",
        "To improve our website experience and tailor content to your interests.",
        "To comply with legal obligations and regulatory requirements.",
      ],
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: [
        "We implement industry-standard encryption (SSL/TLS) to protect data transmission.",
        "Access to personal data is restricted to authorized personnel only.",
        "We conduct regular security audits and vulnerability assessments.",
        "Payment data is never stored on our servers — processed by PCI-compliant gateways.",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Right to access, correct, or delete your personal information at any time.",
        "Right to opt-out of marketing communications and newsletters.",
        "Right to request a copy of all data we hold about you.",
        "Right to lodge a complaint with the relevant data protection authority.",
      ],
    },
    {
      icon: Shield,
      title: "Third-Party Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "Data may be shared with trusted service providers who assist in operating our website and processing donations.",
        "We may disclose information if required by law or to protect our rights and safety.",
        "All third-party partners are bound by strict confidentiality agreements.",
      ],
    },
    {
      icon: Bell,
      title: "Updates to This Policy",
      content: [
        "This policy may be updated periodically to reflect changes in our practices.",
        "Significant changes will be communicated via email or website notification.",
        "Continued use of our website after changes constitutes acceptance of the updated policy.",
        "Last updated: February 2026.",
      ],
    },
  ];

  const imageBreaks = [
    { afterIndex: 1, src: privacyVolunteerSignup, alt: "Volunteers signing up at Medhavi Foundation registration desk" },
    { afterIndex: 3, src: privacyDataSecurity, alt: "Medhavi Foundation team ensuring data security and privacy" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={legalHero} alt="Medhavi Foundation team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container-custom relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-primary/30">
              <Shield className="inline h-4 w-4 mr-2" />Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Your privacy matters to us. Learn how Medhavi Foundation collects, uses, and protects your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Medhavi Foundation (CIN: U80903DL2012NPL238611, Registration No. 238611), managed by Directors Pravesh Dudani, Aditi Dudani, and Kuldip Sarma, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. By using our website, you consent to the practices described in this policy.
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            {sections.map((section, index) => {
              const imageBreak = imageBreaks.find(ib => ib.afterIndex === index);
              return (
                <div key={index}>
                  <AnimatedSection delay={index * 0.1}>
                    <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-golden transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <section.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-display font-bold text-foreground">{section.title}</h2>
                      </div>
                      <ul className="space-y-3">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                  {imageBreak && (
                    <AnimatedSection delay={0.2}>
                      <div className="mt-10 rounded-2xl overflow-hidden shadow-golden">
                        <img src={imageBreak.src} alt={imageBreak.alt} className="w-full h-64 md:h-80 object-cover" />
                      </div>
                    </AnimatedSection>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 bg-secondary text-secondary-foreground rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-display font-bold mb-4">Questions About Privacy?</h3>
              <p className="text-secondary-foreground/80 mb-6">If you have any questions about this Privacy Policy, please contact us.</p>
              <a href="mailto:info@medhavifoundation.org.in" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-golden transition-all">
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
