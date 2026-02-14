import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  TreePine, Droplets, Sun, Users, Award, Heart, ArrowRight,
  Leaf, Globe, Shield, Flame, Wind, Flower2, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import heroBanner from "@/assets/hero-banner.jpg";
import treePlantation from "@/assets/tree-plantation.jpg";
import cleanlinessDrive from "@/assets/cleanliness-drive.jpg";
import climateAwareness from "@/assets/climate-awareness.jpg";
import volunteersTeam from "@/assets/volunteers-team.jpg";

const initiatives = [
  {
    icon: TreePine,
    title: "Tree Plantation",
    description:
      "Planting thousands of native trees across cities and villages, building oxygen corridors and restoring biodiversity for a healthier planet.",
    image: treePlantation,
  },
  {
    icon: Droplets,
    title: "Cleanliness Drives",
    description:
      "Transforming neighbourhoods through powerful community cleanups — reclaiming parks, rivers, and streets for a pollution-free tomorrow.",
    image: cleanlinessDrive,
  },
  {
    icon: Sun,
    title: "Climate Action Campaigns",
    description:
      "Running grassroots campaigns and sustainability workshops that empower people to adopt eco-friendly lifestyles and fight climate change.",
    image: climateAwareness,
  },
];

const stats = [
  { number: "50,000+", label: "Trees Given Life", icon: TreePine },
  { number: "200+", label: "Green Events", icon: Award },
  { number: "10,000+", label: "Change Makers", icon: Users },
  { number: "50+", label: "Communities Healed", icon: Heart },
];

const features = [
  {
    icon: Leaf,
    title: "Miyawaki Urban Forests",
    description: "Creating dense mini forests in concrete jungles using Japan's Miyawaki technique — 10x faster growth, maximum biodiversity.",
  },
  {
    icon: Wind,
    title: "Air Quality Revival",
    description: "Strategic green belt creation around pollution hotspots to naturally filter air and bring fresh breath to crowded cities.",
  },
  {
    icon: Flower2,
    title: "Pollinator Gardens",
    description: "Designing butterfly and bee-friendly gardens in public spaces to protect pollinators critical to our food chain.",
  },
  {
    icon: Globe,
    title: "Yamuna River Cleanup",
    description: "Monthly river restoration drives removing tonnes of plastic waste, making waterways cleaner for wildlife and communities.",
  },
  {
    icon: Shield,
    title: "Eco-Friendly Habitats",
    description: "Building sustainable shelters using recycled materials and rainwater harvesting to demonstrate green living in action.",
  },
  {
    icon: Flame,
    title: "Zero Waste Missions",
    description: "Helping communities go plastic-free through waste segregation, composting workshops, and sustainable lifestyle adoption.",
  },
];

const testimonials = [
  {
    quote: "Medhavi Foundation planted 500 trees in our colony. Today, birds sing every morning and kids play under green shade. It's magical.",
    name: "Rajesh Kumar",
    role: "Resident, Jasola",
  },
  {
    quote: "Every cleanup drive with Medhavi fills me with hope. Seeing strangers unite for a cleaner world is the most beautiful thing.",
    name: "Priya Sharma",
    role: "Volunteer since 2022",
  },
  {
    quote: "Their zero-waste initiative transformed our entire society. We reduced plastic usage by 80% in just six months!",
    name: "Dr. Ankit Verma",
    role: "Community Leader, South Delhi",
  },
];

const Index = () => {
  // Skip entrance animations on refresh to prevent upward drift
  const [isRefresh] = useState(() => {
    const key = '__medhavi_visited';
    if (sessionStorage.getItem(key)) return true;
    sessionStorage.setItem(key, '1');
    return false;
  });

  const noY = isRefresh ? { opacity: 1, y: 0 } : undefined;
  const instant = isRefresh ? { duration: 0 } : undefined;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Ken Burns Effect */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={heroBanner}
            alt="Medhavi Foundation volunteers restoring nature"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Vivid color wash overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,60%,20%,0.3)] via-transparent to-[hsl(25,90%,50%,0.2)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,40%,6%,0.7)] via-transparent to-transparent" />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'w-2 h-2 bg-primary/40' : 'w-1.5 h-1.5 bg-[hsl(280,70%,65%,0.5)]'}`}
            style={{ left: `${10 + i * 11}%`, top: `${15 + (i % 4) * 20}%` }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

        {/* Glowing Orb Effects - more vivid */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[hsl(280,60%,50%,0.12)] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[hsl(200,70%,50%,0.06)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="container-custom relative z-10 text-center py-20">
          {/* Badge */}
          <motion.div
            initial={noY || { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={instant || { duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-[hsl(280,60%,50%,0.15)] text-primary text-sm font-bold mb-8 backdrop-blur-md border border-primary/30 uppercase tracking-widest shadow-neon">
              <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>🌍</motion.span>
              Nature Restoration • Community Action
            </span>
          </motion.div>

          {/* Main Heading with Staggered Animation */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-8 leading-[1.05]"
            style={{ textShadow: "3px 3px 16px rgba(0,0,0,0.6)" }}
            initial={noY || { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={instant || { duration: 0.9, delay: 0.3 }}
          >
            Advancing
            <br />
            <motion.span
              className="text-primary inline-block"
              initial={noY || { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={instant || { duration: 0.8, delay: 0.6 }}
              style={{ textShadow: "0 0 50px hsl(25, 95%, 55%, 0.6), 0 0 100px hsl(280, 60%, 50%, 0.2), 3px 3px 16px rgba(0,0,0,0.5)" }}
            >
              Sustainable Change
            </motion.span>
            <br />
            <motion.span
              className="text-white/85 text-3xl md:text-5xl lg:text-6xl inline-block"
              initial={noY || { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={instant || { duration: 0.7, delay: 0.9 }}
            >
              for Empowered Communities
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
            initial={noY || { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={instant || { duration: 0.7, delay: 1.1 }}
          >
            Medhavi Foundation is igniting a green revolution — planting trees,
            cleaning rivers, and transforming communities into thriving ecosystems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={noY || { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={instant || { duration: 0.7, delay: 1.3 }}
          >
            <Button variant="hero" size="xl" className="shadow-golden hover:shadow-glow transition-all duration-500 text-base hover:scale-105" asChild>
              <Link to="/initiatives">
                Discover Our Mission <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-hero" size="xl" className="hover:shadow-neon transition-all duration-500 text-base hover:scale-105 border-white/30 hover:border-primary/50" asChild>
              <Link to="/donate">
                <Heart className="mr-2 h-5 w-5" /> Plant a Tree Today
              </Link>
            </Button>
          </motion.div>

          {/* Mini Stats Bar */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
            initial={noY || { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={instant || { duration: 0.8, delay: 1.6 }}
          >
            {[
              { val: "50,000+", label: "Trees Planted" },
              { val: "200+", label: "Green Events" },
              { val: "10,000+", label: "Volunteers" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary font-display" style={{ textShadow: "0 0 30px hsl(25, 95%, 55%, 0.5), 0 0 60px hsl(280, 60%, 50%, 0.15)" }}>{s.val}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider font-body mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="w-7 h-11 rounded-full border-2 border-primary/40 flex items-start justify-center p-2 backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-3 rounded-full bg-primary"
              animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Building Pathways for{" "}
                <span className="text-primary">Resilient</span> Communities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-body">
                We are dreamers, doers, and defenders of the Earth. From the heart of
                South Delhi, Medhavi Foundation has grown into a powerful movement of
                volunteers, activists, and nature lovers united by one purpose — to heal
                our planet before it's too late.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 font-body">
                Our hands plant trees, our hearts clean rivers, and our voices rally
                communities to stand up for nature. We don't wait for change — we
                create it, one green action at a time.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-body">
                <MapPin className="h-4 w-4 text-primary" />
                DLF Tower-B Jasola, South Delhi, New Delhi — 110025
              </div>
              <Button variant="default" asChild>
                <Link to="/about">
                  Read Our Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl" />
                <img
                  src={volunteersTeam}
                  alt="Medhavi Foundation team"
                  className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover relative"
                />
                <div className="absolute -bottom-6 -left-6 bg-secondary rounded-xl p-4 shadow-elevated hidden md:block">
                  <div className="text-2xl font-bold text-secondary-foreground font-display">5+ Years</div>
                  <div className="text-xs text-secondary-foreground/80 font-body">Serving Nature</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Our Focus
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-2">
              Transforming Lives Through{" "}
              <span className="text-primary">Sustainable</span> Action
            </h2>
            <p className="text-secondary-foreground/70 mt-3 max-w-lg mx-auto font-body">
              Each initiative is a powerful force of nature, driving lasting environmental change from the ground up.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-secondary-foreground/10 hover:border-primary/40 transition-all duration-500 group h-full hover:-translate-y-2">
                  <div className="overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 shadow-golden">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-foreground mb-2">{item.title}</h3>
                    <p className="text-secondary-foreground/60 text-sm leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/initiatives">
                Explore All Initiatives <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Creating <span className="text-primary">Measurable</span> Change
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
              Every number represents a real story of transformation and hope.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center bg-card rounded-2xl p-6 border border-border shadow-soft">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-display">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium font-body">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              What Makes Us Different
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-2">
              Innovative <span className="text-primary">Green Solutions</span>
            </h2>
            <p className="text-secondary-foreground/60 mt-3 max-w-lg mx-auto font-body">
              Beyond traditional approaches — we bring innovation, passion, and science together.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-7 border border-secondary-foreground/10 hover:border-primary/40 transition-all duration-500 h-full group hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-golden transition-all duration-500">
                    <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-foreground mb-2">{item.title}</h3>
                  <p className="text-secondary-foreground/55 text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Real Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Voices from the <span className="text-primary">Ground</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <AnimatedSection key={item.name} delay={index * 0.12}>
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-golden h-full flex flex-col relative border border-border transition-all duration-500 hover:-translate-y-1">
                  <div className="text-5xl text-primary/20 font-display absolute top-4 left-6">"</div>
                  <p className="text-foreground leading-relaxed mb-6 flex-1 font-body pt-6">
                    {item.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground font-body">{item.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              In Action
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Snapshots of Our <span className="text-primary">Journey</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[treePlantation, cleanlinessDrive, climateAwareness, volunteersTeam].map(
              (img, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="rounded-2xl overflow-hidden group shadow-soft hover:shadow-golden transition-all duration-500 relative">
                    <img
                      src={img}
                      alt="Medhavi Foundation environmental action"
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </AnimatedSection>
              )
            )}
          </div>
          <AnimatedSection className="text-center mt-8">
            <Button variant="default" size="lg" asChild>
              <Link to="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
                Empowered Voices.
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Brighter Futures.
              </h2>
              <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-10 text-lg font-body">
                Plant a tree. Join a cleanup. Donate to the cause. Every small
                action builds a movement that can save our planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/get-involved">
                    Join the Revolution <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline-hero" size="xl" asChild>
                  <Link to="/donate">Donate Now</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
