import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Store, Bell, Shield, Save } from "lucide-react";

const AdminSettings: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Header */}
      {/* Profile Section */}
      <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-xl shadow-zinc-200/20">
        <h2 className="text-xl font-black text-zinc-900 flex items-center gap-2 mb-8">
          <Shield className="w-6 h-6 text-primary" />
          Admin Profile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold text-zinc-500 mb-2 px-1">
              Full Name
            </label>
            <input
              type="text"
              defaultValue={user?.name || "Admin"}
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-3 text-zinc-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-zinc-500 mb-2 px-1">
              Email Address
            </label>
            <input
              type="email"
              defaultValue={user?.email || "admin@gmail.com"}
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-3 text-zinc-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>
      </div>

      {/* Store Settings */}
      <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-xl shadow-zinc-200/20">
        <h2 className="text-xl font-black text-zinc-900 flex items-center gap-2 mb-8">
          <Store className="w-6 h-6 text-secondary" />
          Store Settings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold text-zinc-500 mb-2 px-1">
              Store Name
            </label>
            <input
              type="text"
              defaultValue="Bedzzz"
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-3 text-zinc-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-zinc-500 mb-2 px-1">
              Currency
            </label>
            <select className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-3 text-zinc-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>PKR (₨)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-zinc-500 mb-2 px-1">
              Tax Rate (%)
            </label>
            <input
              type="number"
              defaultValue="8.5"
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-3 text-zinc-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-zinc-500 mb-2 px-1">
              Shipping Fee
            </label>
            <input
              type="number"
              defaultValue="9.99"
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-3 text-zinc-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-xl shadow-zinc-200/20">
        <h2 className="text-xl font-black text-zinc-900 flex items-center gap-2 mb-8">
          <Bell className="w-6 h-6 text-amber-500" />
          Notifications
        </h2>
        <div className="space-y-4">
          {[
            {
              label: "New order notifications",
              description: "Get notified when a new order is placed",
              enabled: true,
            },
            {
              label: "Low stock alerts",
              description: "Alert when product stock is below threshold",
              enabled: true,
            },
            {
              label: "Customer signup notifications",
              description: "Get notified when a new customer registers",
              enabled: false,
            },
            {
              label: "Daily sales report",
              description: "Receive a daily summary of your sales",
              enabled: true,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-50 transition-colors cursor-pointer group"
            >
              <div>
                <p className="text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors">{item.label}</p>
                <p className="text-xs text-zinc-500 mt-1 font-medium">
                  {item.description}
                </p>
              </div>
              <button
                className={`w-12 h-6 rounded-full transition-colors relative shadow-inner ${item.enabled ? "bg-primary" : "bg-zinc-200"}`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white absolute top-0.5 shadow-sm transition-all ${item.enabled ? "right-0.5" : "left-0.5"}`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end pt-4">
        <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-[2rem] font-black text-sm transition-all active:scale-95 shadow-xl shadow-primary/20 uppercase tracking-widest">
          <Save className="w-5 h-5" />
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
