// X-Power Advantages Section
// Design: Dark background with 6 feature cards, green icon accents
// Asymmetric layout with large headline — fully localized

import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Cpu, RotateCcw, Smartphone, Award, Battery } from 'lucide-react';

const advantages = [
  { titleKey: 'adv.1.title', descKey: 'adv.1.desc', Icon: Battery, color: 'from-green-400 to-green-600' },
  { titleKey: 'adv.2.title', descKey: 'adv.2.desc', Icon: Shield, color: 'from-emerald-400 to-emerald-600' },
  { titleKey: 'adv.3.title', descKey: 'adv.3.desc', Icon: Cpu, color: 'from-teal-400 to-teal-600' },
  { titleKey: 'adv.4.title', descKey: 'adv.4.desc', Icon: RotateCcw, color: 'from-green-500 to-lime-600' },
  { titleKey: 'adv.5.title', descKey: 'adv.5.desc', Icon: Smartphone, color: 'from-emerald-500 to-green-700' },
  { titleKey: 'adv.6.title', descKey: 'adv.6.desc', Icon: Award, color: 'from-teal-500 to-emerald-700' },
];

export default function AdvantagesSection() {
  const { t } = useLanguage();

  const stats = [
    { value: '>3000', labelKey: 'stat.cycles' },
    { value: '8-10', labelKey: 'stat.years' },
    { value: '6-8×', labelKey: 'stat.vsLead' },
    { value: 'LiFePO4', labelKey: 'stat.cellType' },
  ];

  return (
    <section id="advantages" className="py-20 xp-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(oklch(0.7 0.15 145) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.15 145) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {t('why.xpower')}
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white xp-section-title"
            >
              {t('adv.title')}
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed lg:text-right">
            {t('hero.desc')}
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map(({ titleKey, descKey, Icon, color }, index) => (
            <div
              key={titleKey}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-green-500/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>

              {/* Number */}
              <div
                className="text-5xl font-black text-white/5 absolute top-4 right-4 select-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                0{index + 1}
              </div>

              {/* Content */}
              <h3
                className="text-base font-bold text-white mb-2"
                style={{ fontFamily: "'Barlow Condensed', 'Noto Sans SC', sans-serif", fontSize: '1.05rem' }}
              >
                {t(titleKey)}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {stats.map(stat => (
            <div key={stat.labelKey} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-black text-green-400"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
