import React from 'react';
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Clock,
  MoreHorizontal,
  Eye,
} from 'lucide-react';

// Stat Card Component
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon: Icon, iconColor, iconBg }) => (
  <div className="bg-white border border-zinc-100 rounded-[2rem] p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">{title}</p>
        <p className="text-3xl font-black text-zinc-900 mt-2 tracking-tight">{value}</p>
        <div className="flex items-center gap-1.5 mt-3">
          {changeType === 'positive' ? (
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-rose-500" />
          )}
          <span className={`text-sm font-bold ${changeType === 'positive' ? 'text-emerald-500' : 'text-rose-500'}`}>
            {change}
          </span>
          <span className="text-zinc-400 text-sm font-medium">vs last month</span>
        </div>
      </div>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg} group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-primary/5`}>
        <Icon className={`w-7 h-7 ${iconColor}`} />
      </div>
    </div>
  </div>
);

// Recent Orders
const recentOrders = [
  { id: '#ORD-7841', customer: 'Sarah Johnson', product: 'Cotton Bedsheets', amount: '$189.99', status: 'Delivered', time: '2 min ago' },
  { id: '#ORD-7840', customer: 'Mike Peters', product: 'Velvet Cushions', amount: '$89.99', status: 'Processing', time: '15 min ago' },
  { id: '#ORD-7839', customer: 'Emily Davis', product: 'Weighted Blanket', amount: '$299.99', status: 'Shipped', time: '1 hr ago' },
  { id: '#ORD-7838', customer: 'Chris Brown', product: 'Duvet Cover Set', amount: '$129.99', status: 'Pending', time: '2 hrs ago' },
  { id: '#ORD-7837', customer: 'Anna Wilson', product: 'Silk Pillowcase', amount: '$49.99', status: 'Delivered', time: '3 hrs ago' },
];

const statusColors: Record<string, string> = {
  Delivered: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  Processing: 'bg-blue-50 text-blue-600 border-blue-100',
  Shipped: 'bg-amber-50 text-amber-600 border-amber-100',
  Pending: 'bg-zinc-50 text-zinc-600 border-zinc-100',
};

// Top Products
const topProducts = [
  { name: 'Egyptian Cotton Sheets', category: 'Bedding', sold: 284, revenue: '$53,976', trend: '+12%' },
  { name: 'Plush Throw Blanket', category: 'Blankets', sold: 256, revenue: '$15,318', trend: '+8%' },
  { name: 'Orthopedic Pillow', category: 'Sleep Care', sold: 198, revenue: '$19,840', trend: '+23%' },
  { name: 'Flower Cushion Cover', category: 'Decor', sold: 176, revenue: '$4,854', trend: '+5%' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tighter">Dashboard</h1>
          <p className="text-zinc-500 mt-1 font-medium italic">Sweet dreams start with great management. Here's your shop status.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-400 font-bold bg-white px-4 py-2 rounded-2xl border border-zinc-100 flex items-center gap-2 shadow-sm">
            <Clock className="w-4 h-4 text-primary" />
            Last updated: Just now
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="$48,295"
          change="+12.5%"
          changeType="positive"
          icon={DollarSign}
          iconColor="text-emerald-500"
          iconBg="bg-emerald-50"
        />
        <StatCard
          title="Total Orders"
          value="1,482"
          change="+8.2%"
          changeType="positive"
          icon={ShoppingCart}
          iconColor="text-blue-500"
          iconBg="bg-blue-50"
        />
        <StatCard
          title="Total Customers"
          value="3,741"
          change="+15.3%"
          changeType="positive"
          icon={Users}
          iconColor="text-primary"
          iconBg="bg-primary/5"
        />
        <StatCard
          title="Total Products"
          value="256"
          change="-2.1%"
          changeType="negative"
          icon={Package}
          iconColor="text-amber-500"
          iconBg="bg-amber-50"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Orders Table */}
        <div className="xl:col-span-2 bg-white border border-zinc-100 rounded-[2rem] overflow-hidden shadow-xl shadow-zinc-200/20">
          <div className="flex items-center justify-between p-6 border-b border-zinc-50">
            <h2 className="text-xl font-black text-zinc-900">Recent Orders</h2>
            <button className="text-sm text-primary hover:text-primary-dark font-black flex items-center gap-1 transition-colors uppercase tracking-widest">
              View all <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-50">
                  <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-4">Order</th>
                  <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-4">Customer</th>
                  <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-4">Product</th>
                  <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-4">Amount</th>
                  <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-4">Status</th>
                  <th className="text-left text-xs font-bold text-zinc-400 uppercase tracking-widest px-6 py-4">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="last:border-0 hover:bg-zinc-50/50 transition-colors group">
                    <td className="px-6 py-5 text-sm font-mono font-bold text-zinc-900 group-hover:text-primary transition-colors">{order.id}</td>
                    <td className="px-6 py-5 text-sm text-zinc-600 font-medium">{order.customer}</td>
                    <td className="px-6 py-5 text-sm text-zinc-500 font-medium">{order.product}</td>
                    <td className="px-6 py-5 text-sm font-black text-zinc-900">{order.amount}</td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center px-3 py-1 rounded-2xl text-[10px] uppercase font-black border tracking-widest ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-zinc-400 font-medium">{order.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white border border-zinc-100 rounded-[2rem] overflow-hidden shadow-xl shadow-zinc-200/20">
          <div className="flex items-center justify-between p-6 border-b border-zinc-50">
            <h2 className="text-xl font-black text-zinc-900">Top Categories</h2>
            <button className="w-10 h-10 flex items-center justify-center rounded-2xl text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="divide-y divide-zinc-50">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center gap-4 p-5 px-6 hover:bg-zinc-50/50 transition-colors group">
                <div className="w-10 h-10 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-sm font-black text-zinc-400 group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-zinc-900 truncate">{product.name}</p>
                  <p className="text-xs text-zinc-500 font-medium">{product.category} · {product.sold} sold</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-zinc-900">{product.revenue}</p>
                  <p className="text-xs text-emerald-500 font-black">{product.trend}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickAction
          title="Add New Collection"
          description="List a new bedding item in your store"
          icon={Package}
          gradient="from-primary to-primary-dark"
        />
        <QuickAction
          title="Sleep Reports"
          description="Check detailed sales and customer satisfaction"
          icon={Eye}
          gradient="from-secondary to-secondary/80"
        />
        <QuickAction
          title="Bedzzz Community"
          description="View and manage your loyal customers"
          icon={Users}
          gradient="from-blue-400 to-blue-600"
        />
      </div>
    </div>
  );
};

interface QuickActionProps {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const QuickAction: React.FC<QuickActionProps> = ({ title, description, icon: Icon, gradient }) => (
  <button className="bg-white border border-zinc-100 rounded-[2rem] p-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 text-left group">
    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-primary/10`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-zinc-900 font-black text-lg tracking-tight">{title}</h3>
    <p className="text-zinc-500 text-sm mt-1 font-medium">{description}</p>
  </button>
);

export default Dashboard;
