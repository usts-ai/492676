import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "deploy",
    title: "Déploiement Nextcloud",
    desc: "Analyse de l'infrastructure, architecture cible, installation PHP / MySQL / Nginx ou Apache, certificats SSL.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    tags: ["Installation", "SSL", "MariaDB"],
  },
  {
    id: "securite",
    title: "Sécurité & accès",
    desc: "Gestion des rôles, permissions granulaires, journalisation d'audit et durcissement de la plateforme.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    tags: ["RBAC", "Audit", "HTTPS"],
  },
  {
    id: "partage",
    title: "Partage partenaires",
    desc: "Flux de partage simplifiés pour les interlocuteurs externes, avec contrôle des liens et des durées d'accès.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    tags: ["Collaboration", "Liens", "Notifications"],
  },
  {
    id: "backup",
    title: "Sauvegarde & PRA",
    desc: "Automatisation des backups fichiers et bases, procédures de restauration documentées et validées.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1000&q=80",
    tags: ["Backup", "Restauration", "Continuité"],
  },
];

const Services: React.FC = () => {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active) ?? services[0];

  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-[#0A1628] py-20 text-white sm:py-28">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="glow-orb absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#007BFF]/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#40E0D0]">
            Services
          </p>
          <h2 className="font-[Syne] text-3xl font-extrabold tracking-tight sm:text-4xl">
            De l&apos;installation au pilotage quotidien
          </h2>
          <p className="mt-4 text-white/65">
            Une offre claire pour industrialiser votre cloud documentaire privé, sans complexité inutile.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-3 lg:col-span-5">
            {services.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                className={`rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                  active === s.id
                    ? "border-cyan-300/40 bg-white/10 shadow-lg shadow-cyan-500/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <div className="font-[Syne] text-base font-bold sm:text-lg">{s.title}</div>
                <p
                  className={`mt-1 text-sm leading-relaxed transition-colors ${
                    active === s.id ? "text-white/75" : "text-white/45"
                  }`}
                >
                  {s.desc}
                </p>
              </button>
            ))}
          </div>

          <div className="relative lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.97, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -8 }}
                transition={{ duration: 0.45 }}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/10"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-[280px] w-full object-cover sm:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/35 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="font-[Syne] text-2xl font-bold">{current.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-cyan-100 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
