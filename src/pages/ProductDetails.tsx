import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../api/products';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { Star, Shield, Truck, RotateCcw, ShoppingCart, Heart, ArrowLeft, Share2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getProductById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-24 animate-pulse h-screen flex items-center justify-center">
          <div className="w-full h-[400px] bg-white/20 rounded-3xl" />
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-8 h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold tracking-tight">Product Not Found</h1>
          <Link to="/products">
            <Button size="lg" className="rounded-xl px-8 h-12 font-bold uppercase tracking-widest text-xs">Back to Shop</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen premium-gradient-bg relative overflow-hidden">
        {/* Saturated Background Decorations */}
        <div className="absolute top-0 right-0 w-1/2 h-[700px] bg-primary/10 blur-[160px] -z-0 rounded-full -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/10 blur-[140px] -z-0 rounded-full -ml-40 -mb-40" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] -z-0 rounded-full" />
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-32 pb-24 relative z-10">
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link to="/products" className="inline-flex items-center gap-2 text-zinc-500 font-bold uppercase tracking-widest text-[10px] hover:text-primary transition-all">
              <ArrowLeft className="w-3 h-3" />
              All Items
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Visuals Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                 <div className="bg-zinc-900/90 backdrop-blur-md px-4 py-2 rounded-2xl text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">
                    Premium Quality
                 </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                    <Sparkles className="w-3 h-3" />
                    <span>{product.category} Collection</span>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-white/50 border border-white flex items-center justify-center hover:bg-white transition-all text-zinc-400 shadow-sm">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                
                <h1 className="text-[28px] font-bold text-zinc-900 uppercase tracking-tight leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-center gap-1.5 text-amber-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`w-4 h-4 ${s <= Math.floor(product.rating) ? 'fill-current' : 'opacity-20'}`} />
                  ))}
                  <span className="ml-2 text-zinc-500 font-bold text-[10px] uppercase tracking-widest">{product.rating} (50+ Reviews)</span>
                </div>
              </div>

              <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                {product.description || "Get the best sleep with our soft and high quality bedding. Designed to be comfortable and last a long time."}
              </p>

              <div className="flex items-baseline gap-4">
                <span className="text-[28px] font-bold text-zinc-900 tracking-tight">${product.price}</span>
                <span className="text-zinc-400 line-through text-lg font-bold opacity-30">${(product.price * 1.2).toFixed(0)}</span>
              </div>

              <div className="pt-6 space-y-4">
                <Button 
                  onClick={() => addToCart(product)}
                  className="w-full h-14 rounded-2xl text-sm font-bold uppercase tracking-widest shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 transition-all"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add To Bag
                </Button>
                <Button variant="outline" className="w-full h-14 rounded-2xl text-sm font-bold uppercase tracking-widest border-zinc-200 flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm">
                  <Heart className="w-5 h-5" />
                  Save for later
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 pt-10 border-t border-zinc-200/50">
                <BenefitItem icon={<Truck />} title="Free Shipping" />
                <BenefitItem icon={<Shield />} title="Best Quality" />
                <BenefitItem icon={<RotateCcw />} title="30 Days Trial" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const BenefitItem = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="text-center space-y-3">
    <div className="w-14 h-14 mx-auto rounded-2xl bg-white/60 border border-white flex items-center justify-center text-primary shadow-sm">
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<any>, {
            className: "w-5 h-5",
          })
        : icon}
    </div>
    <p className="text-zinc-500 font-bold uppercase tracking-widest text-[9px]">{title}</p>
  </div>
);

export default ProductDetails;
