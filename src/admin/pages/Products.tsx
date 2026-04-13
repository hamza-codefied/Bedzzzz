import React from "react";
import { Plus, Search, Filter, Edit2, Trash2, Eye } from "lucide-react";

const mockProducts = [
  {
    id: 1,
    name: "Egyptian Cotton Sheets",
    category: "Bedding",
    price: 189.99,
    stock: 45,
    status: "Active",
    image: "🛌",
  },
  {
    id: 2,
    name: "Silk Pillowcase Set",
    category: "Bedding",
    price: 49.99,
    stock: 32,
    status: "Active",
    image: "🎀",
  },
  {
    id: 3,
    name: "Weighted Sleep Blanket",
    category: "Blankets",
    price: 299.99,
    stock: 0,
    status: "Out of Stock",
    image: "🧶",
  },
  {
    id: 4,
    name: "Baby Cotton Romper",
    category: "Kids Wear",
    price: 29.99,
    stock: 67,
    status: "Active",
    image: "👶",
  },
  {
    id: 5,
    name: "Geometric Cushion Cover",
    category: "Decor",
    price: 24.99,
    stock: 23,
    status: "Active",
    image: "🔸",
  },
  {
    id: 6,
    name: "Woolen Winter Throw",
    category: "Blankets",
    price: 89.99,
    stock: 8,
    status: "Low Stock",
    image: "❄️",
  },
  {
    id: 7,
    name: "Toddler Sleepwear Set",
    category: "Kids Wear",
    price: 39.99,
    stock: 54,
    status: "Active",
    image: "🛌",
  },
  {
    id: 8,
    name: "Velvet Accent Cushion",
    category: "Decor",
    price: 34.99,
    stock: 41,
    status: "Active",
    image: "💜",
  },
];

const statusColors: Record<string, string> = {
  Active: "bg-emerald-50 text-emerald-600 border-emerald-100",
  "Out of Stock": "bg-rose-50 text-rose-600 border-rose-100",
  "Low Stock": "bg-amber-50 text-amber-600 border-amber-100",
};

const AdminProducts: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tighter">
            Collections
          </h1>
          <p className="text-zinc-500 mt-1 font-medium">Manage your sanctuary catalog</p>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-2xl font-black text-sm transition-all active:scale-95 shadow-xl shadow-primary/20 uppercase tracking-widest">
          <Plus className="w-5 h-5" />
          Add Item
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search collections..."
            className="w-full bg-white border border-zinc-100 rounded-2xl py-3 pl-12 pr-4 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
          />
        </div>
        <button className="flex items-center gap-2 bg-white border border-zinc-100 text-zinc-600 px-5 py-3 rounded-2xl text-sm font-bold hover:text-zinc-900 hover:border-zinc-200 transition-all shadow-sm">
          <Filter className="w-4 h-4" />
          Filter By
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white border border-zinc-100 rounded-[2rem] overflow-hidden shadow-xl shadow-zinc-200/20">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-50">
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">
                Product
              </th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">
                Category
              </th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">
                Price
              </th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">
                Stock
              </th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">
                Status
              </th>
              <th className="text-right text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {mockProducts.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-zinc-50/50 transition-colors group"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
                      {product.image}
                    </div>
                    <span className="text-sm font-black text-zinc-900 group-hover:text-primary transition-colors">
                      {product.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                   <span className="text-sm font-bold text-zinc-500 bg-zinc-50 px-3 py-1 rounded-xl">
                      {product.category}
                   </span>
                </td>
                <td className="px-6 py-5 text-sm font-black text-zinc-900">
                  ${product.price}
                </td>
                <td className="px-6 py-5 text-sm text-zinc-600 font-bold">
                  {product.stock} <span className="text-[10px] text-zinc-400 font-medium">units</span>
                </td>
                <td className="px-6 py-5">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-2xl text-[10px] font-black uppercase tracking-widest border ${statusColors[product.status]}`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center justify-end gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-6 border-t border-zinc-50">
          <p className="text-sm text-zinc-400 font-bold uppercase tracking-tight">Showing <span className="text-zinc-900">1–8</span> of <span className="text-zinc-900">256</span> items</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 rounded-xl hover:bg-zinc-50 transition-colors">
              Prev
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-sm bg-primary text-white rounded-xl font-black shadow-lg shadow-primary/20">
              1
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-sm text-zinc-500 hover:text-zinc-900 rounded-xl hover:bg-zinc-50 font-bold transition-colors">
              2
            </button>
            <button className="w-9 h-9 flex items-center justify-center text-sm text-zinc-500 hover:text-zinc-900 rounded-xl hover:bg-zinc-50 font-bold transition-colors">
              3
            </button>
            <button className="px-4 py-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 rounded-xl hover:bg-zinc-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
