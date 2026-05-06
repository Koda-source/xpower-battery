// X-Power Product Card Component
// Design: White card with product image, key specs, hover elevation effect
// Supports modal expansion for full spec table

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BatterySpec } from '@/lib/batteryData';
import { X, Zap, Thermometer, Gauge, Ruler, Check } from 'lucide-react';
import ComparisonCheckbox from './ComparisonCheckbox';

interface ProductCardProps {
  product: BatterySpec;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t, dir } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const specRows = [
    { key: 'spec.voltage', value: product.voltage },
    { key: 'spec.energy', value: product.energy },
    { key: 'spec.motorPower', value: product.motorPower },
    { key: 'spec.maxChargeCurrent', value: product.maxChargeCurrent },
    { key: 'spec.maxDischargeCurrent', value: product.maxDischargeCurrent },
    { key: 'spec.maxChargeVoltage', value: product.maxChargeVoltage },
    { key: 'spec.minDischargeVoltage', value: product.minDischargeVoltage },
    { key: 'spec.chargeTemp', value: product.chargeTemp },
    { key: 'spec.dischargeTemp', value: product.dischargeTemp },
    { key: 'spec.storageTemp', value: product.storageTemp },
    { key: 'spec.storageSOC', value: product.storageSOC },
    { key: 'spec.humidity', value: product.humidity },
    { key: 'spec.dimensions', value: product.dimensions },
  ];

  return (
    <>
      <div
        className="bg-white rounded-xl border border-gray-100 overflow-hidden xp-card-hover cursor-pointer group"
        onClick={() => setModalOpen(true)}
      >
        {/* Image area */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-44 flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <img
            src={product.image}
            alt={product.model}
            className="max-h-36 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Model badge */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="inline-block px-2 py-0.5 text-xs font-bold text-green-700 bg-green-50 rounded mb-1">
                {product.voltage}
              </span>
              <h3
                className="text-base font-bold text-gray-900"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.1rem' }}
              >
                {product.model}
              </h3>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400">{t('spec.energy')}</div>
              <div className="text-sm font-bold text-green-700">{product.energy}</div>
            </div>
          </div>

          {/* Key specs grid */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-400">{t('spec.motorPower')}</div>
                <div className="text-xs font-semibold text-gray-700">{product.motorPower}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Thermometer className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-400">{t('spec.chargeTemp')}</div>
                <div className="text-xs font-semibold text-gray-700">{product.chargeTemp}</div>
              </div>
            </div>
          </div>

          {/* Dimensions */}
          <div className="flex items-center gap-1.5 mb-3">
            <Ruler className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
            <div>
              <span className="text-xs text-gray-400">{t('spec.dimensions')}: </span>
              <span className="text-xs font-semibold text-gray-700">{product.dimensions}</span>
            </div>
          </div>

          {/* Application tags */}
          <div className="flex flex-wrap gap-1">
            {product.application.map(app => (
              <span key={app} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">
                {t(app)}
              </span>
            ))}
          </div>

          {/* Comparison checkbox and view details */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <ComparisonCheckbox model={product.model} />
            <div className="text-xs text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {t('viewMore')} →
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
            dir={dir}
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg xp-green-gradient flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2
                    className="text-xl font-bold text-gray-900"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {product.model}
                  </h2>
                  <p className="text-xs text-gray-500">{product.voltage} · {product.energy}</p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Modal content */}
            <div className="p-6">
              {/* Product image */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl h-52 flex items-center justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.model}
                  className="max-h-44 max-w-full object-contain"
                />
              </div>

              {/* Application */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">{t('spec.application')}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.application.map(app => (
                    <span key={app} className="px-3 py-1 text-sm bg-green-50 text-green-700 rounded-full font-medium">
                      {t(app)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spec table */}
              <div className="rounded-xl overflow-hidden border border-gray-100">
                <table className="w-full text-sm">
                  <tbody>
                    {specRows.map((row, i) => (
                      <tr key={row.key} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-2.5 text-gray-500 font-medium w-1/2">{t(row.key)}</td>
                        <td className="px-4 py-2.5 text-gray-800 font-semibold">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  setModalOpen(false);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full mt-6 py-3 text-sm font-semibold text-white rounded-xl xp-green-gradient hover:opacity-90 transition-opacity"
              >
                {t('contact.cta')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
