import { motion } from 'framer-motion';
import { Smartphone, Bike, Download as DownloadIcon, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GlowCard } from '@/components/ui/GlowCard';
import { LINKS } from '@/lib/utils';

const APPS = [
  {
    id: 'client',
    title: 'MS Express Client',
    description: 'Commandez vos livraisons, suivez vos livreurs en temps réel.',
    icon: Smartphone,
    color: 'from-primary to-primary-light',
    downloadUrl: LINKS.downloadClient,
    available: LINKS.downloadClient !== '#',
    features: [
      'Commande en 3 clics',
      'Suivi GPS en direct',
      'Paiement cash ou Mobile Money',
      'Notation des livreurs',
    ],
  },
  {
    id: 'courier',
    title: 'MS Express Livreur',
    description: 'Acceptez des courses et gagnez à votre rythme.',
    icon: Bike,
    color: 'from-success to-success/70',
    downloadUrl: LINKS.downloadCourier,
    available: LINKS.downloadCourier !== '#',
    features: [
      'Reçoit les courses proches',
      'Navigation GPS intégrée',
      'Suivi des gains en temps réel',
      'Statut en ligne/hors ligne',
    ],
  },
];

export function DownloadPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl mb-4">
            Téléchargez <span className="gradient-text">MS Express</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choisissez l'application qui vous correspond.
          </p>
        </motion.div>

        {/* Apps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {APPS.map((app, index) => (
            <GlowCard key={app.id} delay={index * 0.15}>
              <div className="flex flex-col h-full">
                {/* Icon + title */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-glow`}
                  >
                    <app.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-2xl">
                      {app.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-6">{app.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {app.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Download button */}
                {app.available ? (
                  <Button
                    size="lg"
                    href={app.downloadUrl}
                    external
                    className="w-full"
                  >
                    <DownloadIcon size={20} />
                    Télécharger l'APK
                  </Button>
                ) : (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-warning/10 border border-warning/30">
                    <AlertCircle
                      className="text-warning flex-shrink-0"
                      size={20}
                    />
                    <span className="text-sm text-warning">
                      APK bientôt disponible
                    </span>
                  </div>
                )}
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Installation guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl bg-bg-card border border-border"
        >
          <h2 className="font-display font-bold text-2xl mb-6">
            📱 Comment installer l'APK sur Android ?
          </h2>
          <ol className="space-y-4 text-text-secondary">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                1
              </span>
              <div>
                Téléchargez le fichier APK en cliquant sur le bouton ci-dessus.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                2
              </span>
              <div>
                Ouvrez le fichier téléchargé. Si Android vous demande
                d'autoriser les installations, activez l'option{' '}
                <strong className="text-text-primary">
                  "Installer des applications inconnues"
                </strong>{' '}
                pour votre navigateur.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                3
              </span>
              <div>
                Lancez l'application MS Express depuis votre écran d'accueil.
              </div>
            </li>
          </ol>

          <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/30">
            <p className="text-sm text-primary">
              💡 <strong>iOS (iPhone)</strong> : L'app iOS sera bientôt
              disponible. Contactez-nous pour être notifié du lancement.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}