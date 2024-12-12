"use client";

import { Category } from "../types/menu";
import { useState, useEffect } from "react";
import StickyNav from "./StickyNav";

interface NavigationProps {
  categories: Category[];
}

const Navigation = ({ categories }: NavigationProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [wifiPassword, setWifiPassword] = useState("Contraseña123!");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let found = false;
      let newActiveCategory: string | null = null;

      for (let i = categories.length - 1; i >= 0; i--) {
        const section = document.getElementById(categories[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const absoluteTop = window.scrollY + rect.top;
          
          if (scrollPosition >= absoluteTop) {
            newActiveCategory = categories[i].id;
            found = true;
            break;
          }
        }
      }
      if (found) {
        setActiveCategory(newActiveCategory);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  const handleCategoryClick = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveCategory(categoryId);
    }
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(wifiPassword);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = wifiPassword;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000);
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
    }
  };

  return (
    <>
      <header className="bg-menu-blue text-white">
        <div className="max-w-6xl mx-auto px-4 pt-6 pb-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
            ¿Qué te gustaría?
            </h1>
            <p className="text-sm sm:text-base text-blue-100">
              Descubre nuestra selección de platos y bebidas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className={`flex items-center justify-center gap-2 p-3 rounded-lg transition-all text-sm
                  ${
                    activeCategory === category.id
                      ? "bg-menu-blue-dark text-white shadow-md"
                      : "bg-[rgba(55,94,204,0.5)] hover:bg-menu-blue-dark text-white"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category.id);
                }}
              >
                <span className="text-lg sm:text-xl">{category.icon}</span>
                <span className="font-medium text-xs sm:text-sm">{category.name}</span>
              </a>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2.5 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                  <line x1="12" y1="20" x2="12" y2="20" />
                </svg>
                <span className="text-xs font-medium text-white">Resturante-5G</span>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white/90">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>
                <div className="relative">
                  <span 
                    className="text-xs text-white/90 cursor-pointer hover:text-white transition-colors"
                    onClick={handleCopy}
                  >
                    {wifiPassword}
                  </span>
                  {showCopyMessage && (
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap animate-fade-in-out">
                      ¡Contraseña copiada!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <StickyNav 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategoryClick={handleCategoryClick}
      />
    </>
  );
};

export default Navigation;
