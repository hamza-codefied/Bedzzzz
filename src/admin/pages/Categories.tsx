import React from 'react';
import { Plus, Search, Edit2, Trash2, Tag, Package } from 'lucide-react';

const mockCategories = [
  { id: 1, name: 'Bedding', slug: 'bedding', products: 124, status: 'Active', description: 'Luxurious bedsheets and duvet cover sets' },
  { id: 2, name: 'Blankets', slug: 'blankets', products: 86, status: 'Active', description: 'Weighted and plush throw blankets' },
  { id: 3, name: 'Kids Wear', slug: 'kids-wear', products: 64, status: 'Active', description: 'Soft organic cotton sleepwear for little ones' },
  { id: 4, name: 'Decor', slug: 'decor', products: 92, status: 'Active', description: 'Decorative cushion covers and accents' },
  { id: 5, name: 'Sleep Care', slug: 'sleep-care', products: 45, status: 'Active', description: 'Orthopedic pillows and eye masks' },
  { id: 6, name: 'Accessories', slug: 'accessories', products: 32, status: 'Inactive', description: 'Laundry bags and sleep accessories' },
];

const statusColors: Record<string, string> = {
  Active: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  Inactive: 'bg-zinc-50 text-zinc-400 border-zinc-100',
};

const AdminCategories: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tighter">Categories</h1>
          <p className="text-zinc-500 mt-1 font-medium italic">Organize your shop by sanctuary zones.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-2xl font-black text-sm transition-all active:scale-95 shadow-xl shadow-primary/20 uppercase tracking-widest">
          <Plus className="w-5 h-5" />
          Add Category
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full bg-white border border-zinc-100 rounded-2xl py-3 pl-12 pr-4 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
        />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockCategories.map((category) => (
          <div key={category.id} className="bg-white border border-zinc-100 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-primary/10">
                <Tag className="w-7 h-7 text-primary" />
              </div>
              <span className={`inline-flex items-center px-3 py-1 rounded-2xl text-[10px] font-black uppercase tracking-widest border ${statusColors[category.status]}`}>
                {category.status}
              </span>
            </div>
            <h3 className="text-xl font-black text-zinc-900 mt-6 group-hover:text-primary transition-colors">{category.name}</h3>
            <p className="text-sm text-zinc-500 mt-2 font-medium leading-relaxed">{category.description}</p>
            <div className="flex items-center gap-1.5 mt-4 text-zinc-400 font-bold">
              <Package className="w-4 h-4 text-secondary" />
              <span className="text-xs">{category.products} items listed</span>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-zinc-50">
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Edit2 className="w-3.5 h-3.5" />
                Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-all">
                <Trash2 className="w-3.5 h-3.5" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
