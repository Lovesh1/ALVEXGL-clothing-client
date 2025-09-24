 export const ReturnPolicyPage = () => (
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