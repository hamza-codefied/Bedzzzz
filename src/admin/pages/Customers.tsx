import React from 'react';
import { Search, Filter, MoreVertical, Mail, Ban, CheckCircle2 } from 'lucide-react';

const mockCustomers = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@email.com', orders: 12, spent: '$2,489.88', joined: 'Jan 15, 2026', status: 'Active' },
  { id: 2, name: 'Mike Peters', email: 'mike@email.com', orders: 8, spent: '$1,759.92', joined: 'Feb 03, 2026', status: 'Active' },
  { id: 3, name: 'Emily Davis', email: 'emily@email.com', orders: 23, spent: '$5,129.77', joined: 'Nov 12, 2025', status: 'Active' },
  { id: 4, name: 'Chris Brown', email: 'chris@email.com', orders: 3, spent: '$389.97', joined: 'Mar 22, 2026', status: 'Active' },
  { id: 5, name: 'Anna Wilson', email: 'anna@email.com', orders: 0, spent: '$0.00', joined: 'Apr 01, 2026', status: 'Inactive' },
  { id: 6, name: 'James Lee', email: 'james@email.com', orders: 15, spent: '$3,899.85', joined: 'Dec 05, 2025', status: 'Active' },
  { id: 7, name: 'Olivia Martin', email: 'olivia@email.com', orders: 1, spent: '$89.99', joined: 'Apr 08, 2026', status: 'Blocked' },
];

const statusColors: Record<string, string> = {
  Active: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  Inactive: 'bg-zinc-50 text-zinc-400 border-zinc-100',
  Blocked: 'bg-rose-50 text-rose-600 border-rose-100',
};

const avatarColors = [
  'from-primary to-primary-dark',
  'from-secondary to-secondary/80',
  'from-blue-400 to-blue-600',
  'from-amber-400 to-amber-600',
  'from-emerald-400 to-emerald-600',
  'from-violet-400 to-violet-600',
  'from-pink-400 to-pink-600',
];

const AdminCustomers: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black text-zinc-900 tracking-tighter">Community</h1>
        <p className="text-zinc-500 mt-1 font-medium italic">Managing our loyal Bedzzz sleep enthusiasts.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-zinc-100 rounded-[2rem] p-6 shadow-xl shadow-zinc-200/20">
          <p className="text-zinc-400 text-xs font-black uppercase tracking-widest">Total Customers</p>
          <p className="text-3xl font-black text-zinc-900 mt-2">3,741</p>
        </div>
        <div className="bg-white border border-zinc-100 rounded-[2rem] p-6 shadow-xl shadow-zinc-200/20">
          <p className="text-zinc-400 text-xs font-black uppercase tracking-widest">New Dreamers</p>
          <p className="text-3xl font-black text-emerald-500 mt-2">+284</p>
        </div>
        <div className="bg-white border border-zinc-100 rounded-[2rem] p-6 shadow-xl shadow-zinc-200/20">
          <p className="text-zinc-400 text-xs font-black uppercase tracking-widest">Active Rate</p>
          <p className="text-3xl font-black text-primary mt-2">92.4%</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search enthusiasts..."
            className="w-full bg-white border border-zinc-100 rounded-2xl py-3 pl-12 pr-4 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
          />
        </div>
        <button className="flex items-center gap-2 bg-white border border-zinc-100 text-zinc-600 px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:text-zinc-900 hover:border-zinc-200 transition-all shadow-sm">
          <Filter className="w-4 h-4" />
          More Filters
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-zinc-100 rounded-[2rem] overflow-hidden shadow-xl shadow-zinc-200/20">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-50">
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Customer</th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Orders</th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Total Spent</th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Joined</th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Status</th>
              <th className="text-right text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {mockCustomers.map((customer, index) => (
              <tr key={customer.id} className="hover:bg-zinc-50/50 transition-colors group">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-base font-black flex-shrink-0 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`}>
                      {customer.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-black text-zinc-900 group-hover:text-primary transition-colors">{customer.name}</p>
                      <p className="text-xs text-zinc-400 font-medium">{customer.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-zinc-600 font-bold">{customer.orders} <span className="text-[10px] text-zinc-400 font-medium">orders</span></td>
                <td className="px-6 py-5 text-sm font-black text-zinc-900">{customer.spent}</td>
                <td className="px-6 py-5 text-sm text-zinc-400 font-medium">{customer.joined}</td>
                <td className="px-6 py-5">
                  <span className={`inline-flex items-center px-3 py-1 rounded-2xl text-[10px] font-black uppercase tracking-widest border ${statusColors[customer.status]}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center justify-end gap-2">
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Email">
                      <Mail className="w-4 h-4" />
                    </button>
                    {customer.status === 'Blocked' ? (
                      <button className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors" title="Unblock">
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors" title="Block">
                        <Ban className="w-4 h-4" />
                      </button>
                    )}
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-6 py-6 border-t border-zinc-50">
          <p className="text-sm text-zinc-400 font-bold uppercase tracking-tight">Showing <span className="text-zinc-900">1–7</span> of <span className="text-zinc-900">3,741</span> dreamers</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 rounded-xl hover:bg-zinc-50 transition-colors">Prev</button>
            <button className="w-9 h-9 flex items-center justify-center text-sm bg-primary text-white rounded-xl font-black shadow-lg shadow-primary/20">1</button>
            <button className="w-9 h-9 flex items-center justify-center text-sm text-zinc-500 hover:text-zinc-900 rounded-xl hover:bg-zinc-50 font-bold transition-colors">2</button>
            <button className="px-4 py-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 rounded-xl hover:bg-zinc-50 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomers;
