import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  const words = title.split(" ");
  const lastWord = words.pop();
  const restTitle = words.join(" ");

  return (
    <section className="page-hero bg-primary relative overflow-hidden min-h-[420px] md:min-h-[480px] flex items-center">
      {backgroundImage && (
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      {/* Multi-layer gradient overlays */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,60%,20%,0.35)] via-transparent to-[hsl(25,90%,50%,0.25)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,40%,6%,0.8)] via-[hsl(220,40%,6%,0.2)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(25,90%,50%,0.08)] via-transparent to-[hsl(280,60%,50%,0.08)]" />

      {/* Animated floating particles */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-2 h-2 rounded-full bg-primary/40"
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] left-[15%] w-1.5 h-1.5 rounded-full bg-primary/30"
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-[30%] right-[12%] w-1 h-1 rounded-full bg-accent/50"
        animate={{ y: [0, -25, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-[25%] right-[20%] w-2.5 h-2.5 rounded-full bg-primary/25"
        animate={{ y: [0, -35, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-[45%] left-[45%] w-1 h-1 rounded-full bg-accent/40"
        animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-56 h-56 bg-[hsl(280,60%,50%,0.12)] rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-40 h-40 bg-accent/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Decorative lines */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/8 to-transparent"
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Bottom decorative border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-primary/10 to-transparent blur-sm" />

      <div className="container-custom relative z-10 text-center">
        {/* Decorative badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Medhavi Foundation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          style={{ textShadow: "3px 3px 16px rgba(0,0,0,0.6)" }}
        >
          {restTitle}{" "}
          <motion.span
            className="text-primary inline-block relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ textShadow: "0 0 50px hsl(25, 95%, 55%, 0.6), 0 0 100px hsl(280, 60%, 50%, 0.2), 3px 3px 16px rgba(0,0,0,0.5)" }}
          >
            {lastWord}
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-body"
          style={{ textShadow: "1px 1px 8px rgba(0,0,0,0.4)" }}
        >
          {subtitle}
        </motion.p>

        {/* Decorative dots row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center justify-center gap-2 mt-8"
        >
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          <span className="w-8 h-0.5 rounded-full bg-gradient-to-r from-primary/60 to-primary/20" />
          <span className="w-2 h-2 rounded-full bg-primary/60" />
          <span className="w-8 h-0.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/60" />
          <span className="w-1 h-1 rounded-full bg-primary/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
