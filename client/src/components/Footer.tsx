// X-Power Footer Component
// Design: Dark footer with brand info, quick links, contact
// Fully localized for zh/en/ar/de/es

import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const seriesLinks = [
    { label: '52V', id: '52v' },
    { label: '60V', id: '60v' },
    { label: '72V', id: '72v' },
    { label: '64V', id: '64v' },
    { label: '76.8V', id: '768v' },
  ];

  return (
    <footer className="xp-dark-bg text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg xp-green-gradient flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.05em' }}
              >
                X-POWER
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              {t('footer.company')} — {t('footer.tagline')}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 xp-section-title">{t('footer.products')}</h4>
            <ul className="space-y-2">
              {seriesLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick('#products')}
                    className="text-sm text-gray-500 hover:text-green-400 transition-colors"
                  >
                    {label} {t('footer.series')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 xp-section-title">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <div className="text-xs text-gray-600 mb-0.5">{t('contact.name')}</div>
                <div className="text-sm text-gray-300 font-medium">Koda Huang</div>
              </li>
              <li>
                <a href="tel:+8618898880642" className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-400 transition-colors">
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  +86 18898880642
                </a>
              </li>
              <li>
                <a href="https://wa.me/8618898880642" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-400 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:sales02@xpower-world.com" className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  sales02@xpower-world.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} X-Power New Energy Technology. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>LiFePO4 Technology</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>BMS Protected</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>ISO Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
