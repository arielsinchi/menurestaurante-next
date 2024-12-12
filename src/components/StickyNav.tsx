"use client";

import { Category } from "../types/menu";
import { useState, useEffect } from "react";

interface StickyNavProps {
  categories: Category[];
  activeCategory?: string | null;
  onCategoryClick: (categoryId: string) => void;
}

const StickyNav = ({ categories, activeCategory, onCategoryClick }: StickyNavProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-menu-blue backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-2 py-2">
        <div className="grid grid-cols-3 gap-1 flex-wrap">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={`flex items-center justify-center gap-1 p-2 rounded-lg transition-all text-xs whitespace-nowrap overflow-hidden text-ellipsis items-center
                ${
                  activeCategory === category.id
                    ? "bg-menu-blue text-white"
                    : "hover:bg-menu-blue-dark bg-gray-100 text-gray-700"
                }`}
              onClick={(e) => {
                e.preventDefault();
                onCategoryClick(category.id);
              }}
            >
              <span className="text-base">{category.icon}</span>
              <span className="font-medium text-xs">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
