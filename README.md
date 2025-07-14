# 🍔 BurgerHub - Food Ordering Application

A modern, full-featured food ordering web application built with React, featuring user authentication, shopping cart functionality, and a comprehensive menu system.

## ✨ Features

### 🔐 User Authentication
- **User Registration & Login**: Secure authentication system with form validation
- **Profile Management**: User profile editing and account settings
- **Session Management**: Persistent login state with localStorage
- **Protected Routes**: Secure access to user-specific features

### 🛒 Shopping Cart System
- **Add/Remove Items**: Easy cart management with quantity controls
- **Cart Persistence**: Items saved in localStorage across sessions
- **Real-time Updates**: Dynamic cart count and total calculations
- **Order Summary**: Detailed breakdown with taxes and delivery fees

### 📋 Menu & Product Management
- **Product Catalog**: Comprehensive menu with categories
- **Search & Filter**: Find items by name, ingredients, or category
- **Sorting Options**: Sort by price, rating, calories, or name
- **Product Details**: Detailed information including ingredients and nutritional info
- **Popular Items**: Highlighted popular menu items

### 💳 Checkout System
- **Order Processing**: Complete checkout flow with delivery information
- **Payment Options**: Support for card and cash on delivery
- **Order History**: Track past orders with status updates
- **Delivery Tracking**: Order status management

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Bootstrap
- **Modern Styling**: Beautiful gradients and animations
- **Toast Notifications**: User-friendly feedback system
- **Loading States**: Smooth user experience with loading indicators

## 🚀 Technologies Used

### Frontend
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing and navigation
- **React Bootstrap**: UI components and responsive design
- **React Hook Form**: Form validation and management
- **React Hot Toast**: Toast notifications
- **React Icons**: Icon library

### State Management
- **Context API**: Global state management for auth and cart
- **Local Storage**: Persistent data storage
- **Custom Hooks**: Reusable logic and state management

### Styling
- **Bootstrap 5**: CSS framework for responsive design
- **Custom CSS**: Tailored styling for unique components
- **CSS Gradients**: Modern visual effects
- **CSS Animations**: Smooth transitions and hover effects

## 📁 Project Structure

```
src/
├── components/
│   └── layouts/
│       ├── header.jsx          # Navigation header
│       ├── footer.jsx          # Footer component
│       └── layout.jsx          # Main layout wrapper
├── context/
│   ├── AuthContext.jsx         # Authentication state management
│   └── CartContext.jsx         # Shopping cart state management
├── data/
│   └── products.js             # Product database and utilities
├── pages/
│   ├── auth/
│   │   ├── Login.jsx           # Login page
│   │   ├── Register.jsx        # Registration page
│   │   └── Auth.css            # Authentication styles
│   ├── cart/
│   │   ├── Cart.jsx            # Shopping cart page
│   │   └── Cart.css            # Cart styles
│   ├── home/
│   │   ├── home.jsx            # Home page
│   │   └── [sections].jsx      # Home page sections
│   ├── menu/
│   │   ├── Menu.jsx            # Menu page
│   │   └── Menu.css            # Menu styles
│   └── profile/
│       ├── Profile.jsx         # User profile page
│       └── Profile.css         # Profile styles
├── styles/
│   ├── headerStyle.css         # Header styles
│   └── home.css                # Home page styles
├── assets/                     # Images and static files
├── App.jsx                     # Main application component
└── main.jsx                    # Application entry point
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BurgerHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Implementation

### Authentication Flow
```javascript
// Example: User login
const { login } = useAuth();
const userData = { id: 1, email: 'user@example.com', name: 'John Doe' };
login(userData); // Stores in localStorage and updates context
```

### Cart Management
```javascript
// Example: Add item to cart
const { addToCart } = useCart();
addToCart(product, quantity); // Adds to cart with quantity
```

### Product Filtering
```javascript
// Example: Search and filter products
const filteredProducts = searchProducts(query);
const categoryProducts = getProductsByCategory('classic');
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layout with collapsible menus
- **Mobile**: Touch-friendly interface with mobile-optimized components

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new menu items:
```javascript
{
  id: 13,
  name: "New Burger",
  price: 15.99,
  category: "premium",
  image: "/path/to/image.jpg",
  description: "Delicious new burger",
  ingredients: ["Ingredient 1", "Ingredient 2"],
  calories: 500,
  rating: 4.5,
  popular: false
}
```

### Styling Customization
- Modify CSS variables in component stylesheets
- Update color schemes in `src/styles/` files
- Customize Bootstrap theme variables

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Connect your repository to Vercel or Netlify
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Bootstrap** for the responsive UI framework
- **React Icons** for the beautiful icon library
- **React Hook Form** for efficient form handling
- **React Hot Toast** for user-friendly notifications

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact: [your-email@example.com]

---

**BurgerHub** - Where great food meets great technology! 🍔✨
