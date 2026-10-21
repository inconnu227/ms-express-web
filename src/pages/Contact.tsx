import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LINKS } from '@/lib/utils';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const subject = encodeURIComponent(`Message de ${name} - MS Express`);
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;

    setTimeout(() => setSending(false), 1500);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl mb-4">
            Contactez-<span className="gradient-text">nous</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Une question ? Un problème ? Notre équipe vous répond rapidement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact infos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: LINKS.email,
                href: `mailto:${LINKS.email}`,
                color: 'from-primary to-primary-light',
              },
              {
                icon: Phone,
                label: 'Téléphone',
                value: LINKS.phone,
                href: `tel:${LINKS.phone}`,
                color: 'from-success to-success/70',
              },
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: 'Discuter sur WhatsApp',
                href: LINKS.whatsapp,
                color: 'from-[#25D366] to-[#128C7E]',
              },
              {
                icon: MapPin,
                label: 'Adresse',
                value: 'Niamey, Niger',
                href: null,
                color: 'from-accent to-pink',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl bg-bg-card border border-border hover:border-primary/50 transition-all"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="text-white" size={22} />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted mb-1">
                        {item.label}
                      </div>
                      <div className="text-text-primary font-semibold">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className="text-white" size={22} />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted mb-1">
                        {item.label}
                      </div>
                      <div className="text-text-primary font-semibold">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-bg-card border border-border space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Votre nom
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Awa Diallo"
                className="w-full px-4 h-12 rounded-xl bg-bg-deep border border-border text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="awa@example.com"
                className="w-full px-4 h-12 rounded-xl bg-bg-deep border border-border text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Bonjour, j'aimerais savoir..."
                className="w-full px-4 py-3 rounded-xl bg-bg-deep border border-border text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              />
            </div>

            <Button type="submit" size="lg" fullWidth disabled={sending}>
              <Send size={18} />
              {sending ? 'Envoi en cours...' : 'Envoyer le message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}