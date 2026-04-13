import React from 'react';
import { Search, Filter, Eye, MoreVertical } from 'lucide-react';

const mockOrders = [
  { id: '#ORD-7841', customer: 'Sarah Johnson', email: 'sarah@email.com', items: 3, total: '$489.97', date: 'Apr 12, 2026', status: 'Delivered', payment: 'Paid' },
  { id: '#ORD-7840', customer: 'Mike Peters', email: 'mike@email.com', items: 1, total: '$219.99', date: 'Apr 12, 2026', status: 'Processing', payment: 'Paid' },
  { id: '#ORD-7839', customer: 'Emily Davis', email: 'emily@email.com', items: 2, total: '$429.98', date: 'Apr 11, 2026', status: 'Shipped', payment: 'Paid' },
  { id: '#ORD-7838', customer: 'Chris Brown', email: 'chris@email.com', items: 1, total: '$129.99', date: 'Apr 11, 2026', status: 'Pending', payment: 'Pending' },
  { id: '#ORD-7837', customer: 'Anna Wilson', email: 'anna@email.com', items: 4, total: '$599.96', date: 'Apr 10, 2026', status: 'Delivered', payment: 'Paid' },
  { id: '#ORD-7836', customer: 'James Lee', email: 'james@email.com', items: 2, total: '$339.98', date: 'Apr 10, 2026', status: 'Cancelled', payment: 'Refunded' },
  { id: '#ORD-7835', customer: 'Olivia Martin', email: 'olivia@email.com', items: 1, total: '$89.99', date: 'Apr 09, 2026', status: 'Delivered', payment: 'Paid' },
];

const statusColors: Record<string, string> = {
  Delivered: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  Processing: 'bg-blue-50 text-blue-600 border-blue-100',
  Shipped: 'bg-amber-50 text-amber-600 border-amber-100',
  Pending: 'bg-zinc-50 text-zinc-600 border-zinc-100',
  Cancelled: 'bg-rose-50 text-rose-600 border-rose-100',
};

const paymentColors: Record<string, string> = {
  Paid: 'text-emerald-600',
  Pending: 'text-amber-600',
  Refunded: 'text-rose-600',
};

const tabs = ['All Orders', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

const AdminOrders: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('All Orders');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black text-zinc-900 tracking-tighter">Orders</h1>
        <p className="text-zinc-500 mt-1 font-medium italic">Tracking sweet dreams from checkout to delivery.</p>
      </div>

      {/* Tabs & Filters Container */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Tabs */}
        <div className="flex items-center gap-2 bg-white border border-zinc-100 rounded-2xl p-1.5 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-xs md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full bg-white border border-zinc-100 rounded-2xl py-2.5 pl-10 pr-4 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 bg-white border border-zinc-100 text-zinc-600 px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:text-zinc-900 hover:border-zinc-200 transition-all shadow-sm">
            <Filter className="w-3.5 h-3.5" />
            Date
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-zinc-100 rounded-[2rem] overflow-hidden shadow-xl shadow-zinc-200/20">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-50">
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Order</th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Customer</th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Items</th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Total</th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Date</th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Status</th>
              <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Payment</th>
              <th className="text-right text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-5">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {mockOrders.map((order) => (
              <tr key={order.id} className="hover:bg-zinc-50/50 transition-colors group">
                <td className="px-6 py-5 text-sm font-mono font-bold text-zinc-900 group-hover:text-primary transition-colors">{order.id}</td>
                <td className="px-6 py-5">
                  <div>
                    <p className="text-sm font-bold text-zinc-900">{order.customer}</p>
                    <p className="text-xs text-zinc-400 font-medium">{order.email}</p>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-zinc-600 font-bold">{order.items} <span className="text-[10px] text-zinc-400 font-medium">pcs</span></td>
                <td className="px-6 py-5 text-sm font-black text-zinc-900">{order.total}</td>
                <td className="px-6 py-5 text-sm text-zinc-400 font-medium">{order.date}</td>
                <td className="px-6 py-5">
                  <span className={`inline-flex items-center px-3 py-1 rounded-2xl text-[10px] font-black uppercase tracking-widest border ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className={`text-xs font-black uppercase tracking-tighter ${paymentColors[order.payment]}`}>{order.payment}</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center justify-end gap-1">
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-6 border-t border-zinc-50">
          <p className="text-sm text-zinc-400 font-bold uppercase tracking-tight">Showing <span className="text-zinc-900">1–7</span> of <span className="text-zinc-900">1,482</span> orders</p>
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

export default AdminOrders;
