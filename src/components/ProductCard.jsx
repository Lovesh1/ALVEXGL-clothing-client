import { useState } from "react";
import { Heart, Star } from "lucide-react";
import { useCart } from "../useCart";

  export const ProductCard = ({ product }) => {
    const [, setSelectedProduct] = useState(null);
    const { addToCart} = useCart();
     

     
    
    return (
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
    )
  }
