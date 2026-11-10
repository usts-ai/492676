import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { label: "Chiffrement transit", value: 100, unit: "%", detail: "TLS / SSL" },
  { label: "Couverture backup", value: 100, unit: "%", detail: "Fichiers + BDD" },
  { label: "Réduction licences", value: 70, unit: "%", detail: "vs cloud public" },
  { label: "Temps de mise en ligne", value: 14, unit: "j", detail: "projet type" },
];

const AdminPanel: React.FC = () => {
  return (
    <div className="glass-light overflow-hidden rounded-[1.75rem] p-5 shadow-xl shadow-[#002D62]/10 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#007BFF]">
            Interface admin
          </p>
          <h3 className="font-[Syne] text-lg font-bold text-[#0A1628]">
            Pilotage & audit
          </h3>
        </div>
        <span className="rounded-full bg-[#92FE9D]/30 px-3 py-1 text-xs font-semibold text-[#002D62]">
          En ligne
        </span>
      </div>

      <div className="space-y-4">
        {[
          { name: "Permissions rôles", pct: 92, color: "from-[#00C9FF] to-[#007BFF]" },
          { name: "Activité plateforme", pct: 78, color: "from-[#40E0D0] to-[#92FE9D]" },
          { name: "Logs sécurité", pct: 85, color: "from-[#7B1FA2] to-[#007BFF]" },
        ].map((row, i) => (
          <div key={row.name}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="font-medium text-[#333333]">{row.name}</span>
              <span className="text-[#002D62]/70">{row.pct}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-[#002D62]/08">
              <motion.div
                className={`stat-bar h-full rounded-full bg-gradient-to-r ${row.color}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: row.pct / 100 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
        {[
          { t: "Utilisateurs", v: "128" },
          { t: "Partages", v: "46" },
          { t: "Alertes", v: "0" },
        ].map((c) => (
          <div
            key={c.t}
            className="rounded-2xl bg-gradient-to-br from-[#002D62] to-[#007BFF] px-3 py-3 text-center text-white"
          >
            <div className="font-[Syne] text-lg font-bold sm:text-xl">{c.v}</div>
            <div className="text-[10px] uppercase tracking-wide text-white/70 sm:text-xs">{c.t}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MetricCard: React.FC<{
  label: string;
  value: number;
  unit: string;
  detail: string;
  delay: number;
}> = ({ label, value, unit, detail, delay }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const duration = 1200;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-300/30 hover:bg-white/10"
    >
      <div className="font-[Syne] text-3xl font-extrabold text-white sm:text-4xl">
        {n}
        <span className="gradient-text text-2xl">{unit}</span>
      </div>
      <div className="mt-2 text-sm font-semibold text-white/90">{label}</div>
      <div className="mt-1 text-xs text-white/50">{detail}</div>
    </motion.div>
  );
};

const Security: React.FC = () => {
  return (
    <section id="securite" className="relative scroll-mt-24 overflow-hidden bg-[#002D62] py-20 text-white sm:py-28">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
          alt="Sécurité informatique et cybersécurité"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#002D62]/85" />
      </div>
      <div className="glow-orb absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#40E0D0]/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#40E0D0]"
            >
              Sécurité & performance
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[Syne] text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              Contrôle des accès, logs d&apos;audit et continuité
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-white/70"
            >
              Tableau de bord documents, notifications d&apos;activité, configuration des permissions
              et suivi des performances — le tout hébergé chez vous.
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {metrics.map((m, i) => (
                <MetricCard key={m.label} {...m} delay={i * 0.08} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="float-anim"
          >
            <AdminPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Security;
