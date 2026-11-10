import React from "react";
import { motion } from "framer-motion";

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0A1628] via-[#002D62] to-[#007BFF] px-6 py-12 text-white sm:px-12 sm:py-16"
        >
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#40E0D0]/25 blur-3xl" />
          <div className="absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-[#7B1FA2]/30 blur-3xl" />
          <div className="absolute inset-0 grid-overlay opacity-30" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#40E0D0]">
                Contact
              </p>
              <h2 className="font-[Syne] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Prêt à sécuriser votre cloud documentaire ?
              </h2>
              <p className="mt-4 max-w-lg text-white/70">
                Décrivez votre infrastructure actuelle. Je vous propose une architecture Nextcloud
                claire, un plan de déploiement et une stratégie de sauvegarde adaptée.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 sm:p-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
              >
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/70">
                    Nom / Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Société Durand"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-300/50"
                    readOnly
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="vous@entreprise.fr"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-300/50"
                    readOnly
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/70">
                    Besoin principal
                  </label>
                  <select
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/50"
                    defaultValue="deploy"
                    disabled
                  >
                    <option value="deploy">Déploiement Nextcloud</option>
                    <option value="secu">Sécurisation & accès</option>
                    <option value="backup">Sauvegarde & restauration</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="w-full rounded-full bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] px-6 py-3.5 text-sm font-semibold text-[#0A1628] transition-transform duration-300 hover:scale-[1.02]"
                >
                  Demander un audit gratuit
                </button>
                <p className="text-center text-xs text-white/45">
                  Démo visuelle — aucun envoi réel
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
