"use client";

import { Category } from "@/types/menu";
import SubCategorySection from "./SubCategorySection";

interface CategorySectionProps {
  category: Category;
}

const CategorySection = ({ category }: CategorySectionProps) => {
  return (
    <section id={category.id} className="mb-6 scroll-mt-16">
      <div className="flex items-center gap-2 mb-2.5 bg-[#5E92DF] p-2.5 rounded-lg shadow-sm">
        <span className="text-xl sm:text-2xl text-white">{category.icon}</span>
        <h2 className="text-lg sm:text-xl font-semibold text-white tracking-wide">{category.name}</h2>
      </div>
      
      {/* Subcategorías como accesos directos */}
      <div className="flex flex-wrap justify-center px-2 gap-1.5 mb-3">
        {category.subcategories.map((subcategory) => (
          <a
            key={subcategory.id}
            href={`#${category.id}-${subcategory.id}`}
            className="text-xs sm:text-sm bg-[#5E92DF] px-4 py-1.5 rounded-full text-white hover:opacity-90 transition-colors font-medium animate-breathe"
          >
            {subcategory.name}
          </a>
        ))}
      </div>

      <div className="space-y-5">
        {category.subcategories.map((subcategory) => (
          <SubCategorySection 
            key={subcategory.id} 
            subcategory={subcategory} 
            categoryId={category.id}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
