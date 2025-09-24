import { Link } from 'react-router-dom';
import { ShoppingCart, X, Plus, Minus} from 'lucide-react';
import { useCart } from '../useCart';


export const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="mx-auto text-gray-400 mb-4" size={64} />
            <h2 className="text-xl text-gray-600 mb-4">Your cart is empty</h2>
            <Link 
              to="/collection"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map((item) => (
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
                <Link 
                  to="/checkout" 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};