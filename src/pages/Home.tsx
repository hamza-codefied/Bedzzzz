import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/layout/Layout';
import Hero from '../features/hero/Hero';
import ProductCard from '../features/products/ProductCard';
import { productService } from '../api/products';
import { ArrowRight, Moon, Heart, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['featured-products'],
    queryFn: productService.getProducts,
  });

  const categories = [
    { title: 'Pure Bedding', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80', items: '120+ Items' },
    { title: 'Cozy Kids', img: '/cat-kids.png', items: '80+ Items' },
    { title: 'Artful Decor', img: '/cat-decor.png', items: '90+ Items' },
    { title: 'Soft Blankets', img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&q=80', items: '40+ Items' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <Layout>
      <Hero />
      
      {/* Features Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <FeatureCard 
              icon={<Moon className="w-12 h-12 text-primary" />}
              title="Cloud-Like Comfort"
              description="Sink into a world of pure relaxation with our premium fabrics designed for the ultimate sleep experience."
            />
            <FeatureCard 
              icon={<Heart className="w-12 h-12 text-secondary" />}
              title="Pure Organic Cotton"
              description="Sustainably sourced, breathable materials that are gentle on your skin and the environment."
            />
            <FeatureCard 
              icon={<Sparkles className="w-12 h-12 text-primary" />}
              title="Modern Sanctuary"
              description="Transform your bedroom into a breathtaking sanctuary with our curated, vibrant designs."
            />
          </motion.div>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 bg-[#FFF5F7]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-5xl font-black tracking-tighter uppercase italic">Shop By <span className="text-primary">Sanctuary</span></h2>
            <p className="text-zinc-500 font-medium max-w-xl mx-auto leading-relaxed">Explore our curated collections designed to bring harmony and comfort to every corner of your home.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl shadow-primary/5 mb-6">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-[10px] font-black text-white/80 uppercase tracking-widest mb-1">{cat.items}</p>
                    <h4 className="text-2xl font-black text-white tracking-widest uppercase">{cat.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="space-y-3">
              <h2 className="text-5xl font-black tracking-tighter uppercase italic">New <span className="text-primary">Arrivals</span></h2>
              <p className="text-zinc-500 font-medium text-lg">The most sought-after pieces for your sanctuary.</p>
            </div>
            <Button variant="ghost" className="w-fit flex items-center gap-3 group font-black uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all pb-2">
              Explore All Essentials
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-[500px] bg-zinc-50 rounded-[3rem] animate-pulse" />
              ))}
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            >
              {products?.slice(0, 4).map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary via-[#FF2E6A] to-secondary rounded-[4rem] p-16 md:p-28 relative overflow-hidden text-center shadow-[0_40px_100px_-20px_rgba(255,94,142,0.4)]"
          >
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85] italic">
                SAVOR EVERY <br /> MOMENT OF SLEEP
              </h2>
              <p className="text-white/90 text-xl font-medium max-w-xl mx-auto leading-relaxed">
                Join the Bedzzz family and get exclusive access to seasonal drops, sleep care tips, and member-only rewards.
              </p>
              <div className="pt-6">
                <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:shadow-2xl hover:scale-105 transition-all px-16 py-8 rounded-[2rem] font-black text-xl uppercase tracking-[0.2em]">
                  Join The Club
                </Button>
              </div>
            </div>
            {/* Background decoration */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -mr-64 -mt-64" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/5 rounded-full blur-[150px] -ml-80 -mb-80" 
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    }}
    className="p-12 bg-white border border-zinc-50 rounded-[3.5rem] space-y-8 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 group text-center flex flex-col items-center border-none"
  >
    <div className="mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 bg-zinc-50 p-6 rounded-[2rem] shadow-sm">{icon}</div>
    <div className="space-y-4">
      <h3 className="text-2xl font-black tracking-tighter uppercase text-zinc-900 italic">{title}</h3>
      <p className="text-zinc-500 font-medium leading-relaxed italic text-sm">{description}</p>
    </div>
  </motion.div>
);

export default Home;
