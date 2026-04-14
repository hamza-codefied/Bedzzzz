import React from 'react';
import { Star, Heart, Plus, ArrowRight } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import type { Product } from '../../types';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <Card className="border-none shadow-sm rounded-3xl overflow-hidden bg-white p-3 border border-zinc-100 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/5">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-50">
          <motion.img
            src={product.image}
            alt={product.name}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-widest text-primary border border-white shadow-sm">
              {product.category}
            </div>
            <button className="w-9 h-9 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-zinc-400 hover:text-primary transition-all shadow-sm border border-white">
              <Heart className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Add Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute inset-x-4 bottom-4 z-10"
              >
                <Button 
                  className="w-full h-12 gap-2 rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                >
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Subtle Gradient Shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Info Section */}
        <div className="p-5 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
               <div className="flex items-center gap-0.5 text-amber-500">
                  <Star className="w-3 h-3 fill-current" />
               </div>
               <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">{product.rating} Rating</span>
            </div>
            
            <Link to={`/product/${product.id}`}>
              <h3 className="text-base font-bold text-zinc-900 group-hover:text-primary transition-colors line-clamp-1 tracking-tight uppercase">
                {product.name}
              </h3>
            </Link>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-0.5">Price</span>
              <span className="text-xl font-bold text-zinc-900">${product.price}</span>
            </div>

            <Link 
              to={`/product/${product.id}`}
              className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all duration-300 group/btn"
            >
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
