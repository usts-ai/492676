import React from "react";
import { motion } from "framer-motion";

const points = [
  {
    title: "Installation sur votre infra",
    text: "Nextcloud déployé sur Apache ou Nginx, PHP et MariaDB, adapté à votre environnement existant.",
  },
  {
    title: "Accès & permissions",
    text: "Rôles utilisateurs, partages externes contrôlés et politiques d'accès adaptées à vos équipes.",
  },
  {
    title: "Sauvegarde & restauration",
    text: "Stratégie complète : fichiers, bases de données et configurations, avec tests de restauration.",
  },
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#00C9FF]/20 to-[#92FE9D]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-[#002D62]/15">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
              alt="Salle serveurs pour hébergement Nextcloud"
              className="h-[280px] w-full object-cover sm:h-[380px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-[Syne] text-lg font-bold text-white sm:text-xl">
                Cloud privé. Contrôle total.
              </p>
              <p className="mt-1 text-sm text-white/75">
                Vos documents restent sur votre infrastructure.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#007BFF]">
            Expertise
          </p>
          <h2 className="font-[Syne] text-3xl font-extrabold tracking-tight text-[#0A1628] sm:text-4xl">
            Une plateforme fiable, sécurisée et économique
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#333333]/80 sm:text-lg">
            Je conçois et déploie votre instance Nextcloud pour centraliser stockage,
            synchronisation et partage sécurisé — collaborateurs et partenaires externes inclus.
          </p>

          <ul className="mt-8 space-y-5">
            {points.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group flex gap-4 rounded-2xl border border-[#002D62]/06 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#40E0D0]/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#007BFF] to-[#40E0D0] font-[Syne] text-sm font-bold text-white">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-[Syne] text-base font-bold text-[#002D62]">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#333333]/75">{p.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
