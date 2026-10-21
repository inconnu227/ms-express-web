import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const SECTIONS = [
  {
    number: '1',
    title: "Objet et acceptation",
    content: (
      <>
        <p>
          Les présentes Conditions Générales d'Utilisation (ci-après « CGU »)
          régissent l'utilisation de la plateforme <strong>MS Express</strong>,
          service de livraison à la demande opéré par{' '}
          <strong>Agence Soutien+</strong>, dont le siège est à Niamey, Niger.
        </p>
        <p>
          En créant un compte ou en utilisant le service MS Express, vous
          acceptez sans réserve les présentes CGU dans leur intégralité. Si vous
          n'acceptez pas ces conditions, vous devez cesser immédiatement
          l'utilisation du service.
        </p>
      </>
    ),
  },
  {
    number: '2',
    title: "Description du service",
    content: (
      <>
        <p>
          MS Express met en relation des utilisateurs souhaitant faire livrer
          des colis ou se déplacer (ci-après « Clients ») et des prestataires
          indépendants assurant ces livraisons (ci-après « Livreurs »).
        </p>
        <p>Le service comprend notamment :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>La livraison express de colis (coursier)</li>
          <li>La livraison de médicaments depuis les pharmacies partenaires</li>
          <li>La livraison de courses (supermarchés, boulangeries)</li>
          <li>La livraison de produits depuis des boutiques en ligne</li>
        </ul>
      </>
    ),
  },
  {
    number: '3',
    title: "Création de compte",
    content: (
      <>
        <p>
          Pour utiliser MS Express, vous devez créer un compte en fournissant
          des informations exactes et à jour : nom, prénom, numéro de téléphone,
          email (optionnel).
        </p>
        <p>
          Vous êtes seul responsable de la confidentialité de vos identifiants
          et de toutes les activités effectuées sous votre compte. Toute
          utilisation frauduleuse doit être immédiatement signalée à notre
          équipe.
        </p>
        <p>
          Vous devez avoir au moins <strong>18 ans</strong> pour utiliser le
          service.
        </p>
      </>
    ),
  },
  {
    number: '4',
    title: "Commandes et tarifs",
    content: (
      <>
        <p>
          Le prix de chaque livraison est calculé en fonction de la distance et
          du type de service. Le tarif minimum est de{' '}
          <strong>1 000 FCFA</strong> pour toute course.
        </p>
        <p>
          Le prix affiché avant la confirmation de la commande est le prix
          définitif. Aucun frais supplémentaire ne peut être ajouté par le
          livreur.
        </p>
        <p>
          Les modes de paiement acceptés sont : Mobile Money (Wave, Orange
          Money, Airtel Money) et espèces (paiement au livreur).
        </p>
      </>
    ),
  },
  {
    number: '5',
    title: "Obligations du Client",
    content: (
      <>
        <p>En tant que Client, vous vous engagez à :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fournir des informations exactes sur votre position</li>
          <li>Communiquer des coordonnées valides au point de départ et d'arrivée</li>
          <li>Ne pas envoyer de produits illicites, dangereux ou interdits par la loi nigérienne</li>
          <li>Être présent au moment de la livraison</li>
          <li>Payer le montant convenu (sauf annulation dans les délais)</li>
          <li>Respecter les Livreurs et rester courtois</li>
        </ul>
      </>
    ),
  },
  {
    number: '6',
    title: "Obligations du Livreur",
    content: (
      <>
        <p>En tant que Livreur, vous vous engagez à :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Disposer d'un véhicule en bon état et assuré</li>
          <li>Traiter les colis avec soin et respecter leur intégrité</li>
          <li>Livrer dans les délais annoncés</li>
          <li>Respecter les règles de sécurité routière</li>
          <li>Maintenir un comportement professionnel et courtois</li>
          <li>Reverser la commission de 35% sur chaque course à MS Express</li>
        </ul>
      </>
    ),
  },
  {
    number: '7',
    title: "Commission des Livreurs",
    content: (
      <>
        <p>
          Pour chaque course effectuée, le Livreur perçoit{' '}
          <strong>65%</strong> du montant total et reverse{' '}
          <strong>35%</strong> à MS Express au titre de la commission de
          service.
        </p>
        <p>
          Le montant de la commission due est consultable à tout moment dans
          l'application Livreur. Le versement peut être effectué quotidiennement
          ou hebdomadairement selon accord.
        </p>
      </>
    ),
  },
  {
    number: '8',
    title: "Annulation et remboursement",
    content: (
      <>
        <p>
          Vous pouvez annuler une commande <strong>gratuitement</strong> tant
          qu'aucun livreur ne l'a acceptée.
        </p>
        <p>
          Une fois la commande acceptée, l'annulation peut entraîner des frais
          selon le statut de la livraison.
        </p>
        <p>
          En cas de litige (colis perdu, endommagé), MS Express s'engage à
          traiter votre réclamation sous 48h et à proposer une solution
          adaptée.
        </p>
      </>
    ),
  },
  {
    number: '9',
    title: "Responsabilité",
    content: (
      <>
        <p>
          MS Express agit en tant qu'intermédiaire technique. La responsabilité
          de l'exécution de la livraison incombe au Livreur.
        </p>
        <p>
          Toutefois, MS Express s'engage à sélectionner des Livreurs fiables et
          à intervenir en cas de problème.
        </p>
        <p>
          MS Express ne peut être tenu responsable des retards causés par des
          événements extérieurs (intempéries, embouteillages majeurs, force
          majeure).
        </p>
      </>
    ),
  },
  {
    number: '10',
    title: "Suspension et résiliation",
    content: (
      <>
        <p>
          MS Express se réserve le droit de suspendre ou résilier tout compte
          en cas de :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Non-respect des présentes CGU</li>
          <li>Comportement abusif envers les autres utilisateurs</li>
          <li>Activité frauduleuse</li>
          <li>Tentative de contournement de la commission</li>
        </ul>
        <p>
          La suspension peut être immédiate et sans préavis en cas de faute
          grave.
        </p>
      </>
    ),
  },
  {
    number: '11',
    title: "Modification des CGU",
    content: (
      <>
        <p>
          MS Express se réserve le droit de modifier les présentes CGU à tout
          moment. Les utilisateurs seront notifiés par email ou dans
          l'application au moins <strong>15 jours</strong> avant l'entrée en
          vigueur des modifications.
        </p>
        <p>
          La poursuite de l'utilisation du service après cette date vaut
          acceptation des nouvelles conditions.
        </p>
      </>
    ),
  },
  {
    number: '12',
    title: "Droit applicable et litiges",
    content: (
      <>
        <p>
          Les présentes CGU sont régies par le droit nigérien. En cas de litige,
          une solution amiable sera recherchée en priorité.
        </p>
        <p>
          À défaut d'accord amiable, les tribunaux compétents de Niamey seront
          seuls saisis.
        </p>
      </>
    ),
  },
  {
    number: '13',
    title: "Contact",
    content: (
      <>
        <p>
          Pour toute question relative aux présentes CGU, vous pouvez nous
          contacter à :
        </p>
        <ul className="list-none space-y-2 mt-3">
          <li>📧 Email : contact@msexpress.com</li>
          <li>📞 Téléphone : +227 XX XX XX XX</li>
          <li>📍 Adresse : Niamey, Niger</li>
        </ul>
      </>
    ),
  },
];

export function TermsPage() {
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-glow">
              <FileText className="text-white" size={28} />
            </div>
            <div>
              <div className="text-sm text-text-muted uppercase tracking-wider">
                Document légal
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl">
                Conditions d'utilisation
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
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center font-mono font-bold text-primary">
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
          className="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/30 text-center"
        >
          <p className="text-sm text-text-secondary">
            En utilisant MS Express, vous reconnaissez avoir lu et accepté les
            présentes Conditions Générales d'Utilisation.
          </p>
        </motion.div>
      </div>
    </div>
  );
}