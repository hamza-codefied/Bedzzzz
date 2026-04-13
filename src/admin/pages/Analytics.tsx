import React from 'react';
import { TrendingUp, DollarSign, ShoppingCart, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const monthlyRevenue = [
  { month: 'Jan', revenue: 12400 },
  { month: 'Feb', revenue: 15800 },
  { month: 'Mar', revenue: 18200 },
  { month: 'Apr', revenue: 22100 },
  { month: 'May', revenue: 19500 },
  { month: 'Jun', revenue: 25800 },
  { month: 'Jul', revenue: 28900 },
  { month: 'Aug', revenue: 32100 },
  { month: 'Sep', revenue: 29400 },
  { month: 'Oct', revenue: 35200 },
  { month: 'Nov', revenue: 41800 },
  { month: 'Dec', revenue: 48295 },
];

const maxRevenue = Math.max(...monthlyRevenue.map(m => m.revenue));

const categoryBreakdown = [
  { name: 'Bedding', percentage: 38, color: '#FF5E8E', revenue: '$18,352' },
  { name: 'Blankets', percentage: 24, color: '#3B82F6', revenue: '$11,590' },
  { name: 'Kids Wear', percentage: 18, color: '#8B5CF6', revenue: '$8,693' },
  { name: 'Decor', percentage: 12, color: '#F59E0B', revenue: '$5,795' },
  { name: 'Sleep Care', percentage: 8, color: '#10B981', revenue: '$3,863' },
];

const topMetrics = [
  { label: 'Average Order Value', value: '$127.50', change: '+5.2%', trend: 'up' },
  { label: 'Conversion Rate', value: '3.8%', change: '+0.4%', trend: 'up' },
  { label: 'Return Rate', value: '4.2%', change: '-1.1%', trend: 'down' },
  { label: 'Cart Abandonment', value: '68.5%', change: '-3.2%', trend: 'down' },
];

const AdminAnalytics: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black text-zinc-900 tracking-tighter">Insights</h1>
        <p className="text-zinc-500 mt-1 font-medium italic">Deep diving into your store performance.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {topMetrics.map((metric) => (
          <div key={metric.label} className="bg-white border border-zinc-100 rounded-[2rem] p-6 shadow-xl shadow-zinc-200/20 hover:shadow-primary/5 transition-all group">
            <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">{metric.label}</p>
            <div className="flex items-end gap-2 mt-2">
              <p className="text-3xl font-black text-zinc-900 group-hover:text-primary transition-colors">{metric.value}</p>
              <span className={`flex items-center gap-0.5 text-xs font-black mb-1.5 ${
                (metric.trend === 'up' && metric.label !== 'Cart Abandonment') || (metric.trend === 'down' && metric.label === 'Cart Abandonment')
                  ? 'text-emerald-500' : (metric.trend === 'down' && metric.label !== 'Return Rate' && metric.label !== 'Cart Abandonment') ? 'text-rose-500' : 'text-emerald-500'
              }`}>
                {metric.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-xl shadow-zinc-200/20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-xl font-black text-zinc-900">Monthly Revenue</h2>
            <p className="text-zinc-500 text-sm mt-1 font-medium italic">Revenue trends over the past year</p>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-100">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-black uppercase tracking-widest">+32% YoY</span>
          </div>
        </div>

        {/* Simple bar chart */}
        <div className="flex items-end gap-3 h-64 px-4 pt-10">
          {monthlyRevenue.map((item, index) => (
            <div key={item.month} className="flex-1 flex flex-col items-center gap-3">
              <div className="relative group/bar flex-1 w-full flex flex-col justify-end">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400 font-black opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">${(item.revenue / 1000).toFixed(0)}k</span>
                <div
                  className="w-full rounded-2xl transition-all duration-700 hover:scale-105 cursor-pointer shadow-sm"
                  style={{
                    height: `${(item.revenue / maxRevenue) * 100}%`,
                    background: index === monthlyRevenue.length - 1
                      ? 'linear-gradient(to top, #FF5E8E, #FF2E6A)'
                      : 'linear-gradient(to top, #F4F4F5, #E4E4E7)',
                  }}
                  title={`${item.month}: $${item.revenue.toLocaleString()}`}
                />
              </div>
              <span className="text-xs text-zinc-400 font-black uppercase tracking-widest">{item.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Category Breakdown */}
        <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-xl shadow-zinc-200/20">
          <h2 className="text-xl font-black text-zinc-900 mb-8">Sales by Zone</h2>
          <div className="space-y-6">
            {categoryBreakdown.map((cat) => (
              <div key={cat.name} className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: cat.color }} />
                    <span className="text-sm font-black text-zinc-900 uppercase tracking-tight">{cat.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-zinc-400 font-bold">{cat.revenue}</span>
                    <span className="text-sm font-black text-zinc-900 w-10 text-right">{cat.percentage}%</span>
                  </div>
                </div>
                <div className="w-full h-3 bg-zinc-50 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out shadow-sm"
                    style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-xl shadow-zinc-200/20">
          <h2 className="text-xl font-black text-zinc-900 mb-8">Store Heartbeat</h2>
          <div className="space-y-4">
            {[
              { icon: ShoppingCart, text: 'New order for Silk Pillowcases placed', time: '2 min ago', color: 'text-blue-600 bg-blue-50' },
              { icon: Users, text: 'New Bedzzz member registered', time: '15 min ago', color: 'text-primary bg-primary/5' },
              { icon: DollarSign, text: 'Payment of $489.97 received', time: '1 hr ago', color: 'text-emerald-600 bg-emerald-50' },
              { icon: ShoppingCart, text: 'Order #ORD-7839 (Egyptian Cotton) shipped', time: '2 hrs ago', color: 'text-amber-600 bg-amber-50' },
              { icon: Users, text: '3 new reviews for Baby Rompers', time: '3 hrs ago', color: 'text-secondary bg-secondary/10' },
              { icon: DollarSign, text: 'Refund of $129.99 processed', time: '5 hrs ago', color: 'text-rose-600 bg-rose-50' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-3xl hover:bg-zinc-50 transition-all cursor-pointer group">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-zinc-50 ${activity.color}`}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-zinc-900 font-bold group-hover:text-primary transition-colors truncate">{activity.text}</p>
                  <p className="text-xs text-zinc-400 font-medium italic">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
