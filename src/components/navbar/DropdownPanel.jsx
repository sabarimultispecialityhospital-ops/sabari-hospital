import React, { useState, useEffect } from 'react';
import { CategoryRail } from './CategoryRail';
import { ContentPanel } from './ContentPanel';

export function DropdownPanel({ data }) {
  const [activeCategory, setActiveCategory] = useState(data.categories[0]?.id);

  // Reset to first category when data changes
  useEffect(() => {
    if (data && data.categories.length > 0) {
      setActiveCategory(data.categories[0].id);
    }
  }, [data]);

  const activeCategoryData = data.categories.find(c => c.id === activeCategory);

  return (
    <div className="flex w-full h-full max-w-[1600px] mx-auto min-h-[380px]">
      <CategoryRail 
        data={data} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <ContentPanel 
        activeCategoryData={activeCategoryData} 
        footerAction={data.footerAction}
      />
    </div>
  );
}
