import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Tag,
} from 'lucide-react';

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/admin/products', icon: Package, label: 'Products', end: false },
  { to: '/admin/orders', icon: ShoppingCart, label: 'Orders', end: false },
  { to: '/admin/customers', icon: Users, label: 'Customers', end: false },
  { to: '/admin/analytics', icon: BarChart3, label: 'Analytics', end: false },
  { to: '/admin/categories', icon: Tag, label: 'Categories', end: false },
  { to: '/admin/settings', icon: Settings, label: 'Settings', end: false },
];

const AdminSidebar: React.FC<AdminSidebarProps> = ({ collapsed, onToggle }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white border-r border-zinc-100 flex flex-col transition-all duration-300 z-50 ${
        collapsed ? 'w-[80px]' : 'w-[280px]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between h-20 px-5 border-b border-zinc-100">
        {!collapsed && (
          <div className="flex items-center gap-1.5">
            <img src="/src/assets/logo.png" alt="Bedzzz Logo" className="w-10 h-10 object-contain" />
            <div>
              <span className="text-zinc-900 font-extrabold text-lg tracking-tighter uppercase">Bed<span className="text-primary">zzz</span></span>
              <span className="block text-[10px] text-primary font-bold tracking-widest uppercase -mt-0.5">Admin Panel</span>
            </div>
          </div>
        )}
        {collapsed && (
          <img src="/src/assets/logo.png" alt="Logo" className="w-10 h-10 object-contain mx-auto" />
        )}
        <button
          onClick={onToggle}
          className={`w-7 h-7 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors ${collapsed ? 'hidden' : ''}`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Expand button when collapsed */}
      {collapsed && (
        <button
          onClick={onToggle}
          className="w-7 h-7 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors mx-auto mt-3"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 group ${
                isActive
                  ? 'bg-primary/10 text-primary shadow-sm shadow-primary/5'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
              } ${collapsed ? 'justify-center px-0' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-primary' : 'text-zinc-400 group-hover:text-zinc-900'}`} />
                {!collapsed && <span>{item.label}</span>}
                {isActive && !collapsed && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Section */}
      <div className="border-t border-zinc-100 p-4">
        {!collapsed ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-lg shadow-primary/20">
              {user?.name?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-zinc-900 text-sm font-bold truncate">{user?.name || 'Admin'}</p>
              <p className="text-zinc-500 text-xs truncate">{user?.email || 'admin@gmail.com'}</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-colors flex-shrink-0"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogout}
            className="w-10 h-10 flex items-center justify-center rounded-2xl text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-colors mx-auto"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        )}
      </div>
    </aside>
  );
};

export default AdminSidebar;
