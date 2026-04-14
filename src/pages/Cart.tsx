import React from 'react';
import Layout from '../components/layout/Layout';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-8">
          <div className="w-32 h-32 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingCart className="w-16 h-16 text-zinc-200" />
          </div>
          <h1 className="text-5xl font-black tracking-tighter uppercase italic text-zinc-900">Your bag is empty</h1>
          <p className="text-zinc-500 font-medium italic max-w-md mx-auto">Looks like you haven't added anything to your sanctuary yet. Explore our collections for a better sleep.</p>
          <Link to="/products">
            <Button size="lg" className="rounded-2xl px-12 py-6 font-black uppercase tracking-widest mt-8">Discover Collection</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-black tracking-tighter uppercase italic mb-12">
          Your <span className="text-primary">Bag</span> ({cartCount})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row items-center gap-8 p-8 bg-white border border-zinc-100 rounded-[2.5rem] hover:shadow-xl hover:shadow-zinc-100/50 transition-all group"
              >
                <div className="w-40 h-40 bg-zinc-50 rounded-[2rem] overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="flex-1 space-y-4 text-center sm:text-left">
                  <h3 className="text-2xl font-black uppercase tracking-tighter italic">{item.name}</h3>
                  <p className="text-primary text-xl font-black">${item.price}</p>
                </div>

                <div className="flex items-center gap-4 bg-zinc-50 p-2 rounded-2xl">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white hover:bg-zinc-100 transition-colors shadow-sm"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-black">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white hover:bg-zinc-100 transition-colors shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl text-zinc-400 hover:text-rose-500 hover:bg-rose-50 transition-all"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-zinc-100 rounded-[3rem] p-10 sticky top-32 shadow-2xl shadow-zinc-100/20 space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter italic border-b border-zinc-50 pb-6">Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-zinc-500 font-medium uppercase tracking-widest text-[10px]">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-500 font-medium uppercase tracking-widest text-[10px]">
                  <span>Shipping</span>
                  <span className="text-emerald-500">Free</span>
                </div>
                <div className="pt-6 border-t border-zinc-50 flex justify-between items-end">
                  <span className="text-lg font-black uppercase tracking-tighter italic">Total</span>
                  <span className="text-3xl font-black text-primary tracking-tighter">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full h-20 rounded-[1.5rem] gap-4 text-lg font-black uppercase tracking-widest shadow-2xl shadow-primary/30 mt-4 group">
                Checkout NOW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
