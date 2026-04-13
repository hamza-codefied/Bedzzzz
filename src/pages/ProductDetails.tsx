import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../api/products';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { Star, Shield, Truck, RotateCcw, ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getProductById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-24 animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="aspect-square bg-zinc-100 rounded-[3rem]" />
            <div className="space-y-8 py-10">
              <div className="h-12 bg-zinc-100 w-3/4 rounded-2xl" />
              <div className="h-6 bg-zinc-100 w-1/4 rounded-xl" />
              <div className="space-y-4">
                <div className="h-4 bg-zinc-100 w-full rounded" />
                <div className="h-4 bg-zinc-100 w-full rounded" />
                <div className="h-4 bg-zinc-100 w-2/3 rounded" />
              </div>
              <div className="h-20 bg-zinc-100 w-full rounded-3xl" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-8">
          <h1 className="text-6xl font-black tracking-tighter uppercase italic opacity-20">Missing Treasure</h1>
          <Link to="/products">
            <Button variant="outline" size="lg" className="rounded-2xl px-12 py-6 font-black uppercase tracking-widest">Discover Collection</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/products" className="inline-flex items-center gap-3 text-zinc-400 font-black uppercase tracking-[0.2em] text-[10px] hover:text-primary transition-all mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Collection
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden bg-white shadow-2xl shadow-zinc-200/50 p-4 border border-zinc-50 group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-2xl shadow-xl shadow-primary/10 border border-primary/10">
                Pure Sanctuary Grade
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col py-6"
          >
            <div className="space-y-2 mb-8 text-primary text-[10px] font-black uppercase tracking-[0.3em] italic">
              <span>{product.category}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-zinc-900 uppercase tracking-tighter mb-6 leading-none italic">
              {product.name}
            </h1>

            <div className="flex items-center gap-6 mb-10 bg-zinc-50/50 w-fit px-6 py-3 rounded-2xl">
              <div className="flex items-center gap-1.5 text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`w-5 h-5 ${s <= Math.floor(product.rating) ? 'fill-amber-500' : 'text-zinc-200'}`} />
                ))}
              </div>
              <span className="text-zinc-400 text-xs font-black uppercase tracking-widest">({product.rating} Rating)</span>
            </div>

            <p className="text-zinc-500 text-xl leading-relaxed mb-10 font-medium italic">
              {product.description}
            </p>

            <div className="mb-12">
              <span className="text-5xl font-black text-zinc-900 tracking-tighter shadow-primary/5 shadow-inner px-2">
                ${product.price}
              </span>
            </div>

            <div className="flex flex-wrap gap-5 mb-16">
              <Button size="lg" className="flex-1 min-w-[200px] h-20 gap-4 text-xl font-black uppercase tracking-widest shadow-2xl shadow-primary/30 rounded-3xl">
                <ShoppingCart className="w-7 h-7" />
                Bring It Home
              </Button>
              <Button variant="outline" size="lg" className="w-20 h-20 flex items-center justify-center border-zinc-100 rounded-3xl hover:bg-zinc-50 transition-all text-zinc-400 hover:text-primary">
                <Heart className="w-8 h-8" />
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-zinc-100 mt-auto">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:scale-110 transition-transform">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div className="text-[10px]">
                  <p className="text-zinc-900 font-black uppercase tracking-widest">Express Sleep</p>
                  <p className="text-zinc-400 font-medium italic">Global Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/10 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-[10px]">
                  <p className="text-zinc-900 font-black uppercase tracking-widest">Pure Softness</p>
                  <p className="text-zinc-400 font-medium italic">Polish Promise</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform">
                  <RotateCcw className="w-6 h-6 text-zinc-400" />
                </div>
                <div className="text-[10px]">
                  <p className="text-zinc-900 font-black uppercase tracking-widest">30-Night Trial</p>
                  <p className="text-zinc-400 font-medium italic">Sleep Returns</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
