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

export default TermsConditionsPage