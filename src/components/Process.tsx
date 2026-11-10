import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Analyse & architecture",
    text: "Audit de votre infrastructure existante et définition de l'architecture Nextcloud cible.",
  },
  {
    step: "02",
    title: "Installation & configuration",
    text: "Mise en place serveur, base de données, reverse proxy et certificats SSL HTTPS.",
  },
  {
    step: "03",
    title: "Sécurité & accès",
    text: "Rôles, permissions, partage externe maîtrisé et journalisation des activités.",
  },
  {
    step: "04",
    title: "Sauvegarde & formation",
    text: "Stratégie de backup, documentation et formation utilisateurs / administrateurs.",
  },
];

const Process: React.FC = () => {
  return (
    <section id="methode" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#007BFF]">
            Méthode
          </p>
          <h2 className="font-[Syne] text-3xl font-extrabold tracking-tight text-[#0A1628] sm:text-4xl">
            Un déploiement clair, de bout en bout
          </h2>
          <p className="mt-4 text-[#333333]/75">
            Quatre étapes pour passer d'un besoin documentaire à une plateforme opérationnelle et sécurisée.
          </p>
        </motion.div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent lg:block" />
          {steps.map((s, i) => (
            <motion.article
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl border border-[#002D62]/08 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#007BFF]/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#40E0D0] font-[Syne] text-sm font-bold text-white shadow-md shadow-blue-500/25">
                {s.step}
              </div>
              <h3 className="font-[Syne] text-lg font-bold text-[#002D62]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#333333]/75">{s.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
