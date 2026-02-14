import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, PieChart, Shield, Award, CheckCircle } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const reports = [
  { title: "Annual Report 2024-25", type: "Annual Report", icon: FileText },
  { title: "Financial Statement 2024-25", type: "Financial", icon: PieChart },
  { title: "Impact Assessment Report", type: "Impact", icon: Award },
  { title: "Annual Report 2023-24", type: "Annual Report", icon: FileText },
  { title: "Financial Statement 2023-24", type: "Financial", icon: PieChart },
];

const commitments = [
  "100% of donations directed to programs",
  "Regular financial audits by independent auditors",
  "Published annual reports and impact assessments",
  "Open governance and decision-making processes",
];

const Transparency = () => {
  return (
    <div>
      <PageHero
        title="Transparency"
        subtitle="We believe in complete accountability and openness in everything we do"
        backgroundImage={heroBanner}
      />

      {/* Commitment */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider font-body">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Accountability at Every Step
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 font-body">
                Medhavi Foundation is committed to the highest standards of transparency and
                governance. We believe every donor and supporter has the right to know exactly
                how their contributions are being used.
              </p>
              <ul className="space-y-3">
                {commitments.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground text-sm font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-accent rounded-2xl p-8 md:p-10 text-center">
                <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Registered NGO</h3>
                <p className="text-muted-foreground text-sm font-body">
                  Medhavi Foundation is a registered non-profit organization under the
                  applicable Indian laws. All donations are eligible for tax benefits.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider font-body">
              Documents
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Reports & Documents
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-4">
            {reports.map((report, index) => (
              <AnimatedSection key={report.title} delay={index * 0.08}>
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-shadow duration-300 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <report.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{report.title}</h4>
                      <span className="text-xs text-muted-foreground font-body">
                        {report.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-foreground mb-4">Have Questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto font-body">
              We're happy to answer any questions about our operations, finances, or impact.
              Reach out to us anytime.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Transparency;
