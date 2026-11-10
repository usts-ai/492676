import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0A1628] pt-16 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00C9FF] to-[#92FE9D] text-[#0A1628]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 18a4.5 4.5 0 01.4-9 6 6 0 0111.3 1.8A3.8 3.8 0 0118.5 18H7z" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <span className="font-[Syne] text-lg font-bold">
                Expert <span className="gradient-text">Nextcloud</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Freelance spécialisé dans le déploiement de plateformes Nextcloud auto-hébergées,
              sécurisées et économiques.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { label: "LinkedIn", path: "M6.5 9H3v12h3.5V9zM4.75 3a2 2 0 100 4 2 2 0 000-4zM21 13.3c0-3.1-1.7-4.5-3.9-4.5-1.8 0-2.6 1-3.1 1.7V9H10.5v12H14v-6.5c0-1.7.8-2.8 2.3-2.8 1.4 0 2.2 1 2.2 2.8V21H22v-7.7z" },
                { label: "GitHub", path: "M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.4-3.4-1.4-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.2-4.6-5.1 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.3 9.3 0 015 0c2-.1 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 4-2.3 4.8-4.6 5.1.4.3.7 1 .7 2v3c0 .3.2.6.7.5A10.2 10.2 0 0022 12.2C22 6.6 17.5 2 12 2z" },
                { label: "X", path: "M18.2 3H21l-6.6 7.5L22 21h-5.7l-4.5-5.9L6.5 21H3.7l7-8L2.2 3h5.8l4 5.3L18.2 3zm-1 16.2h1.6L7 4.7H5.3l11.9 14.5z" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href="#contact"
                  aria-label={s.label}
                  whileHover={{ y: -4 }}
                  className="social-icon flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[Syne] text-sm font-bold uppercase tracking-wider text-white/90">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/55">
              {[
                ["Expertise", "#expertise"],
                ["Services", "#services"],
                ["Méthode", "#methode"],
                ["Sécurité", "#securite"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors duration-300 hover:text-[#40E0D0]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[Syne] text-sm font-bold uppercase tracking-wider text-white/90">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/55">
              {["Déploiement", "Sécurité & rôles", "Sauvegardes", "Formation"].map((label) => (
                <li key={label}>
                  <a href="#services" className="transition-colors duration-300 hover:text-[#40E0D0]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[Syne] text-sm font-bold uppercase tracking-wider text-white/90">
              Mentions
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/55">
              {["Mentions légales", "Confidentialité", "CGV"].map((label) => (
                <li key={label}>
                  <a href="#contact" className="transition-colors duration-300 hover:text-[#40E0D0]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {year} Expert Nextcloud — Tous droits réservés</p>
          <p className="text-center sm:text-right">
            Prototype frontend — démo visuelle sans backend
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
