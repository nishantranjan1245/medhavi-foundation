import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HandHeart, Building2, Megaphone, GraduationCap, ArrowRight,
  TreePine, Users, Heart, Award, CheckCircle, Calendar, MapPin,
  Leaf, Globe, Recycle, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import involvedHero from "@/assets/involved-hero.jpg";
import involvedVolunteer from "@/assets/involved-volunteer.jpg";
import involvedCorporate from "@/assets/involved-corporate.jpg";
import involvedEducation from "@/assets/involved-education.jpg";
import treePlantation from "@/assets/tree-plantation.jpg";
import cleanlinessDrive from "@/assets/cleanliness-drive.jpg";
import climateAwareness from "@/assets/climate-awareness.jpg";
import volunteersTeam from "@/assets/volunteers-team.jpg";

const waysToHelp = [
  {
    icon: HandHeart,
    title: "Volunteer With Us",
    description:
      "Join our plantation drives, cleanliness campaigns, and awareness programs. Give your weekends to make a real, lasting difference in your community.",
    image: involvedVolunteer,
    stat: "10,000+ Volunteers",
    benefits: ["Hands-on field experience", "Certificate of participation", "Community of changemakers"],
  },
  {
    icon: Building2,
    title: "Corporate Partnership",
    description:
      "Partner with us for impactful CSR initiatives. We design customized environmental programs that align with your organization's values, goals, and ESG commitments.",
    image: involvedCorporate,
    stat: "30+ Partners",
    benefits: ["Custom CSR programs", "Impact reports & documentation", "Employee engagement drives"],
  },
  {
    icon: GraduationCap,
    title: "School & College Programs",
    description:
      "Bring our climate education workshops to your institution. We offer free interactive programs for students from classes 5 to 12 and college eco-clubs across India.",
    image: involvedEducation,
    stat: "50+ Schools",
    benefits: ["Free workshops & materials", "Eco-club mentoring", "Field visit opportunities"],
  },
];

const quickActions = [
  { icon: TreePine, label: "Plant a Tree", description: "Sponsor a native tree sapling for just ₹100 and we'll plant it, nurture it, and share its growth with you." },
  { icon: Megaphone, label: "Spread the Word", description: "Follow us on social media, share our stories, and help us reach more people who care about the planet." },
  { icon: Recycle, label: "Go Zero Waste", description: "Join our zero-waste challenge — adopt simple habits that reduce your plastic footprint by 80% in 30 days." },
  { icon: Calendar, label: "Join an Event", description: "Attend our monthly plantation drives, river cleanups, and sustainability workshops across Delhi NCR." },
  { icon: Globe, label: "Start a Chapter", description: "Launch a Medhavi chapter in your city — we provide the toolkit, training, and ongoing support you need." },
  { icon: Leaf, label: "Green Your Colony", description: "Request our team to help your colony go green with composting, tree plantation, and waste management programs." },
];

const volunteerStats = [
  { number: "10,000+", label: "Active Volunteers", icon: Users },
  { number: "200+", label: "Events Completed", icon: Award },
  { number: "30+", label: "Corporate Partners", icon: Building2 },
  { number: "50+", label: "Communities Served", icon: Heart },
];

const upcomingEvents = [
  { title: "Mega Plantation Drive", date: "March 15, 2026", location: "Yamuna Biodiversity Park, Delhi", spots: "200 spots left" },
  { title: "River Cleanup Campaign", date: "March 22, 2026", location: "Yamuna Ghat, Wazirabad", spots: "150 spots left" },
  { title: "Climate Workshop for Schools", date: "April 5, 2026", location: "DLF Tower-B, Jasola", spots: "50 spots left" },
  { title: "Zero Waste Community Drive", date: "April 12, 2026", location: "Jasola Vihar, South Delhi", spots: "100 spots left" },
];

const testimonials = [
  {
    quote: "Volunteering with Medhavi changed my life. Planting trees every weekend gave me a sense of purpose I never had. Now I lead a team of 50 volunteers!",
    name: "Sneha Gupta",
    role: "Volunteer Leader since 2022",
  },
  {
    quote: "Our CSR partnership with Medhavi Foundation has been incredibly impactful. They delivered a perfectly designed green drive for our 500+ employees.",
    name: "Amit Khanna",
    role: "CSR Head, TechCorp India",
  },
  {
    quote: "The eco-workshop at our school was eye-opening. My students now run their own composting project and have reduced school waste by 60%!",
    name: "Mrs. Deepa Nair",
    role: "Principal, Green Valley School",
  },
];

const GetInvolved = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background with Ken Burns */}
        <motion.img
          src={involvedHero}
          alt="Get involved with Medhavi Foundation"
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-transparent to-amber-950/30" />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
            style={{ left: `${12 + i * 11}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        {/* Glowing orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Decorative vertical lines */}
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

        <div className="container-custom relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Animated badge */}
            <motion.span
              className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-primary text-sm font-bold mb-8 backdrop-blur-md border border-primary/30 uppercase tracking-widest"
              animate={{ boxShadow: ["0 0 15px hsl(var(--primary)/0.2)", "0 0 30px hsl(var(--primary)/0.4)", "0 0 15px hsl(var(--primary)/0.2)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              🤝 Join the Movement • Be the Change
            </motion.span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
              Get{" "}
              <span className="relative inline-block text-primary">
                Involved
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 1 }}
                  style={{ boxShadow: "0 0 20px hsl(var(--primary)/0.6)" }}
                />
              </span>
            </h1>

            <motion.p
              className="text-lg md:text-2xl text-white/85 max-w-2xl mx-auto mb-10 font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Whether you volunteer, partner, or spread the word — every contribution
              creates ripples of positive change for our planet and communities.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Volunteering <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-hero" size="xl" asChild>
                <Link to="/donate">Donate Now</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom pulsing dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/60"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </section>

      {/* Volunteer Stats */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Our Community
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              A Growing <span className="text-primary">Movement</span> of Change
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
              Thousands of people like you are already making a difference. Join them.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerStats.map((stat, index) => (
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

      {/* Ways to Get Involved — alternating layout */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Ways to Contribute
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-2">
              Find Your Way to <span className="text-primary">Make a Difference</span>
            </h2>
            <p className="text-secondary-foreground/70 mt-3 max-w-lg mx-auto font-body">
              From weekend volunteering to corporate CSR — there's a role for everyone in this green revolution.
            </p>
          </AnimatedSection>

          {waysToHelp.map((way, index) => (
            <div
              key={way.title}
              className="grid md:grid-cols-2 gap-12 items-center mb-20 last:mb-0"
            >
              <AnimatedSection className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5 shadow-golden">
                  <way.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-secondary-foreground mb-4">
                  {way.title}
                </h3>
                <p className="text-secondary-foreground/70 leading-relaxed mb-6 font-body">
                  {way.description}
                </p>
                <div className="space-y-3 mb-6">
                  {way.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-secondary-foreground/80 font-body text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                    <Users className="h-4 w-4" /> {way.stat}
                  </span>
                  <Button variant="default" asChild>
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="relative">
                  <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl" />
                  <img
                    src={way.image}
                    alt={way.title}
                    className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover relative"
                  />
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Quick Actions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Small Steps, <span className="text-primary">Big Impact</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
              Even a single action can spark a chain reaction of positive change.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.08}>
                <div className="bg-card backdrop-blur-sm rounded-2xl p-7 border border-border hover:border-primary/40 transition-all duration-500 h-full group hover:-translate-y-2 shadow-soft hover:shadow-golden">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-golden transition-all duration-500">
                    <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Upcoming Events
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Join Our Next <span className="text-primary">Green Drive</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
              Register for upcoming events and be part of the action on the ground.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.title} delay={index * 0.1}>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-golden transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-golden">
                      <Calendar className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1 font-body">
                        <Calendar className="h-3.5 w-3.5 text-primary" /> {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 font-body">
                        <MapPin className="h-3.5 w-3.5 text-primary" /> {event.location}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {event.spots}
                        </span>
                        <Button variant="default" size="sm" asChild>
                          <Link to="/contact">Register</Link>
                        </Button>
                      </div>
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
              Our Volunteers <span className="text-primary">In the Field</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[treePlantation, cleanlinessDrive, climateAwareness, volunteersTeam].map(
              (img, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="rounded-2xl overflow-hidden group shadow-soft hover:shadow-golden transition-all duration-500 relative">
                    <img
                      src={img}
                      alt="Medhavi Foundation volunteers in action"
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

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Real Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Voices from Our <span className="text-primary">Community</span>
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

      {/* CTA Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
                Ready to Be Part of the
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Green Revolution?
              </h2>
              <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-8 font-body">
                Your time, resources, or voice — every contribution helps us plant more trees,
                clean more communities, and educate more minds. The planet needs you today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/donate">
                    Donate Now <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline-hero" size="lg" asChild>
                  <Link to="/contact">
                    Contact Us <Phone className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
