import React from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6 pointer-events-none">
      <div className="max-w-[1200px] mx-auto pointer-events-auto">
        <div className="glass-premium rounded-2xl px-6 h-16 flex items-center justify-between border-white/40 shadow-sm">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-zinc-100">
                <img src="/bedzzz-logo.png" alt="Bedzzz Logo" className="h-6 w-auto object-contain" />
              </div>
              <span className="text-zinc-900 font-bold text-xl tracking-tight hidden md:block">Bedzzz</span>
            </Link>
          </div>

          <div className="hidden lg:block flex-1 max-w-xs mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-primary/5 transition-all"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
              <Link to="/products" className="hover:text-primary transition-colors">Our Shop</Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative p-2 rounded-xl hover:bg-zinc-50 transition-all">
                <ShoppingCart className="w-5 h-5 text-zinc-600" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-[10px] font-bold text-white w-5 h-5 rounded-full flex items-center justify-center shadow-md">{cartCount}</span>
                )}
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-zinc-600" />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-zinc-500">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 mx-4 pointer-events-auto"
          >
            <div className="glass-premium rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
                <Link to="/products" onClick={() => setIsOpen(false)}>Shop</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
