import React from "react";
import { useQuery } from "@tanstack/react-query";
import { productService } from "../api/products";
import ProductCard from "../features/products/ProductCard";
import Layout from "../components/layout/Layout";
import Hero from "../features/hero/Hero";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Truck,
  Moon,
  Star,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: productService.getProducts,
  });

  const categories = [
    {
      title: "Best Bedding",
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
      items: "12 Items",
      size: "large",
    },
    {
      title: "Home Decor",
      img: "https://images.unsplash.com/photo-1616489953149-864c29997630?auto=format&fit=crop&q=80&w=800",
      items: "8 Items",
      size: "small",
    },
    {
      title: "Soft Pillows",
      img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
      items: "5 Items",
      size: "small",
    },
    {
      title: "Gift Ideas",
      img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
      items: "15 Items",
      size: "medium",
    },
  ];

  return (
    <Layout>
      <div className="premium-gradient-bg min-h-screen">
        <Hero />

        {/* Why Choose Us Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Section Decoration */}
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2" />

          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                  <Sparkles className="w-3 h-3" />
                  <span>Why Choose Us</span>
                </div>
                <h2 className="text-[28px] font-bold text-zinc-900 leading-tight uppercase tracking-tight max-w-md">
                  We make the softest bedding for a great sleep.
                </h2>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                  We focus on quality and comfort. Every item we sell is made to
                  be soft, strong, and good for the planet.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <MiniFeature
                    icon={<Shield />}
                    title="Good Quality"
                    text="Made with safe and strong materials."
                  />
                  <MiniFeature
                    icon={<Truck />}
                    title="Fast Shipping"
                    text="We ship your orders very quickly."
                  />
                  <MiniFeature
                    icon={<Star />}
                    title="Very Soft"
                    text="Designed to feel great on your skin."
                  />
                  <MiniFeature
                    icon={<Heart />}
                    title="Easy Returns"
                    text="Return it if you don't love it."
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=1000"
                    alt="Comfortable Bed"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl z-20 border border-white/50 max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
                      <Moon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">
                      Good Rest
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500 font-medium">
                    Perfect for a deep and peaceful sleep all night.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Shop By Category */}
        <section className="py-24 relative overflow-hidden bg-primary/5">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                    New Collection
                  </span>
                </div>
                <h2 className="text-[28px] font-bold text-zinc-900 uppercase tracking-tight">
                  Shop By Category
                </h2>
              </div>
              <Link
                to="/products"
                className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary hover:text-zinc-900 transition-colors"
              >
                See All Items
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[1000px] md:h-[650px]">
              <CategoryCard
                data={categories[0]}
                className="md:col-span-2 md:row-span-2"
              />
              <CategoryCard
                data={categories[1]}
                className="md:col-span-1 md:row-span-1"
              />
              <CategoryCard
                data={categories[2]}
                className="md:col-span-1 md:row-span-1"
              />
              <CategoryCard
                data={categories[3]}
                className="md:col-span-2 md:row-span-1"
              />
            </div>
          </div>
        </section>

        {/* Top Products */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] translate-x-1/2" />

          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center mb-20 space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary mb-2 shadow-md">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <h2 className="text-[28px] font-bold text-zinc-900 uppercase tracking-tight">
                Our Best Products
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto text-base font-medium">
                These are our most popular items that customers love the most.
              </p>
            </motion.div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-[4/5] bg-white/50 rounded-3xl animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {products?.slice(0, 4).map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}

            <div className="mt-20 text-center">
              <Link to="/products" className="inline-block">
                <Button
                  variant="outline"
                  className="px-12 h-14 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] border-zinc-200 hover:border-zinc-900 transition-all duration-300 group shadow-lg bg-white/50 backdrop-blur-sm"
                >
                  See All Products
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Email List CTA */}
        {/* High-Impact Newsletter Section */}
        <section className="py-24 pb-32">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] min-h-[550px] flex items-center p-8 md:p-20"
            >
              {/* Fixed Local Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/hero-bedroom.png"
                  alt="Quality Bedroom"
                  className="w-full h-full object-cover scale-105"
                />
                {/* Heavy Dual Overlay for Text Pop */}
                <div className="absolute inset-0 bg-zinc-900/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent" />
              </div>

              {/* Content - Aligned Left for Better Visual Hierarchy */}
              <div className="relative z-10 max-w-xl space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-primary/20 backdrop-blur-xl text-primary-light text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Join our community</span>
                </motion.div>

                <h2 className="text-[32px] md:text-5xl font-bold text-white uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                  Get updates on <br /> our best bedding.
                </h2>

                <p className="text-zinc-300 text-lg font-medium max-w-sm leading-relaxed">
                  Be the first to hear about new items and special sales. We
                  never send spam.
                </p>

                <div className="w-full">
                  <div className="flex flex-col sm:flex-row p-2 bg-white/10 backdrop-blur-3xl rounded-[1.5rem] border border-white/20 shadow-2xl group focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="bg-transparent border-none focus:ring-0 text-white placeholder:text-zinc-400 text-base flex-1 px-6 py-4"
                    />
                    <Button className="rounded-2xl px-12 h-14 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl bg-primary text-white hover:bg-white hover:text-zinc-900 transition-all duration-500">
                      Sign Up
                    </Button>
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-4 uppercase tracking-[0.2em] font-bold ml-4">
                    Trusted by 50,000+ local families
                  </p>
                </div>
              </div>

              {/* Decorative Badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 backdrop-blur-3xl rounded-full border border-white/5 flex items-center justify-center opacity-20"
              />
              <div className="absolute top-12 right-12 hidden lg:block">
                <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center text-white shadow-2xl">
                  <Heart className="w-8 h-8 fill-primary text-primary mb-1" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary">
                    Softness
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

const MiniFeature = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="flex items-start gap-4 group">
    <div className="w-10 h-10 rounded-xl bg-white/50 border border-zinc-200 flex items-center justify-center text-primary shadow-sm shrink-0">
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<any>, {
            className: "w-4 h-4",
          })
        : icon}
    </div>
    <div className="space-y-1">
      <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-tight">
        {title}
      </h4>
      <p className="text-xs text-zinc-500 font-medium leading-relaxed">
        {text}
      </p>
    </div>
  </div>
);

const CategoryCard = ({
  data,
  className,
}: {
  data: any;
  className?: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`relative group rounded-3xl overflow-hidden shadow-lg border border-white/50 cursor-pointer ${className}`}
  >
    <img
      src={data.img}
      alt={data.title}
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest mb-1">
        {data.items}
      </span>
      <h4 className="text-xl font-bold text-white tracking-tight uppercase leading-none">
        {data.title}
      </h4>
      <div className="mt-4 flex items-center gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">
          Shop Now
        </span>
        <ArrowRight className="w-3 h-3 text-primary" />
      </div>
    </div>
  </motion.div>
);

export default Home;
