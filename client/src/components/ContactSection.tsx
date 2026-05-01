// X-Power Contact Section
// Design: Split layout - left info panel (dark), right contact form (light)
// Contact: Koda Huang, +86 18898880642, sales02@xpower-world.com
// Fully localized for zh/en/ar/de/es

import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MessageCircle, Zap } from 'lucide-react';
import { batterySeries } from '@/lib/batteryData';

export default function ContactSection() {
  const { t, dir } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+86 18898880642',
      href: 'tel:+8618898880642',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+86 18898880642',
      href: 'https://wa.me/8618898880642',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'sales02@xpower-world.com',
      href: 'mailto:sales02@xpower-world.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            {t('contact.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 xp-section-title">
            {t('contact.title')}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Contact info card */}
          <div className="xp-dark-bg rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-green-500/10 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-green-500/5 blur-xl pointer-events-none" />

            <div className="relative z-10">
              {/* Brand */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl xp-green-gradient flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.05em' }}
                  >
                    X-POWER
                  </div>
                  <div className="text-xs text-gray-400">{t('footer.tagline').slice(0, 28)}...</div>
                </div>
              </div>

              {/* Contact person */}
              <div className="mb-8">
                <div className="text-xs text-gray-400 mb-1">{t('contact.name')}</div>
                <div
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Koda Huang
                </div>
                <div className="text-sm text-green-400 mt-1">{t('contact.salesTitle')}</div>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/40 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                      <Icon className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">{label}</div>
                      <div className="text-sm font-semibold text-white">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/8618898880642"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-xl xp-green-gradient text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                {t('contact.cta')} via WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Info + Quick contact */}
          <div className="space-y-6">
            {/* Company info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3
                className="text-lg font-bold text-gray-900 mb-4 xp-section-title"
              >
                X-Power New Energy Technology
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('hero.desc')}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {batterySeries.map(series => (
                  <div key={series.id} className="flex items-center gap-2 p-2 rounded-lg bg-green-50">
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span
                      className="text-sm font-bold text-green-700"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {series.voltage}
                    </span>
                    <span className="text-xs text-gray-500">
                      {series.products.length} {t('nav.products')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick inquiry form */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-4 xp-section-title">
                {t('contact.quickInquiry')}
              </h3>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  window.open('https://wa.me/8618898880642', '_blank');
                }}
                className="space-y-3"
              >
                <input
                  type="text"
                  placeholder={t('contact.yourName')}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder={t('contact.yourEmail')}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors"
                />
                <textarea
                  rows={3}
                  placeholder={t('contact.yourInquiry')}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-white rounded-lg xp-green-gradient hover:opacity-90 transition-opacity"
                >
                  {t('contact.cta')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
