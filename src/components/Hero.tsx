import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden mesh-bg text-white"
    >
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <div className="hero-shine" />

      <motion.div
        style={{ y: yImg }}
        className="pointer-events-none absolute -right-16 top-24 h-[55%] w-[70%] max-w-3xl opacity-40 sm:opacity-55 lg:right-0 lg:opacity-70"
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
          alt="Infrastructure cloud et réseau mondial"
          className="h-full w-full object-cover mask-image"
          style={{
            maskImage: "linear-gradient(90deg, transparent 0%, black 30%, black 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 30%, black 100%)",
          }}
        />
      </motion.div>

      <div className="glow-orb absolute left-[-10%] top-[20%] h-64 w-64 rounded-full bg-[#007BFF]/40" />
      <div className="glow-orb absolute bottom-[10%] right-[5%] h-72 w-72 rounded-full bg-[#40E0D0]/25" />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6 lg:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-100 sm:text-sm"
        >
          <span className="relative pulse-ring inline-block h-2 w-2 rounded-full bg-[#40E0D0]" />
          Freelance spécialisé Nextcloud auto-hébergé
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-[Syne] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Expert{" "}
          <span className="gradient-text">Nextcloud</span>
          <br />
          votre cloud privé,{" "}
          <span className="text-white/90">maîtrisé</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.75 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Déploiement, sécurisation et sauvegarde de Nextcloud sur votre infrastructure.
          Centralisez documents, synchronisation et partages partenaires — sans licences cloud coûteuses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] px-7 py-3.5 text-sm font-semibold text-[#0A1628] shadow-xl shadow-cyan-400/20 transition-transform duration-300 hover:scale-[1.03]"
          >
            Lancer mon projet
          </a>
          <a
            href="#expertise"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10"
          >
            Découvrir l&apos;expertise
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-14 flex flex-wrap gap-6 text-sm text-white/55 sm:gap-10"
        >
          {[
            { n: "99,9%", l: "disponibilité cible" },
            { n: "SSL", l: "HTTPS de bout en bout" },
            { n: "RGPD", l: "données chez vous" },
          ].map((item) => (
            <div key={item.l} className="min-w-[7rem]">
              <div className="font-[Syne] text-xl font-bold text-white sm:text-2xl">{item.n}</div>
              <div className="mt-0.5 text-xs sm:text-sm">{item.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f4f8fc] to-transparent" />
    </section>
  );
};

export default Hero;
