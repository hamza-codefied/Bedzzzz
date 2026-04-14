import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import AdminRoute from './components/layout/AdminRoute';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';

// Admin Pages
import AdminLayout from './admin/components/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import AdminProducts from './admin/pages/Products';
import AdminOrders from './admin/pages/Orders';
import AdminCustomers from './admin/pages/Customers';
import AdminAnalytics from './admin/pages/Analytics';
import AdminCategories from './admin/pages/Categories';
import AdminSettings from './admin/pages/Settings';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <Router>
          <Routes>
            {/* Public customer routes — no login required */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />

            {/* Admin login route */}
            <Route path="/admin/login" element={<Login />} />

            {/* Admin routes — admin role only */}
            <Route element={<AdminRoute />}>
              <Route element={<AdminLayout />}>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/orders" element={<AdminOrders />} />
                <Route path="/admin/customers" element={<AdminCustomers />} />
                <Route path="/admin/analytics" element={<AdminAnalytics />} />
                <Route path="/admin/categories" element={<AdminCategories />} />
                <Route path="/admin/settings" element={<AdminSettings />} />
              </Route>
            </Route>

            {/* Catch-all for unknown routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
