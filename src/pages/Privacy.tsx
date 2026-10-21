import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const SECTIONS = [
  {
    number: '1',
    title: 'Introduction',
    content: (
      <>
        <p>
          MS Express, opéré par <strong>Agence Soutien+</strong>, s'engage à
          protéger votre vie privée et vos données personnelles. Cette
          politique de confidentialité explique quelles données nous collectons,
          comment nous les utilisons et quels sont vos droits.
        </p>
      </>
    ),
  },
  {
    number: '2',
    title: 'Données que nous collectons',
    content: (
      <>
        <p>Nous collectons les catégories de données suivantes :</p>

        <h3 className="font-semibold text-text-primary mt-4 mb-2">
          📋 Données d'identification
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nom et prénom</li>
          <li>Numéro de téléphone</li>
          <li>Adresse email (optionnelle)</li>
          <li>Photo de profil (optionnelle)</li>
        </ul>

        <h3 className="font-semibold text-text-primary mt-4 mb-2">
          📍 Données de localisation
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Position GPS au moment de la commande (pour trouver un livreur)</li>
          <li>Position GPS du livreur pendant la livraison (pour le suivi en temps réel)</li>
        </ul>

        <h3 className="font-semibold text-text-primary mt-4 mb-2">
          📦 Données de commande
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Détails des commandes (adresses, prix, mode de paiement)</li>
          <li>Historique des livraisons</li>
          <li>Avis et notes laissés</li>
        </ul>

        <h3 className="font-semibold text-text-primary mt-4 mb-2">
          📱 Données techniques
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Type d'appareil et système d'exploitation</li>
          <li>Identifiant unique de l'appareil</li>
          <li>Logs d'utilisation</li>
        </ul>
      </>
    ),
  },
  {
    number: '3',
    title: 'Comment nous utilisons vos données',
    content: (
      <>
        <p>Vos données sont utilisées pour :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Créer et gérer votre compte utilisateur</li>
          <li>Traiter vos commandes et vous mettre en relation avec un livreur</li>
          <li>Afficher la position du livreur en temps réel</li>
          <li>Vous envoyer des notifications relatives à vos livraisons</li>
          <li>Améliorer nos services (analyses statistiques)</li>
          <li>Prévenir la fraude et assurer la sécurité</li>
          <li>Respecter nos obligations légales</li>
        </ul>
      </>
    ),
  },
  {
    number: '4',
    title: 'Partage de vos données',
    content: (
      <>
        <p>
          Vos données ne sont <strong>jamais vendues</strong> à des tiers.
          Elles peuvent être partagées avec :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Les livreurs</strong> : uniquement les informations
            nécessaires à la livraison (nom, adresse, téléphone)
          </li>
          <li>
            <strong>Nos prestataires techniques</strong> (hébergement, envoi de
            SMS) : dans le strict cadre de l'exécution du service
          </li>
          <li>
            <strong>Les autorités</strong> : uniquement sur demande légale
          </li>
        </ul>
      </>
    ),
  },
  {
    number: '5',
    title: 'Durée de conservation',
    content: (
      <>
        <p>Vos données sont conservées :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Compte actif</strong> : aussi longtemps que vous utilisez le
            service
          </li>
          <li>
            <strong>Après suppression du compte</strong> : 3 mois (obligations
            comptables), puis anonymisation
          </li>
          <li>
            <strong>Données de localisation</strong> : 30 jours après la
            livraison
          </li>
        </ul>
      </>
    ),
  },
  {
    number: '6',
    title: 'Sécurité des données',
    content: (
      <>
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles
          pour protéger vos données :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Chiffrement des communications (HTTPS)</li>
          <li>Hachage des mots de passe (bcrypt)</li>
          <li>Accès restreint aux données (authentification JWT)</li>
          <li>Surveillance des tentatives d'accès non autorisées</li>
        </ul>
        <p>
          Malgré ces mesures, aucun système n'est infaillible. En cas de
          violation de données, nous vous informerons dans les 72h.
        </p>
      </>
    ),
  },
  {
    number: '7',
    title: 'Vos droits',
    content: (
      <>
        <p>Vous disposez des droits suivants sur vos données :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Droit d'accès</strong> : consulter toutes vos données
            personnelles
          </li>
          <li>
            <strong>Droit de rectification</strong> : corriger les informations
            inexactes
          </li>
          <li>
            <strong>Droit à l'effacement</strong> : supprimer votre compte et
            vos données
          </li>
          <li>
            <strong>Droit à la portabilité</strong> : recevoir vos données dans
            un format exploitable
          </li>
          <li>
            <strong>Droit d'opposition</strong> : refuser certains traitements
          </li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à{' '}
          <strong>contact@msexpress.com</strong>. Nous répondrons sous 30 jours.
        </p>
      </>
    ),
  },
  {
    number: '8',
    title: 'Localisation GPS',
    content: (
      <>
        <p>
          <strong>Client</strong> : votre position GPS est utilisée uniquement
          au moment de la commande pour faciliter la saisie de l'adresse de
          récupération. Elle peut être modifiée manuellement.
        </p>
        <p>
          <strong>Livreur</strong> : votre position est envoyée toutes les{' '}
          <strong>10 secondes</strong> au serveur pendant une course active pour
          permettre au client de vous suivre. Vous pouvez désactiver la
          localisation dans les paramètres de votre téléphone, mais cela
          empêchera le bon fonctionnement du service.
        </p>
        <p>
          Vous pouvez à tout moment vous déconnecter ou désactiver votre statut
          « en ligne » pour arrêter le partage de votre position.
        </p>
      </>
    ),
  },
  {
    number: '9',
    title: 'Cookies et traceurs',
    content: (
      <>
        <p>
          Notre site web utilise des cookies techniques strictement nécessaires
          à son fonctionnement (session, préférences). Nous n'utilisons{' '}
          <strong>aucun cookie publicitaire</strong> ou de tracking tiers.
        </p>
      </>
    ),
  },
  {
    number: '10',
    title: 'Mineurs',
    content: (
      <>
        <p>
          MS Express n'est pas destiné aux personnes de moins de{' '}
          <strong>18 ans</strong>. Nous ne collectons pas sciemment de données
          concernant des mineurs. Si vous pensez qu'un mineur a créé un compte,
          contactez-nous immédiatement.
        </p>
      </>
    ),
  },
  {
    number: '11',
    title: 'Modifications',
    content: (
      <>
        <p>
          Cette politique peut être mise à jour. En cas de changement
          significatif, vous serez notifié par email ou via l'application au
          moins <strong>15 jours</strong> avant l'entrée en vigueur.
        </p>
      </>
    ),
  },
  {
    number: '12',
    title: 'Contact',
    content: (
      <>
        <p>
          Pour toute question relative à vos données personnelles, contactez
          notre responsable :
        </p>
        <ul className="list-none space-y-2 mt-3">
          <li>📧 Email : privacy@msexpress.com</li>
          <li>📞 Téléphone : +227 XX XX XX XX</li>
          <li>📍 Adresse : Niamey, Niger</li>
        </ul>
      </>
    ),
  },
];

export function PrivacyPage() {
  const lastUpdate = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-success to-success/70 flex items-center justify-center shadow-glow">
              <Shield className="text-white" size={28} />
            </div>
            <div>
              <div className="text-sm text-text-muted uppercase tracking-wider">
                Document légal
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl">
                Politique de confidentialité
              </h1>
            </div>
          </div>
          <p className="text-text-secondary">
            Dernière mise à jour : <strong>{lastUpdate}</strong>
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {SECTIONS.map((section, index) => (
            <motion.section
              key={section.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-success/15 border border-success/30 flex items-center justify-center font-mono font-bold text-success">
                  {section.number}
                </span>
                <h2 className="font-display font-semibold text-2xl pt-1.5">
                  {section.title}
                </h2>
              </div>
              <div className="text-text-secondary leading-relaxed space-y-3 pl-14">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-success/10 border border-success/30 text-center"
        >
          <p className="text-sm text-text-secondary">
            Votre vie privée est notre priorité. Si vous avez la moindre
            question, n'hésitez pas à nous contacter.
          </p>
        </motion.div>
      </div>
    </div>
  );
}