"use client";

import { SubCategory } from "@/types/menu";
import MenuItem from "./MenuItem";

interface SubCategorySectionProps {
  subcategory: SubCategory;
  categoryId: string;
}

const SubCategorySection = ({ subcategory, categoryId }: SubCategorySectionProps) => {
  return (
    <div id={`${categoryId}-${subcategory.id}`} className="mb-5 last:mb-0 scroll-mt-32">
      <h3 className="text-base sm:text-lg font-semibold text-[#5E92DF] mb-2 border-b border-[#5E92DF]/20 pb-1">
        {subcategory.name}
      </h3>
      <div className="grid grid-cols-1 gap-2">
        {subcategory.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SubCategorySection;
