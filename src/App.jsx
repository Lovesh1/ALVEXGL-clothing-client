import React, { useState, } from 'react';
import { ShoppingCart, User, Menu, X, Plus, Minus, Star, Heart, Search, Phone, Mail, MapPin} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

   const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Cotton Oxford Shirt - White",
      price: 5299,
      originalPrice: 5999,
      discount: 12,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      category: "shirts",
      rating: 4.5,
      description: "Classic white oxford shirt crafted from 100% premium cotton with tailored fit."
    },
    {
      id: 2,
      name: "Organic Linen Button-Up - Light Blue",
      price: 5299,
      originalPrice: 5999,
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
      price: 5299,
      originalPrice: 5999,
      discount: 12,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
      category: "sweaters",
      rating: 4.6,
      description: "Luxurious navy merino wool crew neck sweater with superior warmth and comfort."
    },
    {
      id: 4,
      name: "Handwoven Cashmere Cardigan - Charcoal",
      price: 5999,
      originalPrice: 6499,
      discount: 8,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      category: "sweaters",
      rating: 4.8,
      description: "Premium handwoven charcoal cashmere cardigan with intricate cable knit detailing."
    },
    {
      id: 5,
      name: "Organic Cotton Jersey T-Shirt - White",
      price: 4199,
      originalPrice: 5999,
      discount: 30,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "t-shirts",
      rating: 4.4,
      description: "Ultra-soft organic cotton jersey t-shirt in classic white with sustainable production."
    },
    {
      id: 6,
      name: "Bamboo Fiber Polo Shirt - Forest Green",
      price: 4899,
      originalPrice: 6999,
      discount: 30,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
      category: "polos",
      rating: 4.2,
      isHot: true,
      description: "Eco-friendly forest green polo made from sustainable bamboo fiber with moisture-wicking properties."
    }
  ];

  const addToCart = (product, size = 'M') => {
    const existingItem = cart.find(item => item.id === product.id && item.size === size);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, size, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, size, change) => {
    setCart(cart.map(item => {
      if (item.id === id && item.size === size) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id, size) => {
    setCart(cart.filter(item => !(item.id === id && item.size === size)));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const Header = () => (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 
              className="text-2xl md:text-3xl font-bold text-gray-800 cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              ALVEXGL
            </h1>f
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`font-medium ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('collection')}
              className={`font-medium ${currentPage === 'collection' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Collection
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`font-medium ${currentPage === 'about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About Us
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`font-medium ${currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="text-gray-600 cursor-pointer hover:text-blue-600" size={20} />
            <User className="text-gray-600 cursor-pointer hover:text-blue-600" size={20} />
            <div className="relative">
              <button 
                onClick={() => setCurrentPage('cart')}
                className="text-gray-600 hover:text-blue-600"
              >
                <ShoppingCart size={20} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}
                className="text-left font-medium text-gray-700 hover:text-blue-600"
              >
                Home
              </button>
              <button 
                onClick={() => { setCurrentPage('collection'); setIsMenuOpen(false); }}
                className="text-left font-medium text-gray-700 hover:text-blue-600"
              >
                Collection
              </button>
              <button 
                onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }}
                className="text-left font-medium text-gray-700 hover:text-blue-600"
              >
                About Us
              </button>
              <button 
                onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}
                className="text-left font-medium text-gray-700 hover:text-blue-600"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );

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
          <button 
            onClick={() => setCurrentPage('collection')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </button>
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

  const CollectionPage = () => (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Collection</h1>
        
        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">All</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">T-Shirts</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Sweatshirts</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );

 const AboutPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About ALVEXGL</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop" 
              alt="Textile Craftsmanship" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for exceptional clothing, ALVEXGL has been crafting premium garments that combine traditional textile craftsmanship with contemporary design. Our journey began with a simple mission: to create clothing that doesn't just look sophisticated, but feels incredible to wear.
            </p>
            <p className="text-gray-600 mb-4">
              Every garment in our collection is carefully selected and crafted using the finest textiles. From organic cotton shirts to luxurious cashmere sweaters, we ensure each product meets our high standards of quality, comfort, and sustainability.
            </p>
            <p className="text-gray-600">
              We believe that exceptional clothing is an investment in your comfort, confidence, and personal style. That's why we're committed to delivering garments that exceed your expectations and become treasured pieces in your wardrobe for years to come.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Meet Our Founder</h2>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Monu Sharma</h3>
            <p className="text-gray-600 italic mb-4">Founder & Creative Director</p>
            <p className="text-gray-600">
              "With over 15 years in the fashion industry, I founded ALVEXGL with a vision 
              to create sustainable, premium clothing that doesn't compromise on style or comfort."
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Premium Textiles</h3>
            <p className="text-gray-600">We source only the finest fabrics including organic cotton, merino wool, and sustainable bamboo</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Tailoring</h3>
            <p className="text-gray-600">Each garment is meticulously crafted by skilled artisans with attention to every detail</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Sustainable Fashion</h3>
            <p className="text-gray-600">Your style and our planet's wellbeing are equally important to us</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Proprietor</h3>
                  <p className="text-gray-600">Monu Sharma</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 6367592980</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">Alvexgl1998@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">Sr 14 Acharya Vinoba Bhave Nagar<br></br> Jaipur, Rajasthan 302021 </p>
                </div>
              </div>
            </div>

            {/* Business Information Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Business Information</h3>
              <div className="text-gray-600 space-y-2 text-sm">
                <p><span className="font-medium">Company:</span> ALVEXGL Textiles Private Limited</p>
                <p><span className="font-medium">PAN Number:</span> ABDCA0404H</p>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  const CartPage = () => (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="mx-auto text-gray-400 mb-4" size={64} />
            <h2 className="text-xl text-gray-600 mb-4">Your cart is empty</h2>
            <button 
              onClick={() => setCurrentPage('collection')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map((item, ) => (
                  <div key={`${item.id}-${item.size}`} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">Size: {item.size}</p>
                        <p className="text-lg font-bold text-gray-800">₹{item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.size, -1)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.size, 1)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const ReturnPolicyPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Return & Exchange Policy</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Your satisfaction is our priority. We want you to love your ALVEXGL purchase.
        </p>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">30-Day Window</h3>
            <p className="text-gray-600 text-sm">Return or exchange within 30 days of delivery</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Easy Exchange</h3>
            <p className="text-gray-600 text-sm">Simple size or color exchanges available</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Quality Guarantee</h3>
            <p className="text-gray-600 text-sm">Full refund for defective items</p>
          </div>
        </div>

        {/* Return Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">How to Return Items</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  Email us at <span className="text-blue-600">Alvexgl1998@gmail.com</span> or call 
                  <span className="text-blue-600"> +91 6367592980</span> with your order number and reason for return.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Get Return Authorization</h3>
                <p className="text-gray-600">
                  We'll provide you with a return authorization number and shipping instructions within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Ship the Package</h3>
                <p className="text-gray-600">
                  Send to: <strong>ALVEXGL, Sr 14 Acharya Vinoba Bhave Nagar, Jaipur, Rajasthan 302021</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Our customer service team is here to help with your return or exchange.
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> Alvexgl1998@gmail.com</p>
            <p><strong>Phone:</strong> +91 6367592980</p>
            <p><strong>Business Hours:</strong> Monday - Saturday, 10 AM - 7 PM IST</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const TermsConditionsPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Terms & Conditions</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Please read these terms and conditions carefully before using our service.
        </p>

        <div className="prose prose-lg max-w-none">
          {/* Company Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Company Information</h2>
            <div className="text-gray-600 space-y-2">
              <p><strong>Company Name:</strong> ALVEXGL Textiles Private Limited</p>
              <p><strong>Proprietor:</strong> Monu Sharma</p>
              <p><strong>PAN Number:</strong> ABDCA0404H</p>
              <p><strong>Address:</strong> Sr 14 Acharya Vinoba Bhave Nagar, Jaipur, Rajasthan 302021</p>
              <p><strong>Contact:</strong> +91 6367592980 | Alvexgl1998@gmail.com</p>
            </div>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the ALVEXGL website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          {/* Products and Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Products and Services</h2>
            <p className="text-gray-600 mb-4">
              ALVEXGL specializes in premium clothing including shirts, sweaters, t-shirts, and polo shirts crafted from high-quality textiles. All product descriptions, colors, and specifications are provided for information purposes and may vary slightly from actual products.
            </p>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify, discontinue, or change pricing of any product without prior notice.
            </p>
          </section>

          {/* Order Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Order Terms</h2>
            <div className="text-gray-600 space-y-4">
              <p>• All orders are subject to availability and confirmation of the order price.</p>
              <p>• Payment must be completed before order processing begins.</p>
              <p>• We reserve the right to refuse or cancel any order at our discretion.</p>
              <p>• Order confirmation does not guarantee product availability.</p>
            </div>
          </section>

          {/* Pricing and Payment */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Pricing and Payment</h2>
            <div className="text-gray-600 space-y-4">
              <p>• All prices are listed in Indian Rupees (INR) and include applicable taxes.</p>
              <p>• Payment methods accepted include credit/debit cards, net banking, UPI, and digital wallets.</p>
              <p>• Prices are subject to change without notice.</p>
              <p>• Free shipping is available on orders above ₹2,999.</p>
            </div>
          </section>

          {/* Return and Exchange Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Return and Exchange Policy</h2>
            <div className="text-gray-600 space-y-4">
              <p>• Returns and exchanges must be initiated within 30 days of delivery.</p>
              <p>• Items must be in original condition with tags attached.</p>
              <p>• Custom or personalized items are not eligible for return.</p>
              <p>• Return shipping costs may apply unless the item is defective.</p>
            </div>
          </section>

          {/* Privacy and Data Protection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Privacy and Data Protection</h2>
            <p className="text-gray-600 mb-4">
              We are committed to protecting your privacy. Personal information collected during the ordering process will be used solely for order fulfillment, customer service, and marketing communications (with your consent).
            </p>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or rent your personal information to third parties without your explicit consent.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              ALVEXGL shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our products or services.
            </p>
            <p className="text-gray-600 mb-4">
              Our liability is limited to the purchase price of the specific product in question.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms and conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Jaipur, Rajasthan.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                For questions regarding these terms and conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> Alvexgl1998@gmail.com</p>
                <p><strong>Phone:</strong> +91 6367592980</p>
                <p><strong>Address:</strong> Sr 14 Acharya Vinoba Bhave Nagar, Jaipur, Rajasthan 302021</p>
                <p><strong>Business Hours:</strong> Monday - Saturday, 10 AM - 7 PM IST</p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              <strong>Last Updated:</strong> September 2025
            </p>
            <p className="text-gray-600 text-sm mt-2">
              These terms and conditions may be updated periodically. Continued use of our service constitutes acceptance of any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
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

  const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ALVEXGL</h3>
          <p className="text-gray-300 mb-4">Premium clothing crafted with passion and precision.</p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-xs">f</span>
            </div>
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-xs">t</span>
            </div>
            <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-xs">i</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-white">Home</button></li>
            <li><button onClick={() => setCurrentPage('collection')} className="hover:text-white">Collection</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">About Us</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white">Contact</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
         <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Shirts</a></li>
            <li><a href="#" className="hover:text-white">Sweaters</a></li>
            <li><a href="#" className="hover:text-white">T-Shirts</a></li>
            <li><a href="#" className="hover:text-white">Polo Shirts</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Size Guide</a></li>
            <li><button onClick={() => changePage('return-policy')} className="hover:text-white text-left">Return Policy</button></li>
            <li><a href="#" onClick={() => changePage('terms-conditions')} className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; 2025 ALVEXGL. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

return (
  <div className="min-h-screen bg-gray-50">
    <Header />
    
    <main>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'collection' && <CollectionPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'cart' && <CartPage />}
      {currentPage === 'return-policy' && <ReturnPolicyPage />}
      {currentPage === 'terms-conditions' && <TermsConditionsPage />}
    </main>

    <Footer />

    {selectedProduct && (
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    )}
  </div>
);
};

export default App;