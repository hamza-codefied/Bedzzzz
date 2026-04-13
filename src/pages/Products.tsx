import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/layout/Layout';
import ProductCard from '../features/products/ProductCard';
import { productService } from '../api/products';
import { SlidersHorizontal, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: productService.getProducts,
  });

  const categories = ['All', ...new Set(products?.map(p => p.category) || [])];

  const filteredProducts = products?.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic">The <span className="text-primary">Collection</span></h1>
            <p className="text-zinc-500 font-medium text-lg italic">Curated essentials for your contemporary home.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 flex-1 max-w-2xl lg:justify-end">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5 font-black" />
              <input
                type="text"
                placeholder="Search your sanctuary..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-zinc-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-xl shadow-zinc-200/20 placeholder:italic placeholder:font-medium"
              />
            </div>
            <div className="flex items-center gap-3 bg-white border border-zinc-100 rounded-2xl px-6 py-4 text-sm text-zinc-500 font-black uppercase tracking-widest cursor-pointer hover:bg-zinc-50 transition-all shadow-xl shadow-zinc-200/20">
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filter</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-2xl shadow-primary/40 scale-105'
                  : 'bg-white text-zinc-400 hover:text-primary border border-zinc-100 shadow-xl shadow-zinc-200/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-[500px] bg-zinc-50 rounded-[3rem] animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {filteredProducts?.length ? (
              filteredProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center bg-zinc-50/50 rounded-[3rem] border-2 border-dashed border-zinc-100">
                <p className="text-zinc-400 text-xl font-bold italic">No treasures found matching your search.</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
