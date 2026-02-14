import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TreePine, Users, Award, Heart, Globe, Sprout, Recycle, BookOpen,
  ArrowRight, Droplets, CheckCircle, TrendingUp, MapPin, Leaf, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import impactHero from "@/assets/impact-hero.jpg";
import impactTransformation from "@/assets/impact-transformation.jpg";
import impactCommunity from "@/assets/impact-community.jpg";
import impactEducation from "@/assets/impact-education.jpg";
import treePlantation from "@/assets/tree-plantation.jpg";
import cleanlinessDrive from "@/assets/cleanliness-drive.jpg";
import climateAwareness from "@/assets/climate-awareness.jpg";
import volunteersTeam from "@/assets/volunteers-team.jpg";

const mainStats = [
  { icon: TreePine, number: "50,000+", label: "Trees Given Life" },
  { icon: Users, number: "10,000+", label: "Change Makers" },
  { icon: Award, number: "200+", label: "Green Events" },
  { icon: Heart, number: "50+", label: "Communities Healed" },
];

const milestones = [
  { year: "2020", title: "Foundation Established", description: "Medhavi Foundation was registered with a bold mission to protect and restore India's environment through community action." },
  { year: "2021", title: "First 10,000 Trees", description: "Achieved our first major milestone — 10,000 native trees planted across Delhi NCR, creating green corridors in urban areas." },
  { year: "2022", title: "Cleanliness Revolution", description: "Expanded into powerful community cleanliness drives, transforming neighbourhoods and reclaiming public spaces from pollution." },
  { year: "2023", title: "Climate Education Launch", description: "Launched climate awareness workshops in 50+ schools, reaching thousands of students and creating the next generation of eco-warriors." },
  { year: "2024", title: "50,000 Trees Milestone", description: "Crossed the landmark figure of 50,000 trees planted across India — a forest of hope built by thousands of volunteers." },
  { year: "2025", title: "National Expansion", description: "Expanding operations to multiple states with new community partnerships, corporate collaborations, and government support." },
];

const impactStories = [
  {
    title: "Transforming Barren Land to Green Forests",
    description: "What was once a dusty wasteland in South Delhi is now a thriving mini forest with 3,000+ native trees, home to 40+ bird species and countless insects. Local residents report cleaner air and cooler temperatures.",
    image: impactTransformation,
    stat: "3,000+ Trees",
  },
  {
    title: "Building Eco-Conscious Communities",
    description: "Our community programs have united families, students, and local leaders to take ownership of their environment. From plastic-free colonies to composting champions, we're building a culture of sustainability.",
    image: impactCommunity,
    stat: "50+ Communities",
  },
  {
    title: "Empowering Youth Through Education",
    description: "Over 15,000 students across Delhi NCR have participated in our climate workshops, learning about biodiversity, waste management, and sustainable living. Many now lead their own school eco-clubs.",
    image: impactEducation,
    stat: "15,000+ Students",
  },
];

const impactAreas = [
  { icon: Sprout, label: "Biodiversity Restoration", description: "Planting native species to rebuild ecosystems and bring back wildlife to urban areas." },
  { icon: Recycle, label: "Waste Management", description: "Zero-waste missions, composting, and plastic-free campaigns transforming communities." },
  { icon: BookOpen, label: "Climate Education", description: "Interactive workshops and eco-clubs empowering the next generation of change makers." },
  { icon: Globe, label: "Climate Action", description: "Grassroots campaigns fighting climate change through direct community participation." },
  { icon: Droplets, label: "Water Conservation", description: "River cleanup drives and rainwater harvesting projects protecting India's water bodies." },
  { icon: Shield, label: "Sustainable Habitats", description: "Building eco-friendly shelters and green spaces that demonstrate sustainable living." },
];

const testimonials = [
  {
    quote: "Before Medhavi's plantation drive, our colony was dusty and grey. Now, birds sing every morning and children play under green shade. It's truly magical.",
    name: "Rajesh Kumar",
    role: "Resident, Jasola Colony",
  },
  {
    quote: "Every cleanup drive fills me with hope. Seeing hundreds of strangers unite for a cleaner world is the most beautiful thing I've experienced.",
    name: "Priya Sharma",
    role: "Volunteer since 2022",
  },
  {
    quote: "Their zero-waste initiative transformed our society. We reduced plastic usage by 80% in just six months. My children now teach others about composting!",
    name: "Dr. Ankit Verma",
    role: "Community Leader, South Delhi",
  },
];

const Impact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Ken Burns */}
        <motion.img
          src={impactHero}
          alt="Medhavi Foundation impact"
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Multi-layer gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-amber-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(45, 93%, 60%)',
              opacity: 0.4,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'hsl(var(--primary) / 0.15)' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'hsl(45, 93%, 55% / 0.12)' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Decorative lines */}
        <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-amber-400/15 to-transparent" />

        {/* Content */}
        <div className="container-custom relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.span
              className="inline-block px-5 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6 backdrop-blur-sm border border-primary/30 uppercase tracking-widest"
              animate={{ boxShadow: ['0 0 15px hsl(var(--primary) / 0.2)', '0 0 30px hsl(var(--primary) / 0.4)', '0 0 15px hsl(var(--primary) / 0.2)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              📊 Measurable Change • Real Stories
            </motion.span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">
              Our{" "}
              <span
                className="text-primary relative inline-block"
                style={{ textShadow: '0 0 40px hsl(var(--primary) / 0.5), 0 0 80px hsl(var(--primary) / 0.3)' }}
              >
                Impact
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-amber-400 to-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
              </span>
              <br />
              <motion.span
                className="text-white/90 text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Numbers That Tell a Story
              </motion.span>
            </h1>
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-body leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Every tree planted, every river cleaned, and every child educated represents a real story of transformation and hope.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom decorative dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/50"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </section>

      {/* Impact Stats — same colors as Home */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              By The Numbers
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Creating <span className="text-primary">Measurable</span> Change
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
              Every number represents a real story of transformation and hope.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {mainStats.map((stat, index) => (
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

      {/* Impact Stories — alternating layout like Home About */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Impact Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-2">
              Transformations That <span className="text-primary">Inspire</span>
            </h2>
            <p className="text-secondary-foreground/70 mt-3 max-w-lg mx-auto font-body">
              Real stories of change driven by collective action and unwavering commitment.
            </p>
          </AnimatedSection>

          {impactStories.map((story, index) => (
            <div
              key={story.title}
              className="grid md:grid-cols-2 gap-12 items-center mb-20 last:mb-0"
            >
              <AnimatedSection className={index % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-2xl md:text-4xl font-bold text-secondary-foreground mb-4">
                  {story.title}
                </h3>
                <p className="text-secondary-foreground/70 leading-relaxed mb-6 font-body">
                  {story.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  <TrendingUp className="h-4 w-4" /> {story.stat}
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="relative">
                  <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl" />
                  <img
                    src={story.image}
                    alt={story.title}
                    className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover relative"
                  />
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Key <span className="text-primary">Milestones</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
              From a small idea to a nationwide movement — every year adds a new chapter.
            </p>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0 shadow-golden">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-bold text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas — same as Home Features Grid */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Where We Make a Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-2">
              Areas of <span className="text-primary">Impact</span>
            </h2>
            <p className="text-secondary-foreground/60 mt-3 max-w-lg mx-auto font-body">
              Our work spans across critical environmental areas, creating holistic change.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactAreas.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.08}>
                <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-7 border border-secondary-foreground/10 hover:border-primary/40 transition-all duration-500 h-full group hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-golden transition-all duration-500">
                    <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-foreground mb-2">{item.label}</h3>
                  <p className="text-secondary-foreground/55 text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
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
              Snapshots of <span className="text-primary">Impact</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[treePlantation, cleanlinessDrive, climateAwareness, volunteersTeam].map(
              (img, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="rounded-2xl overflow-hidden group shadow-soft hover:shadow-golden transition-all duration-500 relative">
                    <img
                      src={img}
                      alt="Medhavi Foundation impact in action"
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </AnimatedSection>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials — same as Home */}
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

      {/* CTA Section — same as Home */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
                Be Part of the
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Impact Story.
              </h2>
              <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-10 text-lg font-body">
                Plant a tree. Join a cleanup. Donate to the cause. Every small
                action builds a movement that can save our planet.
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Impact;
