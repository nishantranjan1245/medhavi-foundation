import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Globe, Clock, Phone, Heart, Users, TreePine, Send, MessageCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import contactTeam from "@/assets/contact-team.jpg";
import contactWelcome from "@/assets/contact-welcome.jpg";
import contactHero from "@/assets/contact-hero.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["Dtj-216 Dlf Tower-b Jasola,", "South Delhi, New Delhi,", "Delhi, India, 110025"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@medhavifoundation.org.in"],
  },
  {
    icon: Globe,
    title: "Website",
    lines: ["medhavifoundation.org.in"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

const quickActions = [
  { icon: Heart, title: "Donate Now", desc: "Support our environmental initiatives with your generous contribution" },
  { icon: Users, title: "Volunteer", desc: "Join our growing community of passionate environmental volunteers" },
  { icon: TreePine, title: "Plant Trees", desc: "Sponsor tree plantation drives and contribute to a greener future" },
  { icon: MessageCircle, title: "Partner With Us", desc: "Explore corporate partnerships and collaboration opportunities" },
];

const faqs = [
  { q: "How can I volunteer with Medhavi Foundation?", a: "You can sign up through our Get Involved page or contact us directly. We welcome volunteers of all ages and backgrounds for tree plantation, river cleanup, and awareness campaigns." },
  { q: "Where does my donation go?", a: "100% of donations go directly to our environmental projects including tree plantation, Miyawaki forests, river cleanup drives, and community education programs." },
  { q: "Can organizations partner with Medhavi Foundation?", a: "Absolutely! We actively seek CSR partnerships with corporates, schools, and government bodies. Reach out via email or our contact form to discuss collaboration." },
  { q: "How quickly will I hear back after contacting you?", a: "Our team responds to all inquiries within 24-48 hours. For urgent matters, you can visit our office during working hours." },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 48 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image with subtle zoom on load */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img src={contactHero} alt="Contact Medhavi Foundation" className="w-full h-full object-cover" />
        </motion.div>

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-emerald-950/60" />

        {/* Diagonal accent stripe */}
        <motion.div
          className="absolute -right-20 top-0 w-[500px] h-full bg-primary/8 skew-x-[-12deg] hidden lg:block"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Horizontal glowing line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 backdrop-blur-sm border border-primary/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We'd Love to Hear From You
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}>
              Get in{" "}
              <span className="relative inline-block text-primary">
                Touch
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>{" "}
              With Us
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-body mb-8">
              Whether you want to volunteer, donate, partner, or simply learn more — we're here to connect with you.
            </p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="hero" size="xl" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                <Send className="mr-2 h-5 w-5" /> Send a Message
              </Button>
              <Button variant="outline-hero" size="xl">
                <Phone className="mr-2 h-5 w-5" /> Visit Our Office
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "24hrs", label: "Response Time" },
              { number: "500+", label: "Queries Resolved" },
              { number: "100+", label: "Active Partners" },
              { number: "15+", label: "Cities Covered" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</h3>
                <p className="text-secondary-foreground/80 font-body text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section with Image */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Welcome</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Your Voice <span className="text-primary">Matters</span> to Us
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                At Medhavi Foundation, we believe every conversation has the potential to spark meaningful change. Whether you're an individual passionate about the environment, a corporate looking for CSR partnerships, or a student eager to make a difference — we're always ready to listen.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Our dedicated team is committed to responding promptly and helping you find the best way to contribute to our shared vision of a greener, cleaner India.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, i) => (
                  <motion.div key={action.title} className="p-4 rounded-xl bg-muted hover:shadow-golden transition-all duration-300 cursor-pointer group" whileHover={{ y: -4 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <action.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-foreground text-sm">{action.title}</h4>
                    <p className="text-muted-foreground text-xs font-body mt-1">{action.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img src={contactWelcome} alt="Our welcoming team" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
                    Our team is always ready to welcome you
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section id="contact-form" className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Reach Out</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
              Send Us a <span className="text-primary">Message</span>
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24-48 hours.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12">
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-elevated">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 font-body">Full Name *</label>
                      <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" required className="bg-background border-border focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 font-body">Email Address *</label>
                      <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required className="bg-background border-border focus:border-primary" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 font-body">Phone Number</label>
                      <Input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="bg-background border-border focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 font-body">Subject *</label>
                      <Input value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="How can we help?" required className="bg-background border-border focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 font-body">Your Message *</label>
                    <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your interest, inquiry, or how you'd like to contribute..." rows={6} required className="bg-background border-border focus:border-primary" />
                  </div>
                  <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto shadow-golden">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-elevated">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.lines.map((line) => (
                          <p key={line} className="text-muted-foreground text-sm font-body">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7158861385013!2d77.28877!3d28.5452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daadcd%3A0x4c0ae08e4e28a81e!2sJasola%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Medhavi Foundation Location"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img src={contactTeam} alt="Our dedicated team" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Dedicated <span className="text-primary">People</span> Behind the Mission
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                Our team of passionate environmentalists, project managers, and community leaders works tirelessly to create a lasting positive impact on the environment. Every member brings unique expertise and unwavering commitment.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { num: "25+", label: "Team Members" },
                  { num: "5+", label: "Years Experience" },
                  { num: "50+", label: "Projects Done" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 rounded-xl bg-muted">
                    <h4 className="text-2xl font-bold text-primary">{s.num}</h4>
                    <p className="text-muted-foreground text-xs font-body">{s.label}</p>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" className="shadow-golden">
                Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">FAQs</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="bg-secondary-foreground/5 backdrop-blur-sm rounded-xl border border-secondary-foreground/10 overflow-hidden cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center justify-between p-5">
                    <h4 className="font-semibold text-secondary-foreground pr-4">{faq.q}</h4>
                    <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} className="text-primary text-2xl font-bold shrink-0">+</motion.span>
                  </div>
                  <motion.div initial={false} animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }} className="overflow-hidden">
                    <p className="px-5 pb-5 text-secondary-foreground/70 font-body">{faq.a}</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}>
              Ready to Make a <span className="text-white/90">Difference</span>?
            </h2>
            <p className="text-white/90 font-body text-lg max-w-2xl mx-auto mb-8">
              Join thousands of individuals and organizations who are already contributing to a greener, cleaner India through Medhavi Foundation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline-hero" size="xl">
                <Heart className="mr-2 h-5 w-5" /> Donate Now
              </Button>
              <Button variant="outline-hero" size="xl">
                <Users className="mr-2 h-5 w-5" /> Join as Volunteer
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
