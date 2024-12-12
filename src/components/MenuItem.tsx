"use client";

import { MenuItem as MenuItemType } from "@/types/menu";

interface MenuItemProps {
  item: MenuItemType;
}

const formatPrice = (price: number) => {
  return price.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div className="bg-white rounded-lg p-3 hover:shadow-sm transition-shadow border border-gray-100">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-800 text-sm mb-0.5 truncate">{item.name}</h4>
          {item.description && (
            <p className="text-xs text-gray-600 truncate">{item.description}</p>
          )}
        </div>
        <span className="text-base font-semibold text-emerald-600 whitespace-nowrap">
          {formatPrice(item.price)}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
