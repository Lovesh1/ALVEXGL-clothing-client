import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, ] = useState('home');
  const [cart, ] = useState([]);

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
            <Link to="/" 
              className="text-2xl md:text-3xl font-bold text-gray-800 cursor-pointer"
            >
              ALVEXGL
            </Link>f
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/collection"
              className={`font-medium ${currentPage === 'collection' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Collection
            </Link>
            <Link
        to="/about" 
              className={`font-medium ${currentPage === 'about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About Us
            </Link>
             <Link
        to="/contact"
              className={`font-medium ${currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="text-gray-600 cursor-pointer hover:text-blue-600" size={20} />
            <User className="text-gray-600 cursor-pointer hover:text-blue-600" size={20} />
            <div className="relative">
              <Link 
                to="/cart" 
                className="text-gray-600 hover:text-blue-600"
              >
                <ShoppingCart size={20} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                onClick={() => { setIsMenuOpen(false); }}
                className="text-left font-medium text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                to="/collection"
                onClick={() => {  setIsMenuOpen(false); }}
                className="text-left font-medium text-gray-700 hover:text-blue-600"
              >
                Collection
              </Link>
              <Link
                to="/about"
                onClick={() => { setIsMenuOpen(false); }}
                className="text-left font-medium text-gray-700 hover:text-blue-600"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => { setIsMenuOpen(false); }}
                className="text-left font-medium text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
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
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/collection" className="hover:text-white">Collection</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
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
            <li><Link to="/return-policy" className="hover:text-white text-left">Return Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
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
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;