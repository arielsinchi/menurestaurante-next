export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  subcategories: SubCategory[];
}
