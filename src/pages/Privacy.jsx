import React from 'react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information at Alvex.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Last Updated */}
        <div className="bg-white rounded-xl shadow-sm border-l-4 border-indigo-500 p-6 mb-8">
          <p className="text-gray-600">
            <span className="font-semibold">Last Updated:</span> September 24, 2025
          </p>
          <p className="text-sm text-gray-500 mt-1">
            This policy is effective immediately and applies to all users of alvexgl.vercel.app
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8 hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-indigo-500 inline-block pb-1">
            Introduction
          </h2>
          <p className="text-gray-700 mb-4">
            Welcome to Alvex ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website alvexgl.vercel.app and use our services.
          </p>
          <p className="text-gray-700">
            By using our website and services, you consent to the practices described in this Privacy Policy. If you do not agree with this policy, please do not use our services.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8 hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-indigo-500 inline-block pb-1">
            Information We Collect
          </h2>
          
          <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Personal Information</h3>
          <p className="text-gray-700 mb-4">
            We may collect personal information that you voluntarily provide to us, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Name, email address, phone number, and mailing address</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Account credentials and profile information</li>
            <li>Size preferences and style interests</li>
            <li>Order history and purchase preferences</li>
            <li>Communications you send to us</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
          <p className="text-gray-700 mb-4">
            When you visit our website, we automatically collect certain information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>IP address and device identifiers</li>
            <li>Browser type and version</li>
            <li>Operating system and device information</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referral sources and click-through data</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8 hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-indigo-500 inline-block pb-1">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Process and fulfill your orders and transactions</li>
            <li>Provide customer service and technical support</li>
            <li>Send order confirmations, shipping updates, and receipts</li>
            <li>Personalize your shopping experience and product recommendations</li>
            <li>Improve our website, products, and services</li>
            <li>Send promotional emails and marketing communications (with your consent)</li>
            <li>Prevent fraud and ensure security</li>
            <li>Comply with legal obligations and resolve disputes</li>
            <li>Analyze website usage and performance</li>
          </ul>
        </section>

        {/* Information Sharing */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8 hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-indigo-500 inline-block pb-1">
            Information Sharing and Disclosure
          </h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Service Providers:</strong> Payment processors, shipping companies, email service providers, and analytics tools</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
            <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of business assets</li>
            <li><strong>Protection:</strong> To protect our rights, property, safety, or that of our users</li>
            <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8 hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-indigo-500 inline-block pb-1">
            Data Security
          </h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure payment processing through certified providers</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and employee training</li>
            <li>Data backup and recovery procedures</li>
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-6">
            <p className="text-amber-800">
              <strong>Note:</strong> No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8 hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-indigo-500 inline-block pb-1">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies to enhance your browsing experience:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
            <li><strong>Performance Cookies:</strong> Help us analyze website usage and improve performance</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences and personalize your experience</li>
            <li><strong>Marketing Cookies:</strong> Used for advertising and retargeting (with your consent)</li>
          </ul>
          <p className="text-gray-700 mt-4">
            You can control cookies through your browser settings, but some website features may not function properly if cookies are disabled.
          </p>
        </section>

        {/* Your Rights */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8 hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-indigo-500 inline-block pb-1">
            Your Rights and Choices
          </h2>
          <p className="text-gray-700 mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Receive a copy of your data in a structured format</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            <li><strong>Restriction:</strong> Limit how we process your information</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
            <p className="text-blue-800">
              To exercise these rights, please contact us using the information provided below. We will respond to your request within 30 days.
            </p>
          </div>
        </section>

        {/* Third-Party Links */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8 hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-indigo-500 inline-block pb-1">
            Third-Party Links and Services
          </h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
          <p className="text-gray-700">
            Third-party services we may use include payment processors, social media platforms, analytics providers, and customer service tools.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8 hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-indigo-500 inline-block pb-1">
            Children's Privacy
          </h2>
          <p className="text-gray-700 mb-4">
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover that we have collected information from a child under 13, we will promptly delete such information.
          </p>
          <p className="text-gray-700">
            If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
          </p>
        </section>

        {/* Updates to Policy */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8 hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-indigo-500 inline-block pb-1">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Posting the updated policy on our website</li>
            <li>Updating the "Last Updated" date</li>
            <li>Sending email notifications for significant changes</li>
            <li>Displaying prominent notices on our website</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Your continued use of our services after any changes indicates your acceptance of the updated policy.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-6 opacity-90">
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="opacity-90">Alvexgl1998@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Website</h3>
              <p className="opacity-90">alvexgl.vercel.app</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-sm opacity-75">
              We are committed to resolving any privacy concerns promptly and transparently.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
