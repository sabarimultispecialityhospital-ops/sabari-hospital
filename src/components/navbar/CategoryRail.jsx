import React from 'react';

export function CategoryRail({ data, activeCategory, setActiveCategory }) {
  return (
    <div className="w-[280px] xl:w-[320px] flex-shrink-0 border-r border-neutral-200 py-10 px-8 lg:px-12 bg-white">
      <h3 className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase mb-8">
        {data.label}
      </h3>
      
      <div className="flex flex-col gap-1">
        {data.categories.map((category, index) => {
          const isActive = activeCategory === category.id;
          const number = String(index + 1).padStart(2, '0');
          
          return (
            <button
              key={category.id}
              onMouseEnter={() => setActiveCategory(category.id)}
              onClick={() => setActiveCategory(category.id)}
              className="text-left py-2.5 flex items-center justify-between group transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <span className={`text-[10px] tracking-wider transition-colors duration-200 ${isActive ? 'text-neutral-400' : 'text-neutral-300 group-hover:text-neutral-400'}`}>
                  {number}
                </span>
                <span className={`text-[14px] transition-colors duration-200 ${isActive ? 'text-black font-semibold' : 'text-neutral-600 font-medium group-hover:text-black'}`}>
                  {category.label}
                </span>
              </div>
              
              <span className={`text-[14px] transition-all duration-200 transform ${isActive ? 'opacity-100 text-black translate-x-1' : 'opacity-0 -translate-x-2 text-neutral-400 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                →
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
