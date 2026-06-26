"use client";

import { useState, type ComponentType } from "react";
import {
  Avocado,
  Brunch,
  Cake,
  CoffeeCup,
  Croissant,
  IcedCoffee,
  Milk,
  Salad,
  SoftDrink,
  Sunrise,
  Toast,
  Vegan,
  type IconProps,
} from "@/components/BrandIcons";

type MenuItem = {
  name: string;
  price: string;
  description?: string;
  vegan?: boolean;
};

type Category = {
  id: string;
  label: string;
  icon: ComponentType<IconProps>;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    id: "especialidad",
    label: "Café de Especialidad",
    icon: CoffeeCup,
    items: [
      { name: "Café Espresso", price: "$4.000" },
      { name: "Americano", price: "$4.400" },
      { name: "Lungo", price: "$4.400" },
      { name: "Doppio", price: "$4.800" },
      { name: "Americano Doble", price: "$5.300" },
      { name: "Capuchino", price: "$5.700" },
      { name: "Latte", price: "$6.300" },
      { name: "Submarino", price: "$6.500" },
      { name: "Lattes Especiales", price: "$6.800" },
      { name: "Flat White", price: "$7.000" },
      { name: "Moca Grande", price: "$7.200" },
      { name: "Extra Shot", price: "+$1.700" },
    ],
  },
  {
    id: "conleche",
    label: "Con Leche",
    icon: Milk,
    items: [
      { name: "Macchiato", price: "$4.400" },
      { name: "Cortado", price: "$4.400" },
      { name: "Chocolatada", price: "$4.900" },
      { name: "Magic", price: "$5.000" },
      { name: "Flat White Mediano", price: "$6.100" },
      { name: "Latte", price: "$6.100" },
      { name: "Submarino", price: "$6.200" },
      { name: "Moca Mediano", price: "$6.400" },
      { name: "Lattes Especiales", price: "$6.500" },
      { name: "Flat White Grande", price: "$6.800" },
      { name: "Moca Grande", price: "$7.000" },
      { name: "Leche de almendras", price: "+$1.200", vegan: true },
    ],
  },
  {
    id: "frios",
    label: "Cafés Fríos",
    icon: IcedCoffee,
    items: [
      { name: "Americano Frío", price: "$5.200" },
      { name: "Nutella", price: "$6.900" },
      { name: "Latte Frío", price: "$7.000" },
      { name: "Flat White Frío", price: "$7.000" },
      { name: "Coffee Tonic", price: "$7.600" },
      { name: "Latte Especial Frío", price: "$7.600" },
      { name: "Coffee Orange", price: "$7.800" },
      { name: "Latte Frozen", price: "$7.900" },
      { name: "Adicional de Crema", price: "+$2.000" },
    ],
  },
  {
    id: "desayunos",
    label: "Desayunos",
    icon: Sunrise,
    items: [
      { name: "Tu Café y Dos Medialunas", price: "$9.000" },
      { name: "Tu Café y una Porción de Budín", price: "$11.800" },
      { name: "Tu Café con Tostadas", price: "$13.500" },
      { name: "Tu Café y un Cuadrado de Torta", price: "$13.700" },
      { name: "Tu Café con Tostadas Francesas", price: "$16.500" },
      { name: "Tu Café con un Avocado", price: "$16.600" },
      { name: "Desayuno Proteico", price: "$18.200", description: "Huevos revueltos, palta, tomate cherry, rúcula y tostada" },
      { name: "Yogur, Granola, Huevos y Jugo", price: "$21.400" },
      { name: "Dos Cafés con Porción de Torta", price: "$26.000" },
    ],
  },
  {
    id: "frenchtoast",
    label: "French Toast",
    icon: Toast,
    items: [
      { name: "Banana Split", price: "$12.800", description: "Pan dorado, banana caramelizada, helado y caramelo" },
      { name: "Con Queso y Mermelada", price: "$14.200" },
      { name: "Con Frutas de Estación", price: "$14.200" },
      { name: "Al Pesto", price: "$14.200", description: "Pan dorado, huevos revueltos, pesto, rúcula y tomates secos" },
      { name: "Con Nutella y Frutos Rojos", price: "$17.500" },
      { name: "Con J&Q con Huevo", price: "$18.000", description: "Jamón, queso fundido y huevo" },
    ],
  },
  {
    id: "avocados",
    label: "Avocados",
    icon: Avocado,
    items: [
      { name: "Avocado Toast", price: "$14.800", description: "Palta, huevos revueltos y tomates cherry en tostada de semillas" },
      { name: "Tostón de Salmón", price: "$18.800", description: "Salmón ahumado, palta y semillas en pan de semillas" },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    icon: Croissant,
    items: [
      { name: "Medialuna con J&Q", price: "$5.200" },
      { name: "Huevos Revueltos", price: "$8.200" },
      { name: "Scon Caprese", price: "$9.800", description: "Mozzarella, tomate y pesto" },
      { name: "Arabe de J&Q, Huevo y Ciboulette", price: "$10.500" },
      { name: "Croissant Veggie", price: "$10.800", description: "Huevos revueltos, hummus, palta y rúcula", vegan: true },
      { name: "Croissant de J&Q", price: "$10.800" },
      { name: "Tostado J&Q", price: "$10.900" },
      { name: "Sandwich Veggie", price: "$13.200", description: "Pan ciabatta, palta, huevo, cebolla caramelizada", vegan: true },
      { name: "Mortadela con Pistacho", price: "$14.500" },
      { name: "Ciabatta de Pollo", price: "$15.200" },
      { name: "Wraps de Pollo", price: "$15.500", description: "Pollo, cebolla, morrón y palta con hummus y queso crema" },
      { name: "Brioche de Pollo Caesar", price: "$16.800" },
      { name: "Tostón de Salmón", price: "$16.800" },
    ],
  },
  {
    id: "brunch",
    label: "Brunch",
    icon: Brunch,
    items: [
      { name: "Brunch Para 2", price: "$46.000", description: "Selección de salados y dulces para compartir" },
      { name: "Brunch Salado", price: "$50.000" },
      { name: "Brunch Completo", price: "$74.000", description: "La experiencia completa: café, brunch salado y dulces" },
    ],
  },
  {
    id: "pasteleria",
    label: "Pastelería",
    icon: Cake,
    items: [
      { name: "Medialuna", price: "$2.200" },
      { name: "Cuadrados Dulces", price: "$5.000" },
      { name: "Croissant", price: "$5.600" },
      { name: "Cookies / Brownie Vegano", price: "$5.800", vegan: true },
      { name: "Porción de Budín", price: "$6.000" },
      { name: "Chipa", price: "$6.300" },
      { name: "Roll de Canela", price: "$6.600" },
      { name: "Alfajores Artesanales", price: "$6.400" },
      { name: "Scon de Queso", price: "$7.300" },
      { name: "Cuadrado de Torta", price: "$8.800" },
      { name: "Tostadas con Queso y Mermelada", price: "$9.900" },
      { name: "Porciones de Tortas", price: "$12.000" },
      { name: "Yogur con Frutas y Granola", price: "$12.800" },
      { name: "Porciones de Tortas Especiales", price: "$13.800" },
    ],
  },
  {
    id: "ensaladas",
    label: "Ensaladas",
    icon: Salad,
    items: [
      { name: "Ensalada Caesar", price: "$16.200", description: "Lechuga, pollo, parmesano y croutons" },
      { name: "Ensalada Azul Antioxidante", price: "$16.200" },
      { name: "Ensalada Atún", price: "$16.200" },
      { name: "Bowl Energético", price: "$19.200" },
      { name: "Salmón, Palta y Almendras", price: "$22.000" },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    icon: SoftDrink,
    items: [
      { name: "Pepsi / Pepsi Black / Seven Up", price: "$3.900" },
      { name: "Licuados", price: "$7.200", description: "Con agua, jugo, leche o leche vegetal" },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-sans text-xs tracking-widest uppercase text-primary text-center mb-4 reveal">
          Nuestra Carta
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center text-dark mb-12 reveal">
          Para cada momento del día
        </h2>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide reveal">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`inline-flex shrink-0 items-center gap-2 px-4 py-2 rounded-full text-sm font-sans transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-cream text-gray-600 hover:bg-cream-dark"
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isActive ? "text-white" : "text-primary"
                  }`}
                />
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-1">
          {current.items.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-dark">{item.name}</span>
                  {item.vegan && (
                    <span title="Vegano" className="inline-flex">
                      <Vegan className="w-3.5 h-3.5 text-primary shrink-0" />
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-sm text-gray-400 mt-0.5 leading-snug">
                    {item.description}
                  </p>
                )}
              </div>
              <span className="font-sans text-gray-700 shrink-0 text-sm">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8 font-sans">
          Precios sujetos a actualización. Consulte en local.
        </p>
      </div>
    </section>
  );
}
