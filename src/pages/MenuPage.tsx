import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Small Cappuccino", price: 40, category: "hot-coffee", desc: "A classic espresso with creamy milk foam, smooth and balanced." },
  { name: "Regular Cappuccino", price: 80, category: "hot-coffee", desc: "Rich espresso blended with steamed milk and thick foam." },
  { name: "Caffè Latte", price: 80, category: "hot-coffee", desc: "Smooth espresso with more steamed milk for a milder taste." },
  { name: "Caffè Mocha", price: 100, category: "hot-coffee", desc: "Chocolate flavored coffee with espresso and creamy milk." },
  { name: "Hazelnut Cappuccino / Latte", price: 110, category: "hot-coffee", desc: "Nutty hazelnut flavor mixed with smooth coffee." },
  { name: "Vanilla Cappuccino / Latte", price: 110, category: "hot-coffee", desc: "Sweet vanilla infused coffee with creamy texture." },
  { name: "Caramel Cappuccino / Latte", price: 110, category: "hot-coffee", desc: "Rich caramel sweetness blended into hot coffee." },
  { name: "Irish Cappuccino / Latte", price: 120, category: "hot-coffee", desc: "Strong and bold coffee with Irish flavor twist." },
  { name: "Tiramisu Cappuccino / Latte", price: 120, category: "hot-coffee", desc: "Dessert-inspired coffee with cocoa and cream notes." },
  { name: "Nutella Cappuccino / Latte", price: 140, category: "hot-coffee", desc: "Chocolate hazelnut delight with creamy texture." },
  { name: "Biscoff Cappuccino / Latte", price: 150, category: "hot-coffee", desc: "Caramelized biscuit flavor blended with coffee." },

  { name: "Hot Chocolate", price: 120, category: "hot-choco", desc: "Warm and rich chocolate drink, smooth and comforting." },
  { name: "Caramel Hot Chocolate", price: 130, category: "hot-choco", desc: "Chocolate drink with sweet caramel flavor." },
  { name: "Hot Nutella", price: 140, category: "hot-choco", desc: "Creamy Nutella-based hot chocolate." },
  { name: "Hot Rocher", price: 150, category: "hot-choco", desc: "Premium chocolate drink with nutty Rocher taste." },

  { name: "Espresso (60 ml)", price: 60, category: "hot-black-coffee", desc: "Strong and concentrated pure coffee shot." },
  { name: "Americano", price: 70, category: "hot-black-coffee", desc: "Espresso diluted with hot water for a lighter taste." },
  { name: "Macchiato", price: 80, category: "hot-black-coffee", desc: "Espresso topped with a dash of milk foam." },
  { name: "Signature Affogato", price: 90, category: "hot-black-coffee", desc: "Espresso poured over ice cream, rich dessert coffee." },
  { name: "Irish Coffee", price: 100, category: "hot-black-coffee", desc: "Bold coffee with a smooth Irish twist." },

  { name: "Masala Tea", price: 40, category: "hot-tea", desc: "Traditional Indian tea with aromatic spices." },
  { name: "Black Tea", price: 40, category: "hot-tea", desc: "Simple and strong tea without milk." },
  { name: "Lemon Tea", price: 50, category: "hot-tea", desc: "Refreshing tea with a citrusy lemon flavor." },
  { name: "Green Tea", price: 50, category: "hot-tea", desc: "Light and healthy tea packed with antioxidants." },

  { name: "Classic Frappe", price: 100, category: "cold-coffee", desc: "Chilled blended coffee with smooth texture." },
  { name: "Chocolate Frappe", price: 120, category: "cold-coffee", desc: "Cold coffee mixed with rich chocolate flavor." },
  { name: "Caramel Frappe", price: 130, category: "cold-coffee", desc: "Sweet caramel blended into icy coffee." },
  { name: "Hazelnut Frappe", price: 150, category: "cold-coffee", desc: "Nutty and refreshing cold coffee drink." },
  { name: "Irish Frappe", price: 150, category: "cold-coffee", desc: "Chilled coffee with bold Irish flavor." },
  { name: "Tiramisu Frappe", price: 150, category: "cold-coffee", desc: "Dessert-style cold coffee with cocoa notes." },
  { name: "Choco Chips Frappe", price: 150, category: "cold-coffee", desc: "Crunchy chocolate chips in cold coffee." },
  { name: "Oreo Frappe", price: 160, category: "cold-coffee", desc: "Creamy Oreo blended cold coffee." },
  { name: "Kitkat Frappe", price: 160, category: "cold-coffee", desc: "Chocolate wafer goodness in a cold drink." },
  { name: "Nutella Frappe", price: 170, category: "cold-coffee", desc: "Rich Nutella flavored cold coffee." },
  { name: "Brownie Frappe", price: 170, category: "cold-coffee", desc: "Chocolate brownie blended with coffee." },
  { name: "Biscoff Frappe", price: 190, category: "cold-coffee", desc: "Caramel biscuit flavored cold coffee." },

  { name: "Strawberry Shake", price: 90, category: "shakes", desc: "Sweet and fruity strawberry milkshake." },
  { name: "Black Currant Shake", price: 100, category: "shakes", desc: "Tangy black currant flavored shake." },
  { name: "Chocolate Shake", price: 130, category: "shakes", desc: "Rich and creamy chocolate milkshake." },
  { name: "Vanilla Shake", price: 140, category: "shakes", desc: "Classic vanilla flavored milkshake." },
  { name: "Oreo Shake", price: 150, category: "shakes", desc: "Crushed Oreo cookies blended in milkshake." },
  { name: "Kitkat Shake", price: 150, category: "shakes", desc: "Chocolate wafer shake with creamy texture." },
  { name: "Peanut Butter Shake", price: 160, category: "shakes", desc: "Nutty peanut butter blended shake." },
  { name: "Tiramisu Brownie Shake", price: 170, category: "shakes", desc: "Rich dessert shake with brownie and tiramisu flavor." },
  { name: "Belgium Chocolate Shake", price: 180, category: "shakes", desc: "Premium Belgian chocolate shake." },
  { name: "Biscoff Shake", price: 190, category: "shakes", desc: "Caramelized biscuit flavored shake." },
  { name: "Rocher Shake", price: 200, category: "shakes", desc: "Hazelnut chocolate premium shake." },

  { name: "Icy Coffee", price: 90, category: "iced-coffee", desc: "Refreshing chilled coffee drink." },
  { name: "Iced Latte", price: 100, category: "iced-coffee", desc: "Cold latte with smooth milk and espresso." },
  { name: "Vanilla Iced Latte", price: 110, category: "iced-coffee", desc: "Chilled latte with sweet vanilla flavor." },
  { name: "Iced Mocha", price: 110, category: "iced-coffee", desc: "Cold coffee with chocolate flavor." },
  { name: "Iced Nutella", price: 120, category: "iced-coffee", desc: "Nutella infused iced coffee." },
  { name: "Biscoff Iced Latte", price: 130, category: "iced-coffee", desc: "Cold latte with biscoff caramel taste." },
];

type Category =
  | "hot-coffee"
  | "hot-choco"
  | "hot-black-coffee"
  | "hot-tea"
  | "cold-coffee"
  | "shakes"
  | "iced-coffee";

const categories: Category[] = [
  "hot-coffee",
  "hot-choco",
  "hot-black-coffee",
  "hot-tea",
  "cold-coffee",
  "shakes",
  "iced-coffee",
];

const categoryLabels: Record<Category, string> = {
  "hot-coffee": "Hot Coffee",
  "hot-choco": "Hot Choco",
  "hot-black-coffee": "Hot Black Coffee",
  "hot-tea": "Hot Tea",
  "cold-coffee": "Cold Coffee",
  "shakes": "Shakes",
  "iced-coffee": "Iced Coffee",
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("hot-coffee");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // ✅ optimized filtering
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen py-16 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Menu
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category
                ? "bg-primary text-white scale-105"
                : "bg-gray-200 hover:bg-primary hover:text-white"
              }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        {filteredItems.map((item) => (
          <div
            key={item.name}
            onClick={() =>
              setExpandedItem(
                expandedItem === item.name ? null : item.name
              )
            }
            style={{ willChange: "transform" }}
            className={`p-4 rounded-xl glass cursor-pointer transition ${isMobile ? "" : "hover:scale-105 duration-300"
              }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm md:text-base">
                {item.name}
              </span>
              <span className="font-bold text-primary text-sm md:text-base">
                ₹{item.price}
              </span>
            </div>

            <AnimatePresence>
              {expandedItem === item.name && (
                <motion.div
                  initial={isMobile ? false : { opacity: 0, height: 0 }}
                  animate={
                    isMobile
                      ? { opacity: 1 }
                      : { opacity: 1, height: "auto" }
                  }
                  exit={
                    isMobile
                      ? { opacity: 0 }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: isMobile ? 0.15 : 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 text-sm text-gray-600">
                    {item.desc}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;