import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Package,
  ShoppingCart,
  Smartphone,
  Store,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  Bike,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GlowCard } from '@/components/ui/GlowCard';

const FEATURES = [
  {
    icon: Zap,
    title: 'Express en 15 min',
    description: 'Livraison ultra rapide partout à Niamey.',
    color: 'from-primary to-primary-light',
  },
  {
    icon: MapPin,
    title: 'Suivi temps réel',
    description: 'Suivez votre livreur à la trace en direct.',
    color: 'from-success to-success/70',
  },
  {
    icon: Smartphone,
    title: 'Simple à utiliser',
    description: 'Commandez en 3 clics, payez comme vous voulez.',
    color: 'from-accent to-pink',
  },
  {
    icon: CheckCircle2,
    title: 'Livreurs vérifiés',
    description: 'Tous nos livreurs sont formés et évalués.',
    color: 'from-warning to-accent',
  },
  {
    icon: Clock,
    title: '7j/7 • 24h/24',
    description: 'Disponible à toute heure, tous les jours.',
    color: 'from-primary-dark to-primary',
  },
  {
    icon: TrendingUp,
    title: 'Prix transparents',
    description: 'Pas de frais cachés. Prix affiché avant commande.',
    color: 'from-pink to-accent',
  },
];

const SERVICES = [
  { icon: Bike, label: 'Coursier', description: 'Livraison express' },
  { icon: Package, label: 'Pharmacie', description: 'Médicaments urgents' },
  { icon: ShoppingCart, label: 'Supermarché', description: 'Courses quotidiennes' },
  { icon: Store, label: 'Boutique', description: 'Boutiques en ligne' },
];

const STEPS = [
  {
    number: '01',
    title: 'Créez votre commande',
    description:
      'Choisissez un service, indiquez votre position (détectée automatiquement) et votre destination.',
  },
  {
    number: '02',
    title: 'Un livreur arrive',
    description:
      'Notre algorithme assigne le livreur le plus proche. Suivez-le en temps réel sur la carte.',
  },
  {
    number: '03',
    title: 'Recevez votre colis',
    description:
      'Payez en cash ou Mobile Money. Notez votre livreur pour améliorer le service.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HomePage() {
  return (
    <div className="pt-20">
      {/* ═══ HERO ═════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Floating elements background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-[10%] w-20 h-20 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center text-4xl"
          >
            🛵
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-[5%] w-16 h-16 rounded-2xl bg-success/20 backdrop-blur-xl border border-success/30 flex items-center justify-center text-3xl"
          >
            📦
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 right-[15%] w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur-xl border border-accent/30 flex items-center justify-center text-3xl"
          >
            ⚡
          </motion.div>
        </div>

        <div className="container-custom py-20 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Disponible à Niamey
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6"
            >
              Livrez tout,
              <br />
              <span className="gradient-text">en un clin d'œil</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              MS Express est votre compagnon de livraison express à Niamey.
              Coursier, pharmacie, supermarché ou boutique — tout est livré en
              quelques minutes.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" href="/download">
                Télécharger l'app
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/download"
              >
                Voir les apps
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {[
                { value: '15 min', label: 'Livraison moyenne' },
                { value: '5 services', label: 'Disponibles' },
                { value: '7j/7', label: 'Tous les jours' },
                { value: '4.9 ⭐', label: 'Note moyenne' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SERVICES ═════════════════════════════ */}
      <section className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Tous vos besoins,{' '}
              <span className="gradient-text">une seule app</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Choisissez votre service, on s'occupe du reste.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-bg-card border border-border hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-1">
                    {service.label}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═════════════════════════════ */}
      <section className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Pourquoi <span className="gradient-text">MS Express</span> ?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Une expérience de livraison pensée pour vous.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <GlowCard key={feature.title} delay={index * 0.08}>
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-glow`}
                >
                  <feature.icon className="text-white" size={26} />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═════════════════════════ */}
      <section className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              En 3 étapes simples.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-7xl font-mono font-extrabold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-display font-semibold text-2xl mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>

                {index < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-primary/30">
                    <ArrowRight size={32} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ════════════════════════════ */}
      <section className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl p-12 sm:p-20 text-center bg-gradient-to-br from-primary/20 via-primary-dark/10 to-transparent border border-primary/30"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <Users className="mx-auto mb-6 text-primary" size={56} />
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-4">
                Prêt à commencer ?
              </h2>
              <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
                Rejoignez des milliers de clients qui nous font confiance à
                Niamey.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" href="/download">
                  Télécharger maintenant
                  <ArrowRight size={20} />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/contact"
                >
                  Nous contacter
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}