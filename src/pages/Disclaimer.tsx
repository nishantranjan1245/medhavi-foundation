import { motion } from "framer-motion";
import { AlertTriangle, Info, ExternalLink, ShieldAlert, BookOpen, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import legalHero from "@/assets/legal-hero.jpg";
import disclaimerFieldwork from "@/assets/disclaimer-fieldwork.jpg";
import disclaimerCommunity from "@/assets/disclaimer-community.jpg";

const Disclaimer = () => {
  const sections = [
    {
      icon: Info,
      title: "General Disclaimer",
      content: [
        "The information provided on this website is for general informational purposes only.",
        "While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind.",
        "Any reliance you place on the information on this website is strictly at your own risk.",
        "Medhavi Foundation shall not be liable for any loss or damage arising from the use of this website.",
      ],
    },
    {
      icon: BookOpen,
      title: "Content Accuracy",
      content: [
        "Project statistics, impact numbers, and progress reports are based on our best available data.",
        "Environmental impact measurements are estimated using industry-standard methodologies.",
        "Photographs and media on this website represent actual activities and beneficiaries with their consent.",
        "We update our content regularly, but some information may not reflect the most current developments.",
      ],
    },
    {
      icon: ExternalLink,
      title: "External Links",
      content: [
        "Our website may contain links to third-party websites that are not under our control.",
        "We have no control over the nature, content, and availability of those external sites.",
        "Inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed.",
        "We are not responsible for any loss or damage caused by the use of any third-party website.",
      ],
    },
    {
      icon: ShieldAlert,
      title: "No Professional Advice",
      content: [
        "Nothing on this website constitutes legal, financial, or professional advice.",
        "For specific advice regarding donations, tax benefits, or legal matters, consult qualified professionals.",
        "Information about Section 80G tax benefits is provided as general guidance and may vary based on individual circumstances.",
        "Environmental data and recommendations should not replace professional environmental assessments.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, Medhavi Foundation excludes all liability for damages.",
        "This includes but is not limited to direct, indirect, incidental, and consequential damages.",
        "We are not liable for any loss of data, revenue, or goodwill arising from website use.",
        "Our liability in any case shall not exceed the amount of donation made by the user, if any.",
      ],
    },
    {
      icon: MessageSquare,
      title: "User-Generated Content",
      content: [
        "Views expressed in testimonials and comments are those of the individuals and not of Medhavi Foundation.",
        "We reserve the right to remove any content that violates our community guidelines.",
        "By submitting content, you grant us a non-exclusive right to use it for promotional purposes.",
        "We do not guarantee the accuracy of user-generated content shared on our platforms.",
      ],
    },
  ];

  const imageBreaks = [
    { afterIndex: 1, src: disclaimerFieldwork, alt: "Medhavi Foundation team conducting environmental fieldwork" },
    { afterIndex: 4, src: disclaimerCommunity, alt: "Community members sharing feedback at Medhavi Foundation event" },
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
              <AlertTriangle className="inline h-4 w-4 mr-2" />Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              <span className="text-primary">Disclaimer</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Important information about the use of our website and the limitations of our content.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              This disclaimer governs your use of the Medhavi Foundation website (CIN: U80903DL2012NPL238611, Registration No. 238611). The company is managed by Directors Pravesh Dudani, Aditi Dudani, and Kuldip Sarma. By continuing to use this website, you acknowledge that you have read and understood this disclaimer.
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
              <h3 className="text-2xl font-display font-bold mb-4">Have Concerns?</h3>
              <p className="text-secondary-foreground/80 mb-6">We're happy to address any questions about this disclaimer.</p>
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

export default Disclaimer;
