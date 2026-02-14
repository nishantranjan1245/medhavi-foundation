import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TreePine, Droplets, Sun, ArrowRight, CheckCircle,
  Leaf, Globe, Shield, Flame, Wind, Flower2, Award, Users, Heart, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import initiativesHero from "@/assets/initiatives-hero.jpg";
import treePlantation from "@/assets/tree-plantation.jpg";
import cleanlinessDrive from "@/assets/cleanliness-drive.jpg";
import climateAwareness from "@/assets/climate-awareness.jpg";
import initiativeNursery from "@/assets/initiative-nursery.jpg";
import initiativeRiverCleanup from "@/assets/initiative-river-cleanup.jpg";
import initiativeWorkshop from "@/assets/initiative-workshop.jpg";
import initiativeMiyawaki from "@/assets/initiative-miyawaki.jpg";
import initiativeZeroWaste from "@/assets/initiative-zero-waste.jpg";
import volunteersTeam from "@/assets/volunteers-team.jpg";

const mainInitiatives = [
  {
    icon: TreePine,
    title: "Tree Plantation Drives",
    subtitle: "Restoring Green Cover Across India",
    description:
      "Our tree plantation drives bring communities together to plant native species across urban and rural areas. We have planted over 50,000 trees, creating green corridors, restoring degraded land, and providing habitats for local wildlife. Each sapling represents hope for a greener tomorrow.",
    highlights: [
      "50,000+ trees planted across Delhi NCR",
      "100+ massive plantation drives conducted",
      "Focus on native species for biodiversity",
      "Community-led ownership of green spaces",
    ],
    image: treePlantation,
    reverse: false,
  },
  {
    icon: Droplets,
    title: "Cleanliness Drives",
    subtitle: "Creating Healthier Communities",
    description:
      "Our cleanliness drives mobilize thousands of volunteers to clean parks, streets, water bodies, and public spaces. By fostering civic responsibility and waste segregation awareness, we build cleaner, healthier neighborhoods where communities thrive.",
    highlights: [
      "200+ drives conducted citywide",
      "Parks, rivers & public spaces cleaned",
      "Waste segregation education programs",
      "School & college partnerships",
    ],
    image: cleanlinessDrive,
    reverse: true,
  },
  {
    icon: Sun,
    title: "Climate Awareness Programs",
    subtitle: "Educating for a Sustainable Future",
    description:
      "Through interactive workshops, seminars, and school programs, we educate students and communities about climate change, sustainable practices, and environmental stewardship. Knowledge is the first step toward meaningful climate action.",
    highlights: [
      "500+ workshops held across schools",
      "50,000+ students educated on climate",
      "School curriculum integration",
      "Expert-led interactive sessions",
    ],
    image: climateAwareness,
    reverse: false,
  },
];

const specialPrograms = [
  {
    icon: Leaf,
    title: "Miyawaki Urban Forests",
    description: "Creating dense mini forests in concrete jungles using Japan's Miyawaki technique — 10x faster growth, maximum biodiversity in minimum space.",
    image: initiativeMiyawaki,
  },
  {
    icon: Globe,
    title: "River Restoration",
    description: "Monthly Yamuna river restoration drives removing tonnes of plastic waste, making waterways cleaner for wildlife and communities downstream.",
    image: initiativeRiverCleanup,
  },
  {
    icon: Flame,
    title: "Zero Waste Missions",
    description: "Helping communities go plastic-free through waste segregation, composting workshops, and empowering women-led recycling centers.",
    image: initiativeZeroWaste,
  },
];

const approachSteps = [
  {
    icon: Shield,
    title: "Identify & Research",
    description: "We study local ecosystems, pollution hotspots, and community needs to design targeted interventions that create maximum impact.",
  },
  {
    icon: Users,
    title: "Community Mobilization",
    description: "We rally volunteers, partner with schools, and engage local leaders to build a movement that sustains itself beyond our involvement.",
  },
  {
    icon: Wind,
    title: "Execute with Passion",
    description: "From planting saplings to organizing mega cleanup drives, every event is executed with meticulous planning and infectious energy.",
  },
  {
    icon: Flower2,
    title: "Monitor & Nurture",
    description: "We don't just plant and leave. We track survival rates, maintain green spaces, and nurture communities to become self-sustaining guardians.",
  },
];

const stats = [
  { number: "50,000+", label: "Trees Planted", icon: TreePine },
  { number: "200+", label: "Green Events", icon: Award },
  { number: "10,000+", label: "Active Volunteers", icon: Users },
  { number: "50+", label: "Communities Served", icon: Heart },
];

const Initiatives = () => {
  return (
    <div>
      <PageHero
        title="Our Initiatives"
        subtitle="Three powerful pillars of environmental action driving lasting change across communities and ecosystems."
        backgroundImage={initiativesHero}
      />

      {/* Main Initiatives */}
      {mainInitiatives.map((item, index) => (
        <section
          key={item.title}
          className={`section-padding relative overflow-hidden ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className={`absolute ${index % 2 === 0 ? 'top-20 right-0' : 'bottom-20 left-0'} w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl`}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className={`absolute ${index % 2 === 0 ? 'top-0 left-1/4' : 'bottom-0 right-1/4'} w-px h-1/2 bg-gradient-to-b from-transparent via-primary/10 to-transparent`} />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection className={item.reverse ? "md:order-2" : ""}>
                <motion.span
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider font-body mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="h-4 w-4" />
                  {item.subtitle}
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                  {item.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span
                    className="text-primary"
                    style={{ textShadow: "0 0 40px hsl(25, 95%, 55%, 0.3)" }}
                  >
                    {item.title.split(" ").slice(-1)}
                  </span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 font-body text-base">
                  {item.description}
                </p>
                <div className="space-y-3 mb-8">
                  {item.highlights.map((h, hIndex) => (
                    <motion.div
                      key={h}
                      className="flex items-center gap-3 group"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: hIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors duration-300">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground font-medium font-body">{h}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" asChild>
                    <Link to="/get-involved">
                      Join This Initiative <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className={item.reverse ? "md:order-1" : ""}>
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl group-hover:from-primary/30 transition-all duration-700" />
                  {/* Animated corner accents */}
                  <motion.div
                    className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl z-20"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-xl z-20"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  />
                  <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    {/* Image overlay text */}
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                    >
                      <span className="text-white/90 text-sm font-medium font-body bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                        {item.subtitle}
                      </span>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="absolute top-4 left-4 bg-primary rounded-full p-3 shadow-golden"
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Impact Stats */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1d2930 0%, #2a3d47 50%, #1d2930 100%)' }}>
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, hsl(25, 90%, 55%) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-14">
            <motion.span
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider font-body"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="h-4 w-4" />
              Our Reach
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
              Impact Through{" "}
              <span className="text-primary" style={{ textShadow: "0 0 60px hsl(25, 95%, 55%, 0.5), 0 0 120px hsl(25, 95%, 55%, 0.2)" }}>
                Action
              </span>
            </h2>
            <p className="text-white/70 mt-4 max-w-lg mx-auto font-body">
              Every number represents real transformation on the ground.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.12}>
                <motion.div
                  className="text-center relative bg-white/[0.07] backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 group cursor-default"
                  whileHover={{ y: -6, borderColor: "hsl(25, 90%, 55%, 0.4)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4 relative z-10"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-primary mb-2 font-display relative z-10"
                    style={{ textShadow: "0 0 30px hsl(25, 95%, 55%, 0.3)" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/70 text-sm font-medium font-body relative z-10">
                    {stat.label}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </section>

      {/* Special Programs */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 right-10 w-72 h-72 bg-primary/[0.04] rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-14">
            <motion.span
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider font-body"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="h-4 w-4" />
              Beyond the Basics
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
              Special{" "}
              <span className="text-primary" style={{ textShadow: "0 0 40px hsl(25, 95%, 55%, 0.3)" }}>
                Programs
              </span>
            </h2>
            <p className="text-secondary-foreground/60 mt-4 max-w-lg mx-auto font-body">
              Innovative initiatives that push the boundaries of environmental action.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {specialPrograms.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <motion.div 
                  className="bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 group h-full relative"
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px hsl(25, 90%, 50%, 0.2)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="overflow-hidden relative">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    {/* Shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                  </div>
                  <div className="p-6 relative">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4 shadow-golden group-hover:shadow-glow transition-shadow duration-500"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="h-7 w-7 text-primary-foreground" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">
                      {item.description}
                    </p>
                    {/* Bottom accent line */}
                    <motion.div
                      className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 9, repeat: Infinity }}
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <motion.span
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider font-body"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Shield className="h-4 w-4" />
                How We Work
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-8">
                Our{" "}
                <span className="text-primary" style={{ textShadow: "0 0 40px hsl(25, 95%, 55%, 0.3)" }}>
                  Approach
                </span>{" "}
                to Change
              </h2>
              <div className="space-y-6">
                {approachSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.12 }}
                    viewport={{ once: true }}
                    className="flex gap-4 group cursor-default"
                  >
                    <motion.div
                      className="shrink-0 w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300 relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <step.icon className="h-7 w-7 text-primary" />
                      {/* Step number badge */}
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                      <p className="text-muted-foreground text-sm font-body leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl group-hover:from-primary/30 transition-all duration-700" />
                <motion.div
                  className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl z-20"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-xl z-20"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />
                <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                  <motion.img
                    src={initiativeWorkshop}
                    alt="Environmental workshop in progress"
                    className="w-full aspect-[4/3] object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Nursery / Growth Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-80 h-80 bg-primary/[0.04] rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl group-hover:from-primary/30 transition-all duration-700" />
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-xl z-20"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                  <motion.img
                    src={initiativeNursery}
                    alt="Volunteers nurturing saplings"
                    className="w-full aspect-[4/3] object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <motion.span
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider font-body"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Leaf className="h-4 w-4" />
                Growing Together
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-3 mb-6">
                Every Sapling Tells a{" "}
                <span className="text-primary" style={{ textShadow: "0 0 40px hsl(25, 95%, 55%, 0.3)" }}>
                  Story
                </span>
              </h2>
              <p className="text-secondary-foreground/70 leading-relaxed mb-4 font-body">
                Behind every tree we plant is a story of hope, dedication, and community spirit. Our 
                volunteers don't just dig holes — they nurture life. From selecting native species to 
                regular watering schedules, we ensure every sapling grows into a mighty tree.
              </p>
              <p className="text-secondary-foreground/70 leading-relaxed mb-6 font-body">
                Our community nurseries provide saplings free of cost to anyone who wants to green 
                their surroundings. We've distributed over 20,000 saplings to homes, schools, and 
                offices — turning concrete jungles into breathing ecosystems.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" asChild>
                  <Link to="/projects">
                    See Our Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <motion.img
          src={volunteersTeam}
          alt="Volunteers working together"
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,60%,20%,0.2)] via-transparent to-[hsl(25,90%,50%,0.15)]" />
        {/* Floating particles */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-primary/40"
          animate={{ y: [0, -25, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[15%] w-1.5 h-1.5 rounded-full bg-primary/30"
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6"
            >
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium tracking-wide uppercase">Join Us</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: "3px 3px 16px rgba(0,0,0,0.6)" }}>
              Be Part of the{" "}
              <span className="text-primary" style={{ textShadow: "0 0 50px hsl(25, 95%, 55%, 0.6), 0 0 100px hsl(25, 95%, 55%, 0.3)" }}>
                Green Revolution
              </span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 font-body text-lg" style={{ textShadow: "1px 1px 8px rgba(0,0,0,0.4)" }}>
              Every hand that plants a tree, every volunteer who cleans a river, every voice that 
              spreads awareness — together, we are unstoppable. Join us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/get-involved">
                    Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline-hero" size="xl" asChild>
                  <Link to="/donate">Donate Now</Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Initiatives;
