import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Heart, ArrowRight, TreePine, Users, Award, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import galleryHero from "@/assets/gallery-hero.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import treePlantation from "@/assets/tree-plantation.jpg";
import cleanlinessDrive from "@/assets/cleanliness-drive.jpg";
import climateAwareness from "@/assets/climate-awareness.jpg";
import volunteersTeam from "@/assets/volunteers-team.jpg";
import galleryRiverCleanup from "@/assets/gallery-river-cleanup.jpg";
import galleryCommunityGarden from "@/assets/gallery-community-garden.jpg";
import galleryYouthCelebration from "@/assets/gallery-youth-celebration.jpg";
import galleryZeroWaste from "@/assets/gallery-zero-waste.jpg";
import galleryNeighborhood from "@/assets/gallery-neighborhood.jpg";
import galleryAwards from "@/assets/gallery-awards.jpg";
import involvedVolunteer from "@/assets/involved-volunteer.jpg";
import involvedEducation from "@/assets/involved-education.jpg";
import impactTransformation from "@/assets/impact-transformation.jpg";
import impactCommunity from "@/assets/impact-community.jpg";

const galleryImages = [
  { src: treePlantation, alt: "Community members planting native tree saplings together in Delhi park", category: "Tree Plantation", featured: true },
  { src: galleryRiverCleanup, alt: "Volunteers cleaning the Yamuna riverbank, removing plastic waste", category: "River Cleanup", featured: true },
  { src: galleryCommunityGarden, alt: "Women and children planting flowers in a community garden", category: "Community", featured: true },
  { src: galleryYouthCelebration, alt: "College students celebrating after a successful plantation drive", category: "Tree Plantation" },
  { src: cleanlinessDrive, alt: "Youth volunteers during a neighbourhood cleanliness campaign", category: "Cleanliness Drive" },
  { src: galleryZeroWaste, alt: "Distributing cloth bags to replace plastic at a local market", category: "Zero Waste" },
  { src: climateAwareness, alt: "Students attending an outdoor climate awareness session", category: "Education" },
  { src: galleryNeighborhood, alt: "Families participating in a neighbourhood cleanliness drive", category: "Cleanliness Drive" },
  { src: volunteersTeam, alt: "Medhavi Foundation volunteer team group photo", category: "Team" },
  { src: galleryAwards, alt: "Young eco-warriors receiving awards at green ceremony", category: "Events" },
  { src: involvedVolunteer, alt: "Volunteers in green t-shirts planting saplings during golden hour", category: "Tree Plantation" },
  { src: involvedEducation, alt: "School students learning about sustainability in an interactive workshop", category: "Education" },
  { src: impactTransformation, alt: "Barren land transformed into a thriving green forest", category: "Community" },
  { src: impactCommunity, alt: "Volunteer group celebrating a community impact milestone", category: "Team" },
  { src: heroBanner, alt: "Aerial view of a massive plantation drive at sunrise", category: "Tree Plantation" },
];

const categories = ["All", "Tree Plantation", "River Cleanup", "Cleanliness Drive", "Education", "Zero Waste", "Community", "Events", "Team"];

const galleryStats = [
  { number: "500+", label: "Photos Captured", icon: Camera },
  { number: "200+", label: "Events Documented", icon: Award },
  { number: "50+", label: "Locations Covered", icon: TreePine },
  { number: "10,000+", label: "Smiling Faces", icon: Users },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Ken Burns Background */}
        <motion.img
          src={galleryHero}
          alt="Medhavi Foundation gallery"
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-emerald-950/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-purple-900/20" />

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
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        {/* Decorative lines */}
        <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
        <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

        <div className="container-custom relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Animated badge */}
            <motion.span
              className="inline-block px-5 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6 backdrop-blur-sm border border-primary/30 uppercase tracking-widest"
              animate={{ boxShadow: ["0 0 15px hsl(var(--primary)/0.2)", "0 0 30px hsl(var(--primary)/0.4)", "0 0 15px hsl(var(--primary)/0.2)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              📸 Moments of Impact • Visual Stories
            </motion.span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
              Our{" "}
              <span className="relative inline-block text-primary">
                Gallery
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-amber-400 to-primary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
              </span>
              <br />
              <span className="text-white/85 text-4xl md:text-5xl lg:text-6xl">Every Picture Tells a Green Story</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 font-body leading-relaxed">
              Witness the power of community action — from tree plantations to river cleanups,
              every moment captured here represents a step towards a greener India.
            </p>
          </motion.div>
        </div>

        {/* Bottom pulsing dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/60"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Our Visual Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Capturing <span className="text-primary">Moments</span> of Change
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto font-body">
              Each photograph is a testament to the dedication and passion of our volunteers and communities.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryStats.map((stat, index) => (
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

      {/* Featured Images — large showcase */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Featured Moments
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mt-2">
              Highlights from the <span className="text-primary">Field</span>
            </h2>
            <p className="text-secondary-foreground/70 mt-3 max-w-lg mx-auto font-body">
              Our most impactful moments — the stories behind the green revolution.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.filter(img => img.featured).map((image, index) => (
              <AnimatedSection key={image.alt} delay={index * 0.15}>
                <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-secondary-foreground/10 hover:border-primary/40 transition-all duration-500 group h-full hover:-translate-y-2">
                  <div className="overflow-hidden relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-xs font-semibold text-primary bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30">
                      {image.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-secondary-foreground/80 text-sm leading-relaxed font-body">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery with Filters */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-body">
              Browse Gallery
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2">
              Explore by <span className="text-primary">Category</span>
            </h2>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 font-body ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-golden"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <AnimatedSection key={`${image.alt}-${index}`} delay={index * 0.06}>
                <div
                  className="group rounded-2xl overflow-hidden shadow-soft hover:shadow-golden transition-all duration-500 cursor-pointer hover:-translate-y-1"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="overflow-hidden relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                      <div>
                        <span className="text-xs font-semibold text-primary bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30">
                          {image.category}
                        </span>
                        <p className="text-white text-sm mt-2 font-body">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-card">
                    <span className="text-xs font-semibold text-primary font-body">
                      {image.category}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1 font-body line-clamp-1">{image.alt}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full"
          >
            <img
              src={filteredImages[selectedImage]?.src}
              alt={filteredImages[selectedImage]?.alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <p className="text-white text-center mt-4 font-body">
              {filteredImages[selectedImage]?.alt}
            </p>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
                Want to Be in Our
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Next Photo?
              </h2>
              <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-8 font-body">
                Join our upcoming events and become part of the story. Every volunteer,
                every sapling, every cleanup adds a new frame to our green journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/get-involved">
                    Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline-hero" size="lg" asChild>
                  <Link to="/donate">
                    Support Us <Heart className="ml-2 h-4 w-4" />
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

export default Gallery;
