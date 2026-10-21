import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LINKS } from '@/lib/utils';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-card border-t border-border mt-24">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">
                  MS
                </span>
              </div>
              <span className="font-display font-bold text-xl text-text-primary">
                MS <span className="text-primary">Express</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm max-w-md leading-relaxed">
              Votre compagnon de livraison express à Niamey et partout au
              Niger. Commandez en un clic, suivez en temps réel, payez comme
              vous voulez.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Télécharger', href: '/download' },
                { label: 'Contact', href: '/contact' },
                { label: 'Dashboard', href: LINKS.dashboard, external: true },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-text-primary mb-4">
              Légal
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Conditions d'utilisation", href: '/legal/terms' },
                { label: 'Confidentialité', href: '/legal/privacy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-6 text-sm text-text-secondary">
          <a
            href={`mailto:${LINKS.email}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={16} />
            {LINKS.email}
          </a>
          <a
            href={`tel:${LINKS.phone}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone size={16} />
            {LINKS.phone}
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} />
            Niamey, Niger
          </span>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-text-muted">
          © {year} MS Express. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}