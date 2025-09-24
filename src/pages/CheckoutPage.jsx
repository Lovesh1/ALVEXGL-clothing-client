import { useState } from "react";
import { useCart } from "../useCart";
 export const CheckoutPage = () => {
  const [checkoutData, setCheckoutData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: 'Rajasthan',
    pincode: '',
    paymentMethod: 'card'
  });
  const { cart, getTotalPrice } = useCart();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert('Order placed successfully! You will receive a confirmation email shortly.');
    // In real app, this would process payment and redirect
  };

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <button className="hover:text-blue-600">Cart</button>
            <span>›</span>
            <span className="text-gray-900 font-medium">Checkout</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Forms */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={checkoutData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Address</h2>
                <form onSubmit={handlePlaceOrder} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={checkoutData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={checkoutData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={checkoutData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={checkoutData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="House number and street name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apartment, suite, etc. (optional)
                    </label>
                    <input
                      type="text"
                      name="apartment"
                      value={checkoutData.apartment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={checkoutData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <select
                        name="state"
                        value={checkoutData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        PIN code *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={checkoutData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="302021"
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={checkoutData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="card" className="ml-3 flex items-center">
                      <span className="text-gray-900 font-medium">Credit/Debit Card</span>
                      <div className="ml-2 flex space-x-1">
                        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                        <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="upi"
                      name="paymentMethod"
                      value="upi"
                      checked={checkoutData.paymentMethod === 'upi'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="upi" className="ml-3 text-gray-900 font-medium">UPI Payment</label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="netbanking"
                      name="paymentMethod"
                      value="netbanking"
                      checked={checkoutData.paymentMethod === 'netbanking'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="netbanking" className="ml-3 text-gray-900 font-medium">Net Banking</label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={checkoutData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="cod" className="ml-3 text-gray-900 font-medium">Cash on Delivery</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Order Summary */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4 pb-4 border-b border-gray-100 last:border-b-0">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm line-clamp-2">{item.name}</h3>
                        <p className="text-gray-600 text-sm">Size: {item.size}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing Summary */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">₹0</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-gray-900">Total</span>
                      <span className="text-gray-900">₹{getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Complete Order
                </button>
                
                <button
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  ← Return to Cart
                </button>
              </div>

              {/* Security Badge */}
              <div className="text-center text-sm text-gray-500">
                <p className="flex items-center justify-center space-x-2">
                  <span>🔒</span>
                  <span>Secure checkout with SSL encryption</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};