import { motion } from "framer-motion";
import { FileText, Scale, AlertTriangle, Users, Globe, RefreshCw } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import legalHero from "@/assets/legal-hero.jpg";
import termsVolunteers from "@/assets/terms-volunteers.jpg";
import termsDonation from "@/assets/terms-donation.jpg";

const TermsConditions = () => {
  const sections = [
    {
      icon: Globe,
      title: "Use of Website",
      content: [
        "This website is operated by Medhavi Foundation for informational and donation purposes.",
        "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.",
        "We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.",
        "Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.",
      ],
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      content: [
        "All content on this website, including text, images, logos, and graphics, is the property of Medhavi Foundation.",
        "You may not reproduce, distribute, or create derivative works without our prior written consent.",
        "The Medhavi Foundation name and logo are registered trademarks and may not be used without permission.",
        "Content shared on social media must credit Medhavi Foundation as the source.",
      ],
    },
    {
      icon: Scale,
      title: "Donations & Payments",
      content: [
        "All donations made through our website are voluntary and non-refundable unless stated otherwise in our Refund Policy.",
        "Tax exemption certificates under Section 80G will be issued for eligible donations.",
        "We use secure, PCI-compliant payment gateways to process all transactions.",
        "Medhavi Foundation reserves the right to decline any donation at its discretion.",
      ],
    },
    {
      icon: Users,
      title: "Volunteer Agreement",
      content: [
        "Volunteers must be at least 18 years of age or have parental/guardian consent.",
        "By registering as a volunteer, you agree to follow our code of conduct and safety guidelines.",
        "Medhavi Foundation is not liable for any injuries sustained during volunteer activities.",
        "Volunteer registrations may be accepted or declined at the foundation's discretion.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        "Medhavi Foundation shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website.",
        "We do not guarantee that the website will be error-free, uninterrupted, or free from viruses.",
        "Links to third-party websites are provided for convenience and do not constitute endorsement.",
        "We are not responsible for the content or practices of any linked third-party sites.",
      ],
    },
    {
      icon: RefreshCw,
      title: "Governing Law & Changes",
      content: [
        "These terms are governed by the laws of India, with jurisdiction in the courts of New Delhi.",
        "We reserve the right to update these terms at any time. Changes will be posted on this page.",
        "Continued use of the website after modifications constitutes acceptance of the updated terms.",
        "If any provision is found to be unenforceable, the remaining provisions shall remain in full force.",
      ],
    },
  ];

  const imageBreaks = [
    { afterIndex: 2, src: termsDonation, alt: "Medhavi Foundation donation event with team members" },
    { afterIndex: 3, src: termsVolunteers, alt: "Volunteers planting trees together at Medhavi Foundation drive" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={legalHero} alt="Medhavi Foundation team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container-custom relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-primary/30">
              <FileText className="inline h-4 w-4 mr-2" />Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Please read these terms carefully before using our website or services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              By accessing and using the Medhavi Foundation website, you accept and agree to be bound by these Terms and Conditions. Medhavi Foundation is registered under the Companies Act with Registration No. 238611 and CIN: U80903DL2012NPL238611. The company is managed by its Directors — Pravesh Dudani, Aditi Dudani, and Kuldip Sarma. If you do not agree with any part of these terms, please do not use our website.
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

          <AnimatedSection delay={0.3}>
            <div className="mt-12 bg-secondary text-secondary-foreground rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-display font-bold mb-4">Need Clarification?</h3>
              <p className="text-secondary-foreground/80 mb-6">If you have questions about these terms, reach out to our team.</p>
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

export default TermsConditions;
