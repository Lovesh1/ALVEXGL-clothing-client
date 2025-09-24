import { ProductCard } from "../components/ProductCard";
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

 export const CollectionPage = () => (
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