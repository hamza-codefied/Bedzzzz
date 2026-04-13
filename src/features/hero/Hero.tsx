import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-gradient-to-br from-[#FFF5F7] via-white to-[#F5F7FF]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white shadow-xl shadow-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Handcrafted with Love
            </motion.div>

            <h1 className="text-7xl md:text-[5.5rem] font-black text-zinc-900 leading-[0.9] tracking-tighter">
              DREAM IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FF8BA7] to-secondary">EVERY</span> COLOR.
            </h1>

            <p className="text-zinc-600 text-lg md:text-xl max-w-lg leading-relaxed font-medium italic">
              Experience the harmony of premium Egyptian cotton and soft pastel aesthetics. Our collections are designed to make every morning feel like a Sunday.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <Link to="/products">
                <Button size="lg" className="group rounded-2xl shadow-2xl shadow-primary/30 px-10 py-7 text-lg font-black uppercase tracking-widest">
                  Shop Now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="rounded-2xl border-zinc-200 text-zinc-600 hover:bg-zinc-50 px-10 py-7 text-lg font-black uppercase tracking-widest">
                 See Trends
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-zinc-100 mt-12">
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                <h4 className="text-3xl font-black text-zinc-900">25K+</h4>
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mt-1">Happy Homes</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                <h4 className="text-3xl font-black text-zinc-900">4.9</h4>
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mt-1">Star Rating</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                <h4 className="text-3xl font-black text-zinc-900">100%</h4>
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mt-1">Sustainable</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 group cursor-pointer">
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/hero-bedroom.png"
                alt="Bedzzz Premium Bedroom"
                className="rounded-[3rem] shadow-2xl shadow-primary/10 border-8 border-white transition-all duration-700 group-hover:scale-[1.02] group-hover:-rotate-1"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-white/80 border border-white/50 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-2xl ring-1 ring-black/5"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
                    ☁
                  </div>
                  <div>
                    <h5 className="text-zinc-900 font-black text-sm uppercase tracking-tight">Pure Softness</h5>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">1000 Thread Count</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Bubbles */}
              <motion.div 
                 animate={{ scale: [1, 1.2, 1] }} 
                 transition={{ duration: 5, repeat: Infinity }} 
                 className="absolute -top-12 -left-12 w-24 h-24 bg-pink-100/50 rounded-full blur-xl border border-pink-200" 
              />
              <motion.div 
                 animate={{ scale: [1, 1.3, 1] }} 
                 transition={{ duration: 7, repeat: Infinity, delay: 1 }} 
                 className="absolute top-1/2 -right-16 w-32 h-32 bg-blue-50/50 rounded-full blur-xl border border-blue-100" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
