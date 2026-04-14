import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../api/products';
import ProductCard from '../features/products/ProductCard';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';

const Products: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: productService.getProducts,
  });

  const categories = ['All', 'Pure Bedding', 'Home Decor', 'Soft Pillows', 'Gift Ideas'];

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="min-h-screen premium-gradient-bg relative">
        {/* Artistic Background Blurs - More prominent */}
        <div className="absolute top-[10%] -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[130px]" />
        <div className="absolute top-[40%] -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        
        {/* Header Section */}
        <section className="pt-32 pb-16 relative overflow-hidden bg-primary/5 border-b border-primary/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                  <Sparkles className="w-3 h-3" />
                  <span>Our Best Items</span>
                </div>
                <h1 className="text-[28px] font-bold text-zinc-900 uppercase tracking-tight leading-tight">
                  Our Products
                </h1>
                <p className="text-zinc-500 text-lg font-medium max-w-xl leading-relaxed">
                  Browse our collection of high quality bedding. Each item is chosen to make your bedroom more comfortable.
                </p>
              </motion.div>

              {/* Search & Filter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search for items..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-white/70 backdrop-blur-sm border border-zinc-200 rounded-xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-zinc-400"
                  />
                </div>
                <div className="flex items-center gap-2 bg-zinc-900 text-white border border-zinc-900 rounded-xl px-6 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:border-primary cursor-pointer transition-all shadow-lg">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filter</span>
                </div>
              </motion.div>
            </div>

            {/* Category Pills */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mt-12"
            >
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105'
                      : 'bg-white/50 backdrop-blur-sm text-zinc-500 border border-zinc-100 hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20 relative">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between mb-16 border-b border-zinc-200/50 pb-8">
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Showing {filteredProducts?.length || 0} Items</span>
              <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                <button className="hover:text-primary transition-colors text-zinc-900">Top Rated</button>
                <button className="hover:text-primary transition-colors">By Price</button>
              </div>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="aspect-[3/4] bg-white/40 backdrop-blur-sm rounded-3xl animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {filteredProducts?.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx % 4) * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;
