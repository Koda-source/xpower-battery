// X-Power Products Section
// Design: Tab-based series switcher with product grid
// Supports all 5 battery series with smooth tab transitions

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { batterySeries } from '@/lib/batteryData';
import ProductCard from './ProductCard';

export default function ProductsSection() {
  const { t } = useLanguage();
  const [activeSeries, setActiveSeries] = useState(batterySeries[0].id);

  const currentSeries = batterySeries.find(s => s.id === activeSeries)!;

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product showcase image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/manus-storage/products-showcase_195bb2f0.png"
            alt="X-Power Products Showcase"
            className="w-full h-auto object-cover brightness-110 contrast-105"
            style={{
              filter: 'brightness(1.08) contrast(1.05) saturate(0.95)'
            }}
          />
        </div>

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            X-POWER Products
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 xp-section-title"
          >
            {t('nav.products')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            {t('hero.desc')}
          </p>
        </div>

        {/* Series Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {batterySeries.map(series => (
            <button
              key={series.id}
              onClick={() => setActiveSeries(series.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeSeries === series.id
                  ? 'xp-green-gradient text-white shadow-md shadow-green-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.03em' }}
            >
              {series.voltage}
            </button>
          ))}
        </div>

        {/* Series title */}
        <div className="mb-8">
          <h3
            className="text-xl font-bold text-gray-800 xp-section-title"
          >
            {t(currentSeries.seriesKey)}
          </h3>
          <div className="mt-1 h-0.5 w-16 bg-green-500 rounded" />
        </div>

        {/* Products grid */}
        <div
          key={activeSeries}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          style={{ animation: 'fadeInUp 0.4s ease' }}
        >
          {currentSeries.products.map(product => (
            <ProductCard key={product.model} product={product} />
          ))}
        </div>

        {/* All series overview */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <h3 className="text-center text-lg font-bold text-gray-700 mb-6 xp-section-title">
            {t('allSeries')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {batterySeries.map(series => (
              <button
                key={series.id}
                onClick={() => {
                  setActiveSeries(series.id);
                  document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-4 rounded-xl border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all group text-center"
              >
                <div
                  className="text-2xl font-black text-gray-800 group-hover:text-green-700 transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {series.voltage}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {series.products.length} {t('nav.products')}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
