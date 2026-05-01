// X-Power Hero Section
// Design: Full-width dark banner with battery imagery, green accents
// White text on dark background for maximum contrast

import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Phone } from 'lucide-react';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663618333240/PHXKdhQdu5Ub252frUdJaG/hero-banner-PWiLZPcmW7WrSFDVdjGnRV.webp';

export default function HeroSection() {
  const { t, dir } = useLanguage();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className={`max-w-2xl ${dir === 'rtl' ? 'mr-auto' : ''}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-semibold mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            LiFePO4 Technology
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Barlow Condensed', 'Noto Sans SC', sans-serif" }}
          >
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-green-300 font-semibold mb-4"
            style={{ fontFamily: "'Barlow Condensed', 'Noto Sans SC', sans-serif" }}
          >
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-xl">
            {t('hero.desc')}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={() => handleScroll('#contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-lg xp-green-gradient hover:opacity-90 transition-all hover:gap-3"
            >
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('#products')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-lg border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              {t('nav.products')}
            </button>
          </div>

          {/* Quick contact */}
          <div className="mt-10 flex items-center gap-3 text-sm text-gray-400">
            <Phone className="w-4 h-4 text-green-400" />
            <span>WhatsApp: +86 18898880642</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
