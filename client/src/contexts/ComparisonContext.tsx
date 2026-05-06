import React, { createContext, useContext, useState } from 'react';

export interface ComparisonContextType {
  selectedModels: string[];
  toggleModel: (model: string) => void;
  clearSelection: () => void;
  isModelSelected: (model: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export function ComparisonProvider({ children }: { children: React.ReactNode }) {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const toggleModel = (model: string) => {
    setSelectedModels(prev => {
      if (prev.includes(model)) {
        return prev.filter(m => m !== model);
      } else {
        // 最多选择5个产品进行对比
        if (prev.length < 5) {
          return [...prev, model];
        }
        return prev;
      }
    });
  };

  const clearSelection = () => {
    setSelectedModels([]);
  };

  const isModelSelected = (model: string) => {
    return selectedModels.includes(model);
  };

  return (
    <ComparisonContext.Provider value={{ selectedModels, toggleModel, clearSelection, isModelSelected }}>
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within ComparisonProvider');
  }
  return context;
}
