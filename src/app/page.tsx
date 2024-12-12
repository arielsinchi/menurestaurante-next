'use client';

import { menuData } from "@/data/menuData";
import Navigation from "@/components/Navigation";
import CategorySection from "@/components/CategorySection";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navigation categories={menuData} />
      <main className="container mx-auto px-4 py-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {menuData.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
        <ScrollToTop />
        <footer className="bg-gray-800 text-white py-6 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400"> 2024 Tu Restaurante. Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
