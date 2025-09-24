export const AboutPage = () => (
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