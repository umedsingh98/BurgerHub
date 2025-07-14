export const products = [
  // Classic Burgers
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: 12.99,
    category: "classic",
    image: "/src/assets/menu/burger-11.jpg",
    description: "Juicy beef patty with melted cheese, fresh lettuce, tomato, and our special sauce",
    ingredients: ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "Onion", "Special sauce"],
    calories: 450,
    rating: 4.5,
    popular: true
  },
  {
    id: 2,
    name: "Double Cheeseburger",
    price: 16.99,
    category: "classic",
    image: "/src/assets/menu/burger-12.jpg",
    description: "Double the beef, double the cheese - a meat lover's dream",
    ingredients: ["2x Beef patties", "Cheddar cheese", "Lettuce", "Tomato", "Onion", "Special sauce"],
    calories: 650,
    rating: 4.7,
    popular: true
  },
  {
    id: 3,
    name: "Bacon Cheeseburger",
    price: 14.99,
    category: "classic",
    image: "/src/assets/menu/burger-13.jpg",
    description: "Classic cheeseburger topped with crispy bacon strips",
    ingredients: ["Beef patty", "Bacon", "Cheddar cheese", "Lettuce", "Tomato", "Onion"],
    calories: 520,
    rating: 4.6,
    popular: false
  },
  
  // Premium Burgers
  {
    id: 4,
    name: "Mushroom Swiss Burger",
    price: 18.99,
    category: "premium",
    image: "/src/assets/menu/burger-14.jpg",
    description: "Sautéed mushrooms and melted Swiss cheese on a juicy beef patty",
    ingredients: ["Beef patty", "Sautéed mushrooms", "Swiss cheese", "Lettuce", "Onion"],
    calories: 480,
    rating: 4.4,
    popular: false
  },
  {
    id: 5,
    name: "BBQ Ranch Burger",
    price: 17.99,
    category: "premium",
    image: "/src/assets/menu/burger-15.jpg",
    description: "Smoky BBQ sauce meets creamy ranch dressing",
    ingredients: ["Beef patty", "BBQ sauce", "Ranch dressing", "Onion rings", "Lettuce"],
    calories: 580,
    rating: 4.3,
    popular: false
  },
  {
    id: 6,
    name: "Jalapeño Popper Burger",
    price: 19.99,
    category: "premium",
    image: "/src/assets/menu/burger-16.jpg",
    description: "Spicy jalapeños with cream cheese and crispy breading",
    ingredients: ["Beef patty", "Jalapeño poppers", "Cream cheese", "Lettuce", "Ranch"],
    calories: 620,
    rating: 4.8,
    popular: true
  },
  
  // Vegetarian Options
  {
    id: 7,
    name: "Veggie Burger",
    price: 13.99,
    category: "vegetarian",
    image: "/src/assets/menu/burger-17.jpg",
    description: "Plant-based patty with fresh vegetables and vegan cheese",
    ingredients: ["Plant-based patty", "Vegan cheese", "Lettuce", "Tomato", "Cucumber", "Avocado"],
    calories: 320,
    rating: 4.2,
    popular: false
  },
  {
    id: 8,
    name: "Portobello Mushroom Burger",
    price: 15.99,
    category: "vegetarian",
    image: "/src/assets/menu/burger-18.jpg",
    description: "Grilled portobello mushroom cap with melted cheese and fresh herbs",
    ingredients: ["Portobello mushroom", "Swiss cheese", "Fresh herbs", "Lettuce", "Tomato"],
    calories: 280,
    rating: 4.1,
    popular: false
  },
  
  // Sides
  {
    id: 9,
    name: "French Fries",
    price: 4.99,
    category: "sides",
    image: "/src/assets/menu/ads-1.jpg",
    description: "Crispy golden fries seasoned with sea salt",
    ingredients: ["Potatoes", "Sea salt", "Vegetable oil"],
    calories: 320,
    rating: 4.0,
    popular: true
  },
  {
    id: 10,
    name: "Onion Rings",
    price: 5.99,
    category: "sides",
    image: "/src/assets/menu/ads-2.jpg",
    description: "Beer-battered onion rings with dipping sauce",
    ingredients: ["Onions", "Beer batter", "Dipping sauce"],
    calories: 380,
    rating: 4.3,
    popular: false
  },
  
  // Beverages
  {
    id: 11,
    name: "Milkshake - Vanilla",
    price: 6.99,
    category: "beverages",
    image: "/src/assets/menu/burger-11.jpg",
    description: "Creamy vanilla milkshake topped with whipped cream",
    ingredients: ["Vanilla ice cream", "Milk", "Whipped cream"],
    calories: 420,
    rating: 4.4,
    popular: true
  },
  {
    id: 12,
    name: "Milkshake - Chocolate",
    price: 6.99,
    category: "beverages",
    image: "/src/assets/menu/burger-12.jpg",
    description: "Rich chocolate milkshake with chocolate syrup",
    ingredients: ["Chocolate ice cream", "Milk", "Chocolate syrup"],
    calories: 450,
    rating: 4.5,
    popular: true
  }
];

export const categories = [
  { id: "all", name: "All Items" },
  { id: "classic", name: "Classic Burgers" },
  { id: "premium", name: "Premium Burgers" },
  { id: "vegetarian", name: "Vegetarian" },
  { id: "sides", name: "Sides" },
  { id: "beverages", name: "Beverages" }
];

export const getProductsByCategory = (category) => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};

export const getPopularProducts = () => {
  return products.filter(product => product.popular);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(lowercaseQuery)
    )
  );
}; 