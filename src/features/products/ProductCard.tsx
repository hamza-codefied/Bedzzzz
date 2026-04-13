import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import type { Product } from '../../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card hoverable className="group border-none shadow-xl shadow-zinc-200/20 rounded-[2.5rem] overflow-hidden bg-white">
      <div className="relative aspect-square overflow-hidden bg-zinc-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-zinc-400 hover:text-primary transition-all shadow-sm">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <Button className="w-full gap-2 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20">
            <ShoppingCart className="w-4 h-4" />
            Quick Add
          </Button>
        </div>
      </div>

      <div className="p-7 space-y-4">
        <div className="flex items-center justify-between text-[10px] text-primary font-black uppercase tracking-[0.2em]">
          <span>{product.category}</span>
          <div className="flex items-center gap-1.5 text-amber-500 bg-amber-50 px-2 py-1 rounded-lg">
            <Star className="w-3.5 h-3.5 fill-amber-500" />
            <span className="font-black">{product.rating}</span>
          </div>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-black text-zinc-900 group-hover:text-primary transition-colors line-clamp-1 tracking-tight">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between pt-1">
          <span className="text-2xl font-black text-zinc-900 tracking-tighter">${product.price}</span>
          <span className={product.stock > 0 ? "text-emerald-600 text-[10px] font-black uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-xl" : "text-rose-600 text-[10px] font-black uppercase tracking-widest bg-rose-50 px-2.5 py-1 rounded-xl"}>
            {product.stock > 0 ? `In Stock` : 'Out of Stock'}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
