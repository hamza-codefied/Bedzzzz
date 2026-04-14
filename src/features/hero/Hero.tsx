import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/ui/Button";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "BETTER SLEEP STARTS HERE",
    description:
      "Super soft bedding and pillows designed to help you sleep better every single night.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=2000",
    tagline: "Best Selling Items",
    color: "from-blue-500/20",
  },
  {
    id: 2,
    title: "SOFTER THAN ANY OTHER",
    description:
      "We use the best materials to make sure your bed feels like a cloud.",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=2000",
    tagline: "New Arrivals",
    color: "from-pink-500/20",
  },
  {
    id: 3,
    title: "COMFORT FOR YOUR HOME",
    description: "Simple and clean designs that look great in any bedroom.",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=2000",
    tagline: "Our Favorites",
    color: "from-amber-500/20",
  },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-[#F7F4F0]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover scale-105 animate-slow-zoom"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slides[current].color} via-white/80 to-white/95 lg:to-white/40`}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {slides[current].tagline}
                </motion.div>

                <h1 className="text-[28px] font-bold text-zinc-900 leading-tight tracking-tight uppercase">
                  {slides[current].title}
                </h1>

                <p className="text-zinc-900 text-lg max-w-lg leading-relaxed font-medium">
                  {slides[current].description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/products">
                    <Button
                      size="lg"
                      className="group rounded-xl px-8 h-14 text-sm font-bold uppercase tracking-widest shadow-lg"
                    >
                      Explore Collection
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Floating Component */}
              <div className="hidden lg:block relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-premium p-8 rounded-3xl space-y-6 relative z-20"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                      <Star className="w-6 h-6 fill-primary" />
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                        Trusted By
                      </p>
                      <p className="text-xl font-bold text-zinc-900 tracking-tight">
                        50K+ FAMILIES
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-base font-medium text-zinc-500 leading-relaxed border-l-3 border-primary/20 pl-5">
                    "The best sleep I've had in years. It literally feels like
                    sleeping on a cloud. Shipping was super fast!"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full border-4 border-white bg-zinc-100 overflow-hidden shadow-sm"
                        >
                          <img
                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                            alt="user"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                      Join the family →
                    </p>
                  </div>
                </motion.div>

                {/* Decorative circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-primary/5 rounded-full -z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-primary/5 rounded-full -z-0" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-12 z-30 flex items-center gap-4">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? "w-12 bg-primary" : "w-4 bg-zinc-200"}`}
            />
          ))}
        </div>
        <div className="flex gap-2 ml-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-primary transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
