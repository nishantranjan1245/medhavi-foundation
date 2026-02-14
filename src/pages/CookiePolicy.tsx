import { motion } from "framer-motion";
import { Cookie, Settings, BarChart3, Shield, ToggleLeft, HelpCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import legalHero from "@/assets/legal-hero.jpg";
import cookieBrowsing from "@/assets/cookie-browsing.jpg";
import cookieSecurity from "@/assets/cookie-security.jpg";

const CookiePolicy = () => {
  const sections = [
    {
      icon: Cookie,
      title: "What Are Cookies?",
      content: [
        "Cookies are small text files stored on your device when you visit our website.",
        "They help us remember your preferences and improve your browsing experience.",
        "Cookies do not contain personal information unless you have provided it to us.",
        "Both session cookies (temporary) and persistent cookies (long-term) may be used.",
      ],
    },
    {
      icon: Settings,
      title: "Types of Cookies We Use",
      content: [
        "Essential Cookies: Required for basic website functionality like navigation and secure areas.",
        "Analytics Cookies: Help us understand how visitors interact with our website using tools like Google Analytics.",
        "Functional Cookies: Remember your preferences such as language and region settings.",
        "Marketing Cookies: Used to deliver relevant advertisements and measure campaign effectiveness.",
      ],
    },
    {
      icon: BarChart3,
      title: "How We Use Cookies",
      content: [
        "To analyze website traffic and usage patterns to improve user experience.",
        "To remember your donation preferences and form entries for convenience.",
        "To personalize content and communications based on your interests.",
        "To measure the effectiveness of our awareness campaigns and outreach programs.",
      ],
    },
    {
      icon: Shield,
      title: "Cookie Security",
      content: [
        "All cookies are transmitted over secure HTTPS connections.",
        "We do not use cookies to collect sensitive personal or financial information.",
        "Third-party cookies are only from trusted partners who comply with data protection standards.",
        "Cookie data is never sold or shared with unauthorized third parties.",
      ],
    },
    {
      icon: ToggleLeft,
      title: "Managing Your Cookies",
      content: [
        "You can control and delete cookies through your browser settings at any time.",
        "Most browsers allow you to block cookies or alert you when a cookie is being set.",
        "Disabling essential cookies may affect the functionality of certain website features.",
        "You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.",
      ],
    },
    {
      icon: HelpCircle,
      title: "Updates & Contact",
      content: [
        "This Cookie Policy may be updated periodically to reflect changes in our practices.",
        "We will notify you of significant changes through our website.",
        "For questions about our cookie practices, please contact us at info@medhavifoundation.org.in.",
        "Last updated: February 2026.",
      ],
    },
  ];

  const imageBreaks = [
    { afterIndex: 1, src: cookieBrowsing, alt: "User browsing Medhavi Foundation website" },
    { afterIndex: 3, src: cookieSecurity, alt: "IT team ensuring website security at Medhavi Foundation" },
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
              <Cookie className="inline h-4 w-4 mr-2" />Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Cookie <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Learn how we use cookies to enhance your browsing experience on our website.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Medhavi Foundation uses cookies and similar technologies to provide you with a better experience. This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.
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
              <h3 className="text-2xl font-display font-bold mb-4">Cookie Questions?</h3>
              <p className="text-secondary-foreground/80 mb-6">Feel free to reach out if you need more information about our cookie practices.</p>
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

export default CookiePolicy;
