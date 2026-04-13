import React from 'react';
import { Globe, Mail, Package } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-100/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center border border-zinc-50">
                <img src="/bedzzz-logo.png" alt="Bedzzz Logo" className="h-6 w-auto object-contain" />
              </div>
              <span className="text-zinc-900 font-black text-2xl tracking-tighter uppercase italic">Bed<span className="text-primary italic-none">zzz</span></span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium italic">
              Experience the harmony of premium Egyptian cotton and soft pastel aesthetics. Creating sanctuaries of comfort, one dream at a time.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <Globe className="w-5 h-5 text-zinc-300 hover:text-primary cursor-pointer transition-all hover:scale-110" />
              <Mail className="w-5 h-5 text-zinc-300 hover:text-primary cursor-pointer transition-all hover:scale-110" />
              <Package className="w-5 h-5 text-zinc-300 hover:text-primary cursor-pointer transition-all hover:scale-110" />
            </div>
          </div>

          <div>
            <h4 className="text-zinc-900 font-black uppercase tracking-widest text-[10px] mb-8">The Collection</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium italic">
              <li><a href="#" className="hover:text-primary transition-colors">Premium Bedding</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Artful Cushions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Blankets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kids Sanctuary</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-black uppercase tracking-widest text-[10px] mb-8">The Sanctuary</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium italic">
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Care</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sleep Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Track Dreams</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Connect With Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-black uppercase tracking-widest text-[10px] mb-8">Dream Club</h4>
            <p className="text-zinc-500 text-sm mb-6 font-medium italic">Join for cozy updates and exclusive member-only treasures.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="you@sanctuary.com"
                className="bg-white border border-zinc-100 rounded-2xl px-5 py-3 text-xs flex-1 focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-zinc-300 placeholder:italic shadow-sm"
              />
              <button className="bg-primary text-white h-12 rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 font-black uppercase tracking-widest text-[10px] shadow-xl shadow-primary/20">
                Join The Family
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">
            © 2026 Bedzzz Sanctuary Originals. All rights reserved.
          </p>
          <div className="flex gap-8 text-zinc-400 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
