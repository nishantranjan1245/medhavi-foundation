import { motion } from "framer-motion";
import { RotateCcw, CreditCard, Clock, CheckCircle, HelpCircle, FileWarning } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import legalHero from "@/assets/legal-hero.jpg";
import refundSupport from "@/assets/refund-support.jpg";
import refundDonors from "@/assets/refund-donors.jpg";

const RefundPolicy = () => {
  const sections = [
    {
      icon: CreditCard,
      title: "Donation Refund Policy",
      content: [
        "All donations to Medhavi Foundation are generally considered final and non-refundable.",
        "Donations are used immediately for ongoing environmental conservation projects and tree plantations.",
        "We encourage donors to carefully review the donation amount before completing the transaction.",
        "Recurring donation subscriptions can be cancelled at any time to prevent future charges.",
      ],
    },
    {
      icon: RotateCcw,
      title: "Eligible Refund Scenarios",
      content: [
        "Duplicate transactions caused by technical errors will be fully refunded.",
        "Unauthorized transactions reported within 48 hours of the charge.",
        "Incorrect amount charged due to a system error on our payment gateway.",
        "Donations made by minors without parental or guardian consent.",
      ],
    },
    {
      icon: Clock,
      title: "Refund Process & Timeline",
      content: [
        "Refund requests must be submitted within 7 days of the transaction date.",
        "Submit your request via email to info@medhavifoundation.org.in with transaction details.",
        "Approved refunds will be processed within 10-15 business days.",
        "Refunds will be credited to the original payment method used for the donation.",
      ],
    },
    {
      icon: FileWarning,
      title: "Non-Refundable Items",
      content: [
        "Donations where a tax receipt (80G certificate) has already been issued and claimed.",
        "Sponsorship amounts for specific projects that have already commenced.",
        "Event registration fees after the event has been attended.",
        "Merchandise or material purchases that have been delivered and used.",
      ],
    },
    {
      icon: CheckCircle,
      title: "Cancellation of Recurring Donations",
      content: [
        "You may cancel recurring donations at any time by contacting us via email.",
        "Cancellation will take effect from the next billing cycle.",
        "Already processed donations in the current cycle are non-refundable.",
        "You will receive a confirmation email upon successful cancellation.",
      ],
    },
    {
      icon: HelpCircle,
      title: "Dispute Resolution",
      content: [
        "For any payment disputes, please contact us within 30 days of the transaction.",
        "We aim to resolve all disputes amicably and within 15 business days.",
        "If unresolved, disputes shall be subject to the jurisdiction of courts in New Delhi, India.",
        "Our team is available to assist you with any concerns regarding your donation.",
      ],
    },
  ];

  const imageBreaks = [
    { afterIndex: 1, src: refundSupport, alt: "Medhavi Foundation staff helping donors with paperwork" },
    { afterIndex: 3, src: refundDonors, alt: "Donors receiving 80G tax certificates at Medhavi Foundation" },
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
              <RotateCcw className="inline h-4 w-4 mr-2" />Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Refund <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Our commitment to transparency in all financial matters including donations and refunds.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              At Medhavi Foundation (CIN: U80903DL2012NPL238611, Registration No. 238611), managed by Directors Pravesh Dudani, Aditi Dudani, and Kuldip Sarma, we value the trust our donors place in us. This Refund Policy outlines the circumstances under which refunds may be granted and the process for requesting one.
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
              <h3 className="text-2xl font-display font-bold mb-4">Need a Refund?</h3>
              <p className="text-secondary-foreground/80 mb-6">Contact us with your transaction details and we'll assist you promptly.</p>
              <a href="mailto:info@medhavifoundation.org.in" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-golden transition-all">
                Request Refund
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
