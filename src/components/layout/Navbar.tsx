import React from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-zinc-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-zinc-50 group-hover:rotate-6 transition-all duration-500">
                <img src="/bedzzz-logo.png" alt="Bedzzz Logo" className="h-8 w-auto object-contain" />
              </div>
              <span className="text-zinc-900 font-black text-3xl tracking-tighter uppercase italic hidden md:block group-hover:text-primary transition-colors">Bed<span className="text-primary italic-none">zzz</span></span>
            </Link>
          </div>

          <div className="hidden lg:block flex-1 max-w-lg mx-12">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search your sanctuary..."
                className="w-full bg-zinc-50/50 border border-zinc-100 rounded-[1.25rem] py-3.5 pl-12 pr-6 text-sm focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white transition-all placeholder:text-zinc-400 placeholder:italic placeholder:font-medium shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
              <Link to="/products" className="hover:text-primary transition-colors italic">Collection</Link>
              <Link to="/products" className="hover:text-primary transition-colors italic">Trends</Link>
              <Link to="/products" className="hover:text-primary transition-colors italic">About</Link>
            </div>
            
            <div className="h-8 w-px bg-zinc-100 mx-2" />

            <div className="flex items-center gap-6">
              <Link to="/cart" className="relative group p-2 rounded-xl hover:bg-zinc-50 transition-all">
                <ShoppingCart className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors" />
                <span className="absolute top-0 right-0 bg-primary text-[9px] font-black text-white w-5 h-5 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 border-2 border-white">3</span>
              </Link>
              
              {!isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <Link to="/login">
                    <Button variant="ghost" size="sm" className="px-6 text-zinc-500 font-black uppercase tracking-widest text-[10px]">Log In</Button>
                  </Link>
                  <Link to="/signup">
                    <Button size="sm" className="px-8 rounded-2xl shadow-xl shadow-primary/20 font-black uppercase tracking-widest text-[10px] h-11">Join</Button>
                  </Link>
                </div>
              ) : (
                <Button variant="outline" size="sm" className="px-6 border-zinc-200 rounded-xl font-black uppercase tracking-widest text-[10px]" onClick={logout}>Exit</Button>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-zinc-400" />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-zinc-500">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="py-8 px-6 space-y-8">
              <div className="flex flex-col gap-6 text-xl font-black uppercase tracking-tighter italic">
                <Link to="/products" onClick={() => setIsOpen(false)}>The Collection</Link>
                <Link to="/products" onClick={() => setIsOpen(false)}>Sleep Trends</Link>
                <Link to="/products" onClick={() => setIsOpen(false)}>Our Sanctuary</Link>
              </div>
              
              <div className="pt-8 border-t border-zinc-50 flex flex-col gap-4">
                {!isAuthenticated ? (
                  <>
                    <Link to="/login" className="w-full">
                      <Button variant="outline" className="w-full h-14 rounded-2xl border-zinc-100 font-black uppercase tracking-[0.2em]" onClick={() => setIsOpen(false)}>Sign In</Button>
                    </Link>
                    <Link to="/signup" className="w-full">
                      <Button className="w-full h-14 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20" onClick={() => setIsOpen(false)}>Create Account</Button>
                    </Link>
                  </>
                ) : (
                  <Button variant="outline" className="w-full h-14 rounded-2xl border-zinc-100 font-black uppercase tracking-[0.2em]" onClick={() => { logout(); setIsOpen(false); }}>Logout Sanctuary</Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
