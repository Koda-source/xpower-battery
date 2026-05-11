// X-Power Navbar Component
// Design: Clean white navbar with green accent, language switcher
// Sticky top navigation with smooth scroll links

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages, Language } from '@/lib/i18n';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav.products', href: '#products' },
    { key: 'nav.advantages', href: '#advantages' },
    { key: 'nav.news', href: '#news' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const currentLang = languages.find(l => l.code === lang);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg xp-green-gradient flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span
              className="text-xl font-bold text-gray-900"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.05em' }}
            >
              X-POWER
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
              >
                {t(link.key)}
              </button>
            ))}
          </div>

          {/* Language Switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-green-700 transition-colors px-3 py-1.5 rounded-md border border-gray-200 hover:border-green-300"
              >
                <span>{currentLang?.nativeName}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-50">
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code as Language); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        lang === l.code
                          ? 'bg-green-50 text-green-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="block">{l.nativeName}</span>
                      <span className="text-xs text-gray-400">{l.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('#contact')}
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg xp-green-gradient hover:opacity-90 transition-opacity"
            >
              {t('hero.contact')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-xs font-medium text-gray-600 px-2 py-1 border border-gray-200 rounded"
              >
                {currentLang?.nativeName}
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-50">
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code as Language); setLangOpen(false); }}
                      className={`w-full text-left px-3 py-2 text-xs transition-colors ${
                        lang === l.code ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {l.nativeName}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
              >
                {t(link.key)}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full mt-2 px-4 py-2.5 text-sm font-semibold text-white rounded-lg xp-green-gradient"
            >
              {t('hero.contact')}
            </button>
          </div>
        </div>
      )}

      {/* Overlay to close dropdowns */}
      {(langOpen) && (
        <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
      )}
    </nav>
  );
}
