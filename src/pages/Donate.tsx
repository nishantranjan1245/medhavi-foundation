import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TreePine, Heart, Star, Shield, CheckCircle, Users, Droplets, BookOpen, ArrowRight, Leaf, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";
import donateHero from "@/assets/donate-hero.jpg";
import donateImpact from "@/assets/donate-impact.jpg";
import donateCelebration from "@/assets/donate-celebration.jpg";

const tiers = [
  {
    icon: TreePine,
    name: "Seed",
    amount: "₹500",
    description: "Plant 5 trees and support one community cleanup event.",
    features: ["5 trees planted", "Certificate of appreciation", "Digital impact report", "Social media shoutout"],
  },
  {
    icon: Heart,
    name: "Sapling",
    amount: "₹2,000",
    description: "Sponsor a plantation drive and fund climate education for 50 students.",
    features: ["20 trees planted", "Sponsor a drive", "Named recognition on website", "Quarterly impact updates", "Exclusive event invites"],
    popular: true,
  },
  {
    icon: Star,
    name: "Forest",
    amount: "₹10,000",
    description: "Create a mini urban forest and fund a full semester of climate education.",
    features: ["100 trees planted", "Urban forest creation", "Full recognition & plaque", "Annual detailed report", "Site visit invitation", "VIP event access"],
  },
];

const impactAreas = [
  { icon: TreePine, title: "Tree Plantation", desc: "Every ₹100 plants one native tree that absorbs 22 kg of CO₂ annually", color: "bg-primary/10 text-primary" },
  { icon: Droplets, title: "River Cleanup", desc: "₹500 cleans 100 meters of riverbank and removes plastic waste", color: "bg-primary/10 text-primary" },
  { icon: BookOpen, title: "Education", desc: "₹1,000 provides climate education to 20 underprivileged students", color: "bg-primary/10 text-primary" },
  { icon: Leaf, title: "Miyawaki Forests", desc: "₹5,000 creates a dense urban forest patch that grows 10x faster", color: "bg-primary/10 text-primary" },
];

const donors = [
  { name: "Rajesh Kumar", amount: "₹10,000", message: "Proud to support this incredible mission for a greener India!" },
  { name: "Priya Sharma", amount: "₹5,000", message: "Medhavi Foundation truly walks the talk. Amazing transparency!" },
  { name: "Amit Verma", amount: "₹2,000", message: "My kids loved attending the tree plantation drive. Keep it up!" },
];

const Donate = () => {
  return (
    <div>
      {/* Hero Section — Radial Spotlight + Staggered Reveal */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with soft parallax on load */}
        <motion.div
          className="absolute inset-0"
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src={donateHero} alt="Support Medhavi Foundation" className="w-full h-full object-cover" />
        </motion.div>

        {/* Radial spotlight overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.75)_80%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />

        {/* Animated corner accents */}
        <motion.div
          className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-xl hidden md:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        <motion.div
          className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-primary/50 rounded-br-xl hidden md:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        />

        {/* Vertical text accent */}
        <motion.span
          className="absolute left-6 top-1/2 -translate-y-1/2 text-xs tracking-[0.3em] text-primary/40 font-body uppercase hidden lg:block"
          style={{ writingMode: "vertical-lr" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          medhavi foundation
        </motion.span>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Staggered text reveal */}
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 backdrop-blur-sm border border-primary/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Every Contribution Counts
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Support Our{" "}
            <span className="relative inline-block text-primary">
              Green
              {/* Highlight glow behind word */}
              <span className="absolute inset-0 bg-primary/15 blur-xl rounded-full -z-10" />
            </span>{" "}
            Mission
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-body mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Your generosity plants trees, cleans rivers, and educates communities. Together, we can build a sustainable future for India.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button variant="hero" size="xl" onClick={() => document.getElementById('donation-tiers')?.scrollIntoView({ behavior: 'smooth' })}>
              <Heart className="mr-2 h-5 w-5" /> Donate Now
            </Button>
            <Button variant="outline-hero" size="xl" asChild>
              <Link to="/transparency">
                <Shield className="mr-2 h-5 w-5" /> View Transparency
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-secondary py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "₹25L+", label: "Funds Raised" },
              { number: "50,000+", label: "Trees Planted" },
              { number: "1,200+", label: "Donors" },
              { number: "100%", label: "Transparency" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</h3>
                <p className="text-secondary-foreground/80 font-body text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate - with Image */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Donate</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Every Rupee Creates <span className="text-primary">Real Impact</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                At Medhavi Foundation, 100% of your donation goes directly to our environmental programs. We maintain complete transparency in how funds are utilized, and every donor receives regular updates on the tangible impact their contribution creates.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                From planting native trees to cleaning rivers and educating the next generation about climate change — your support makes it all possible. Join over 1,200 donors who trust us with their contributions.
              </p>
              <div className="space-y-4">
                {[
                  "100% of funds go directly to projects",
                  "Tax-deductible donations under Section 80G",
                  "Regular impact reports sent to every donor",
                  "Complete financial transparency on our website",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground font-body">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img src={donateImpact} alt="Children planting trees" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
                    Your donation brings smiles and greenery to communities
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Your Impact</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
              Where Your <span className="text-primary">Money</span> Goes
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
              Every rupee is carefully allocated to maximize environmental and social impact.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.1}>
                <motion.div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-golden transition-all duration-300 h-full text-center" whileHover={{ y: -6 }}>
                  <div className={`w-16 h-16 rounded-2xl ${area.color} flex items-center justify-center mx-auto mb-4`}>
                    <area.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{area.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section id="donation-tiers" className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Donation Plans</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
              Choose Your <span className="text-primary">Impact</span> Level
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
              Select a plan that suits you, or donate any custom amount. Every contribution matters.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
              <AnimatedSection key={tier.name} delay={index * 0.15}>
                <motion.div whileHover={{ y: -8 }} className={`bg-card rounded-2xl p-8 shadow-soft hover:shadow-golden transition-all duration-300 h-full flex flex-col relative ${tier.popular ? "ring-2 ring-primary shadow-golden" : ""}`}>
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-golden">
                      Most Popular
                    </span>
                  )}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <tier.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-4 font-display">{tier.amount}</div>
                  <p className="text-muted-foreground text-sm mb-6 font-body">{tier.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm font-body">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={tier.popular ? "hero" : "default"} className="w-full" size="lg" asChild>
                    <Link to="/contact">Donate {tier.amount}</Link>
                  </Button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Celebration Image + Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img src={donateCelebration} alt="Community celebrating plantation drive" className="w-full h-[450px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Donor Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
                What Our <span className="text-primary">Donors</span> Say
              </h2>
              <div className="space-y-6">
                {donors.map((donor, i) => (
                  <motion.div key={donor.name} className="bg-card rounded-xl p-5 shadow-soft" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                    <p className="text-muted-foreground font-body italic mb-3">"{donor.message}"</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground text-sm">{donor.name}</span>
                      <span className="text-primary font-bold text-sm">{donor.amount}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Trust & Transparency</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
              Your Trust is Our <span className="text-primary">Foundation</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "80G Certified", desc: "Tax benefits on all donations under Indian tax law" },
              { icon: Globe, title: "Published Reports", desc: "Annual financial reports available for public review" },
              { icon: Award, title: "Recognized NGO", desc: "Registered and compliant with all government regulations" },
              { icon: Users, title: "Community Trust", desc: "Trusted by 1,200+ donors and 100+ corporate partners" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-muted hover:shadow-golden transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="default" size="lg" className="shadow-golden" asChild>
              <Link to="/transparency">
                View Full Transparency Report <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}>
              Be the Change You Wish to See
            </h2>
            <p className="text-white/90 font-body text-lg max-w-2xl mx-auto mb-8">
              Every donation, big or small, takes us one step closer to a greener, cleaner, and more sustainable India. Start making a difference today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline-hero" size="xl" onClick={() => document.getElementById('donation-tiers')?.scrollIntoView({ behavior: 'smooth' })}>
                <Heart className="mr-2 h-5 w-5" /> Choose a Plan
              </Button>
              <Button variant="outline-hero" size="xl" asChild>
                <Link to="/contact">
                  <Users className="mr-2 h-5 w-5" /> Contact Us
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Donate;
