import {  User, Phone, Mail, MapPin} from 'lucide-react';
export const ContactPage = () => (
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