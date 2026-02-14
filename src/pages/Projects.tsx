import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TreePine, Droplets, Sun, Users, Award, Heart, ArrowRight,
  Leaf, Globe, Shield, MapPin, Calendar, CheckCircle, Target, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import heroBanner from "@/assets/hero-banner.jpg";
import treePlantation from "@/assets/tree-plantation.jpg";
import cleanlinessDrive from "@/assets/cleanliness-drive.jpg";
import climateAwareness from "@/assets/climate-awareness.jpg";
import volunteersTeam from "@/assets/volunteers-team.jpg";
import projectGreenDelhi from "@/assets/project-green-delhi.jpg";
import projectRiverCleanup from "@/assets/project-river-cleanup.jpg";
import projectEcoSchool from "@/assets/project-eco-school.jpg";
import projectUrbanForest from "@/assets/project-urban-forest.jpg";

const flagshipProjects = [
  {
    title: "Green Delhi Initiative",
    description:
      "A large-scale tree plantation movement planting 20,000+ native trees across South Delhi — transforming barren lands into thriving green corridors that purify air and restore biodiversity.",
    location: "South Delhi",
    date: "2024 - Ongoing",
    status: "Active",
    image: projectGreenDelhi,
    icon: TreePine,
    highlights: ["20,000+ Trees Planted", "15+ Neighborhoods", "500+ Volunteers"],
  },
  {
    title: "Yamuna River Restoration",
    description:
      "Monthly river cleanup drives along the Yamuna banks removing tonnes of plastic waste, restoring water quality, and protecting aquatic ecosystems for communities living along the river.",
    location: "Yamuna Banks, Delhi",
    date: "2023 - Ongoing",
    status: "Active",
    image: projectRiverCleanup,
    icon: Droplets,
    highlights: ["50+ Cleanup Drives", "12 Tonnes Waste Removed", "3 River Zones"],
  },
  {
    title: "Eco-Schools Network",
    description:
      "Partnership with 50+ schools integrating environmental education into their curriculum through interactive workshops, green labs, and student-led eco clubs creating the next generation of climate warriors.",
    location: "Delhi NCR",
    date: "2024 - Ongoing",
    status: "Active",
    image: projectEcoSchool,
    icon: Sun,
    highlights: ["50+ Schools", "15,000+ Students", "200+ Workshops"],
  },
];

const stats = [
  { number: "6+", label: "Active Projects", icon: Target },
  { number: "50,000+", label: "Trees Given Life", icon: TreePine },
  { number: "10,000+", label: "Lives Impacted", icon: Users },
  { number: "50+", label: "Communities Served", icon: Heart },
];

const ongoingProjects = [
  {
    icon: Leaf,
    title: "Miyawaki Urban Forest",
    description: "Creating dense mini forests in concrete jungles using Japan's Miyawaki technique — 10x faster growth, maximum biodiversity in public spaces.",
    status: "Active",
    location: "New Delhi",
  },
  {
    icon: Shield,
    title: "Swachh Jasola Campaign",
    description: "Weekly cleanliness drives in the Jasola community engaging local residents, businesses, and youth groups for a pollution-free neighbourhood.",
    status: "Active",
    location: "Jasola, Delhi",
  },
  {
    icon: Globe,
    title: "Climate Champions Program",
    description: "School-based climate education reaching thousands of students across NCR with interactive workshops, sustainability challenges, and green mentorship.",
    status: "Active",
    location: "Pan-India",
  },
  {
    icon: Sparkles,
    title: "Zero Waste Mission",
    description: "Helping communities go plastic-free through waste segregation, composting workshops, and sustainable lifestyle adoption programs.",
    status: "Active",
    location: "South Delhi",
  },
];

const completedProjects = [
  {
    title: "Urban Forest Project — Phase 1",
    description: "Successfully created 3 Miyawaki mini forests in public spaces, boosting local biodiversity by 40%.",
    image: projectUrbanForest,
  },
  {
    title: "Yamuna Cleanup — Phase 1",
    description: "Removed 5 tonnes of plastic waste from Yamuna river banks across 2 major zones in Delhi.",
    image: projectRiverCleanup,
  },
  {
    title: "Green Corridor — Sarita Vihar",
    description: "Planted 2,000 native trees along 3km stretch creating Delhi's first community-driven green corridor.",
    image: treePlantation,
  },
  {
    title: "Eco-Awareness Workshops",
    description: "Conducted 100+ climate workshops across 30 schools reaching 8,000+ students in Phase 1.",
    image: climateAwareness,
  },
];

const Projects = () => {
  return (
    <div>
      {/* Hero Section — same as Home */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBanner}
          alt="Medhavi Foundation projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-custom relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6 backdrop-blur-sm border border-primary/30 uppercase tracking-widest">
              🌿 Ground-Breaking Green Projects
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">
              Our <span className="text-primary">Projects</span>
              <br />
              <span className="text-white/90 text-4xl md:text-5xl lg:text-6xl">Driving Lasting Change</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-body leading-relaxed">
              From planting forests to cleaning rivers — explore the ground-breaking projects driving lasting environmental change across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flagship Projects — alternating layout like Home "About Preview" */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Flagship Projects
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Driving <span className="text-primary">Transformative</span> Impact
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
              Our flagship projects are the backbone of our mission — large-scale initiatives creating measurable, lasting change.
            </p>
          </AnimatedSection>

          {flagshipProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <AnimatedSection className={index % 2 === 1 ? "md:order-2" : ""}>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
                  {project.status} • {project.date}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 font-body">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-body">
                  <MapPin className="h-4 w-4 text-primary" />
                  {project.location}
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="flex items-center gap-1.5 text-sm font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle className="h-3.5 w-3.5" /> {h}
                    </span>
                  ))}
                </div>
                <Button variant="default" asChild>
                  <Link to="/get-involved">
                    Support This Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="relative">
                  <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover relative"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-secondary rounded-xl p-4 shadow-elevated hidden md:block">
                    <project.icon className="h-6 w-6 text-primary mb-1" />
                    <div className="text-xs text-secondary-foreground/80 font-body">{project.status}</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats — same as Home */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Project Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-2">
              Real Results, <span className="text-primary">Real Change</span>
            </h2>
            <p className="text-secondary-foreground/70 mt-3 max-w-lg mx-auto font-body">
              Every project is measured by the lives it touches and the ecosystems it restores.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-secondary-foreground/10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-display">
                    {stat.number}
                  </div>
                  <div className="text-secondary-foreground/70 text-sm font-medium font-body">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects Grid — same style as Home Features Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              All Active Projects
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              More <span className="text-primary">Green Missions</span> in Action
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
              Beyond flagships — every project adds a vital piece to the environmental puzzle.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ongoingProjects.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="bg-card rounded-2xl p-7 border border-border hover:border-primary/40 transition-all duration-500 h-full group hover:-translate-y-2 shadow-soft hover:shadow-golden">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-golden transition-all duration-500">
                    <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent text-accent-foreground">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                    <MapPin className="h-3 w-3 text-primary" /> {item.location}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects — Gallery style like Home */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Milestones Achieved
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Successfully <span className="text-primary">Completed</span> Projects
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
              Projects that reached their goals — proof that collective action creates lasting impact.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {completedProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-golden transition-all duration-500 group hover:-translate-y-2 h-full flex flex-col">
                  <div className="overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      Completed
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-sm font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed font-body flex-1">
                      {project.description}
                    </p>
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
                Every Project Needs
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Champions Like You.
              </h2>
              <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-10 text-lg font-body">
                Partner with us, volunteer your time, or donate to fuel a project
                that's changing lives. Your support turns vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/get-involved">
                    Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
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

export default Projects;
