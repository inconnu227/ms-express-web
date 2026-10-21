import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Liens externes
 */
export const LINKS = {
  // ⚠️ À REMPLACER par ton URL de dashboard
  dashboard: 'https://msexpress-admin.netlify.app',
  
  // ⚠️ À REMPLACER quand les APK seront prêts
  downloadClient: '#', // ex: '/downloads/ms-express-client.apk'
  downloadCourier: '#', // ex: '/downloads/ms-express-courier.apk',
  
  // Contact
  email: 'contact@msexpress.com',
  phone: '+22700000000',
  whatsapp: 'https://wa.me/22700000000',
} as const;