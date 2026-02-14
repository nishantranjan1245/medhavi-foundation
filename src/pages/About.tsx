import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Leaf, Target, Eye, Heart, Shield, Lightbulb, Users,
  ArrowRight, TreePine, Award, MapPin, Globe, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import aboutHero from "@/assets/about-hero.jpg";
import aboutFounder from "@/assets/about-founder.jpg";
import aboutJourney from "@/assets/about-journey.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutCommunity from "@/assets/about-community.jpg";
import volunteersTeam from "@/assets/volunteers-team.jpg";

const values = [
  { icon: Leaf, title: "Sustainability", description: "Every initiative is designed for long-term environmental impact that lasts for generations." },
  { icon: Heart, title: "Compassion", description: "We care deeply about communities and the planet we share with every living being." },
  { icon: Users, title: "Community First", description: "Empowering people to become leaders of change in their own neighborhoods." },
  { icon: Shield, title: "Integrity", description: "100% transparent operations with every rupee accounted for and reported publicly." },
  { icon: Lightbulb, title: "Innovation", description: "Using Miyawaki forests, drone planting, and modern techniques for maximum green impact." },
  { icon: Target, title: "Measurable Impact", description: "Data-driven approach ensuring every action creates real, trackable environmental change." },
];

const milestones = [
  { year: "2019", title: "Foundation Born", description: "Started with 5 passionate environmentalists in South Delhi with a dream to heal nature." },
  { year: "2020", title: "First 10,000 Trees", description: "Planted 10,000 native trees across Delhi NCR despite pandemic challenges." },
  { year: "2021", title: "River Cleanup Launch", description: "Began monthly Yamuna river restoration drives, removing tonnes of plastic waste." },
  { year: "2022", title: "50+ Communities", description: "Expanded to 50+ communities with regular cleanliness drives and awareness campaigns." },
  { year: "2023", title: "Miyawaki Forests", description: "Pioneered urban Miyawaki forests in 15 locations across Delhi and NCR region." },
  { year: "2024", title: "50,000+ Trees Milestone", description: "Crossed 50,000 trees planted with 10,000+ active volunteers nationwide." },
];

const stats = [
  { number: "50,000+", label: "Trees Planted", icon: TreePine },
  { number: "200+", label: "Green Events", icon: Award },
  { number: "10,000+", label: "Active Volunteers", icon: Users },
  { number: "50+", label: "Communities Served", icon: Globe },
];

const About = () => {
  return (
    <div>
      <PageHero
        title="About Medhavi Foundation"
        subtitle="We don't wait for change — we create it. One tree, one cleanup, one community at a time."
        backgroundImage={aboutHero}
      />

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                From a <span className="text-primary">Small Dream</span> to a Green Revolution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-body">
                Medhavi Foundation was born in 2019 from a simple yet powerful belief — that every 
                individual can make a meaningful contribution to environmental protection. What started 
                as a small group of 5 passionate environmentalists in South Delhi has now grown into 
                a movement of over 10,000 change-makers spanning communities across India.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 font-body">
                Our hands plant trees, our hearts clean rivers, and our voices rally communities 
                to stand up for nature. From Miyawaki urban forests to Yamuna river cleanups, we 
                bring innovation, passion, and science together to heal our planet — one green 
                action at a time.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-body">
                <MapPin className="h-4 w-4 text-primary" />
                DLF Tower-B Jasola, South Delhi, New Delhi — 110025
              </div>
              <Button variant="default" asChild>
                <Link to="/initiatives">
                  Explore Our Initiatives <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl" />
                <img
                  src={aboutFounder}
                  alt="Medhavi Foundation founder"
                  className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover relative"
                />
                <div className="absolute -bottom-6 -left-6 bg-secondary rounded-xl p-4 shadow-elevated hidden md:block">
                  <div className="text-2xl font-bold text-secondary-foreground font-display">Since 2019</div>
                  <div className="text-xs text-secondary-foreground/80 font-body">Serving Nature & People</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1d2930 0%, #2a3d47 50%, #1d2930 100%)' }}>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
              Numbers That Tell Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-white/70 mt-3 max-w-lg mx-auto font-body">
              Every number represents a real story of transformation, hope, and environmental healing.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-display">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-medium font-body">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Purpose & Direction
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-2">
              Our <span className="text-primary">Mission</span> & Vision
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft h-full border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-golden">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed font-body mb-4">
                  To protect and restore India's natural environment through grassroots action,
                  community engagement, and environmental education — creating a cleaner, greener,
                  and more sustainable future for all.
                </p>
                <ul className="space-y-2">
                  {["Plant 1 million trees by 2030", "Zero-waste communities across Delhi NCR", "Climate-literate youth in every school"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft h-full border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-golden">
                  <Eye className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed font-body mb-4">
                  An India where every community lives in harmony with nature, where clean air and
                  green spaces are accessible to all, and where future generations inherit a healthy,
                  thriving planet worth celebrating.
                </p>
                <ul className="space-y-2">
                  {["Green corridors in every Indian city", "Clean rivers free from plastic pollution", "Sustainable living as a way of life"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey / Timeline with Image */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl" />
                <img
                  src={aboutJourney}
                  alt="Medhavi Foundation massive tree plantation event"
                  className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover relative"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-8">
                Milestones of <span className="text-primary">Growth</span>
              </h2>
              <div className="space-y-6">
                {milestones.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold font-display text-sm">{item.year}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm font-body">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
                Our Team
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-2 mb-6">
                Dreamers, Doers & <span className="text-primary">Defenders</span> of Earth
              </h2>
              <p className="text-secondary-foreground/70 leading-relaxed mb-4 font-body">
                Behind every tree planted and every river cleaned is a dedicated team of passionate 
                individuals who believe in the power of collective action. Our team combines environmental 
                science, community organizing, and innovative technology to maximize our impact.
              </p>
              <p className="text-secondary-foreground/70 leading-relaxed mb-6 font-body">
                From seasoned environmentalists to young college volunteers, our diverse team brings 
                unique perspectives and unwavering energy to every project. Together, we are building 
                India's largest grassroots environmental movement.
              </p>
              <Button variant="hero" asChild>
                <Link to="/get-involved">
                  Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl" />
                <img
                  src={aboutTeam}
                  alt="Medhavi Foundation team planning"
                  className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover relative"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
              These principles guide every decision we make and every action we take.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08}>
                <div className="bg-card rounded-2xl p-7 border border-border hover:border-primary/40 transition-all duration-500 h-full group hover:-translate-y-2 shadow-soft">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-golden transition-all duration-500">
                    <value.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact with Image */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl" />
                <img
                  src={aboutCommunity}
                  alt="Children and volunteers celebrating tree plantation"
                  className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover relative"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
                Community Impact
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-2 mb-6">
                Empowering the <span className="text-primary">Next Generation</span>
              </h2>
              <p className="text-secondary-foreground/70 leading-relaxed mb-4 font-body">
                We believe the future of our planet lies in the hands of today's children. That's why 
                we partner with schools, colleges, and youth organizations to create climate-literate 
                young leaders who understand the urgency of environmental action.
              </p>
              <p className="text-secondary-foreground/70 leading-relaxed mb-6 font-body">
                Through hands-on tree planting sessions, interactive workshops on waste management, 
                and engaging climate awareness campaigns, we've reached over 50,000 students across 
                Delhi NCR — inspiring them to become guardians of nature.
              </p>
              <Button variant="default" asChild>
                <Link to="/impact">
                  See Our Full Impact <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Corporate Information */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Official Details
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Corporate <span className="text-primary">Information</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Registration Details</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">Company Registration No.</span>
                      <p className="text-muted-foreground text-sm font-body">238611</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">CIN (Corporate Identification Number)</span>
                      <p className="text-muted-foreground text-sm font-body">U80903DL2012NPL238611</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">Registered Office</span>
                      <p className="text-muted-foreground text-sm font-body">Dtj-216 Dlf Tower-b Jasola, South Delhi, New Delhi, 110025</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Directors / Key Management</h3>
                <div className="space-y-4">
                  {[
                    { name: "Pravesh Dudani", role: "Director" },
                    { name: "Aditi Dudani", role: "Director" },
                    { name: "Kuldip Sarma", role: "Director" },
                  ].map((person) => (
                    <div key={person.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold text-sm">{person.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{person.name}</p>
                        <p className="text-muted-foreground text-xs font-body">{person.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <img
          src={volunteersTeam}
          alt="Volunteers working together"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Make a <span className="text-primary">Difference</span>?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 font-body text-lg">
              Whether you want to plant a tree, volunteer for a cleanup drive, or support our mission 
              financially — every action counts. Join thousands of change-makers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/get-involved">
                  Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-hero" size="xl" asChild>
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
