import { useComparison } from '@/contexts/ComparisonContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { batterySeries, BatterySpec } from '@/lib/batteryData';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function ComparisonTable() {
  const { selectedModels, toggleModel, clearSelection } = useComparison();
  const { t } = useLanguage();

  if (selectedModels.length === 0) {
    return null;
  }

  // 获取所有选中的电池数据
  const selectedBatteries: (BatterySpec & { seriesId: string })[] = [];
  
  for (const modelName of selectedModels) {
    for (const series of batterySeries) {
      const battery = series.products.find(p => p.model === modelName);
      if (battery) {
        selectedBatteries.push({ ...battery, seriesId: series.id });
        break;
      }
    }
  }

  // 获取所有规格字段
  const specFields = [
    { key: 'voltage', label: t('specs.voltage') },
    { key: 'energy', label: t('specs.energy') },
    { key: 'motorPower', label: t('specs.motorPower') },
    { key: 'chargeTemp', label: t('specs.chargeTemp') },
    { key: 'dischargeTemp', label: t('specs.dischargeTemp') },
    { key: 'maxChargeCurrent', label: t('specs.maxChargeCurrent') },
    { key: 'maxDischargeCurrent', label: t('specs.maxDischargeCurrent') },
    { key: 'maxChargeVoltage', label: t('specs.maxChargeVoltage') },
    { key: 'minDischargeVoltage', label: t('specs.minDischargeVoltage') },
    { key: 'storageTemp', label: t('specs.storageTemp') },
    { key: 'storageSOC', label: t('specs.storageSOC') },
    { key: 'dimensions', label: t('specs.dimensions') },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-auto">
        {/* 头部 */}
        <div className="sticky top-0 bg-gradient-to-r from-green-600 to-green-700 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{t('comparison.title')}</h2>
          <button
            onClick={clearSelection}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* 对比表格 */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="p-4 text-left font-bold text-gray-700 bg-gray-50 sticky left-0 z-10 min-w-[200px]">
                  {t('comparison.specs')}
                </th>
                {selectedBatteries.map((battery) => (
                  <th key={battery.model} className="p-4 text-center font-bold text-gray-700 min-w-[200px]">
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-lg font-bold text-green-600">{battery.model}</div>
                      <button
                        onClick={() => toggleModel(battery.model)}
                        className="text-xs bg-red-100 text-red-600 hover:bg-red-200 px-2 py-1 rounded transition"
                      >
                        {t('comparison.remove')}
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specFields.map((field, idx) => (
                <tr
                  key={field.key}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="p-4 font-semibold text-gray-700 bg-gray-50 sticky left-0 z-10 border-r border-gray-200">
                    {field.label}
                  </td>
                  {selectedBatteries.map((battery) => (
                    <td
                      key={`${battery.model}-${field.key}`}
                      className="p-4 text-center text-gray-600 border-r border-gray-200"
                    >
                      {(battery[field.key as keyof BatterySpec] as string) || '-'}
                    </td>
                  ))}
                </tr>
              ))}
              
              {/* 应用场景行 */}
              <tr className="bg-green-50 border-t-2 border-green-300">
                <td className="p-4 font-semibold text-gray-700 bg-gray-50 sticky left-0 z-10 border-r border-gray-200">
                  {t('specs.application')}
                </td>
                {selectedBatteries.map((battery) => (
                  <td
                    key={`${battery.model}-app`}
                    className="p-4 text-center text-gray-600 border-r border-gray-200"
                  >
                    <div className="flex flex-wrap gap-1 justify-center">
                      {battery.application.map((app) => (
                        <span
                          key={app}
                          className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
                        >
                          {t(app)}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* 底部操作按钮 */}
        <div className="sticky bottom-0 bg-gray-100 p-4 flex justify-end gap-3 border-t border-gray-300">
          <Button
            variant="outline"
            onClick={clearSelection}
            className="px-6"
          >
            {t('comparison.close')}
          </Button>
        </div>
      </div>
    </div>
  );
}
