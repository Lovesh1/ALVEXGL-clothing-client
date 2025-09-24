import { useState, } from 'react';
import { ShoppingCart, User, Menu, X, Plus, Minus, Star, Heart, Search, Phone, Mail, MapPin} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../useCart';

export const Home = () => {
  const [, setSelectedProduct] = useState(null);
  // const [cart, setCart] = useState([]);
  const {addToCart} = useCart()

  //     const addToCart = (product, size = 'M') => {
  //   const existingItem = cart.find(item => item.id === product.id && item.size === size);
  //   if (existingItem) {
  //     setCart(cart.map(item => 
  //       item.id === product.id && item.size === size
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     ));
  //   } else {
  //     setCart([...cart, { ...product, size, quantity: 1 }]);
  //   }
  // };


  //  const changePage = (page) => {
  //   setCurrentPage(page);
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Cotton Oxford Shirt - White",
      price: 799,
      originalPrice: 999,
      discount: 12,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      category: "shirts",
      rating: 4.5,
      description: "Classic white oxford shirt crafted from 100% premium cotton with tailored fit."
    },
    {
      id: 2,
      name: "Organic Linen Button-Up - Light Blue",
      price: 599,
      originalPrice: 899,
      discount: 12,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
      category: "shirts",
      rating: 4.3,
      isHot: true,
      description: "Breathable light blue linen shirt with organic certification and modern cut."
    },
    {
      id: 3,
      name: "Merino Wool Crew Sweater - Navy",
      price: 599,
      originalPrice: 899,
      discount: 12,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
      category: "sweaters",
      rating: 4.6,
      description: "Luxurious navy merino wool crew neck sweater with superior warmth and comfort."
    },
    {
      id: 4,
      name: "Handwoven Cashmere Cardigan - Charcoal",
      price: 999,
      originalPrice: 1199,
      discount: 8,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      category: "sweaters",
      rating: 4.8,
      description: "Premium handwoven charcoal cashmere cardigan with intricate cable knit detailing."
    },
    {
      id: 5,
      name: "Organic Cotton Jersey T-Shirt - White",
      price: 1199,
      originalPrice: 1799,
      discount: 30,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "t-shirts",
      rating: 4.4,
      description: "Ultra-soft organic cotton jersey t-shirt in classic white with sustainable production."
    },
    {
      id: 6,
      name: "Bamboo Fiber Polo Shirt - Forest Green",
      price: 899,
      originalPrice: 999,
      discount: 30,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
      category: "polos",
      rating: 4.2,
      isHot: true,
      description: "Eco-friendly forest green polo made from sustainable bamboo fiber with moisture-wicking properties."
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover cursor-pointer"
          onClick={() => setSelectedProduct(product)}
        />
        {product.discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
            {product.discount}% Off
          </span>
        )}
        {product.isHot && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
            Hot
          </span>
        )}
        <Heart className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer" size={20} />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="
          relative
          bg-gradient-to-b from-blue-500 to-blue-700 
          hover:from-blue-600 hover:to-blue-800
          active:from-blue-700 active:to-blue-900
          text-white font-semibold
          px-6 py-3 rounded-lg
          border-2 border-blue-800 border-b-4
          shadow-lg hover:shadow-xl
          active:transform active:translate-y-1 active:shadow-sm active:border-b-2
          transition-all duration-150 ease-in-out
        ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">

<h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Clothing Collection</h1>
<p className="text-xl mb-8">Discover our handcrafted garments made from the finest textiles</p>
          <Link 
            to="/collection"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handcrafted with finest materials and attention to detail</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on all orders above ₹2,999</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Love</h3>
              <p className="text-gray-600">Trusted by thousands of satisfied customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ProductModal = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg"
          >
            <X size={20} />
          </button>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
          </div>
          
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through ml-3">₹{product.originalPrice.toLocaleString()}</span>
            )}
            {product.discount > 0 && (
              <span className="bg-red-500 text-white px-2 py-1 text-sm rounded ml-3">{product.discount}% OFF</span>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
            <div className="flex space-x-2">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button key={size} className="w-12 h-12 border border-gray-300 rounded hover:border-blue-500 hover:text-blue-500">
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => { addToCart(product); onClose(); }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

return (
  <div className="min-h-screen bg-gray-50">
    <HomePage />
  </div>
);
};