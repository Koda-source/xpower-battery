import { useComparison } from '@/contexts/ComparisonContext';
import { Checkbox } from '@/components/ui/checkbox';

interface ComparisonCheckboxProps {
  model: string;
  maxSelected?: number;
}

export default function ComparisonCheckbox({ model, maxSelected = 5 }: ComparisonCheckboxProps) {
  const { isModelSelected, toggleModel, selectedModels } = useComparison();
  const isSelected = isModelSelected(model);
  const isMaxReached = selectedModels.length >= maxSelected && !isSelected;

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={`compare-${model}`}
        checked={isSelected}
        onCheckedChange={() => {
          if (!isMaxReached) {
            toggleModel(model);
          }
        }}
        disabled={isMaxReached}
        className="cursor-pointer"
      />
      <label
        htmlFor={`compare-${model}`}
        className={`text-sm font-medium cursor-pointer ${
          isMaxReached && !isSelected ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'
        }`}
      >
        {isSelected ? '✓ 已选中' : '对比'}
      </label>
    </div>
  );
}
