import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { LogIn } from "lucide-react";
import { motion } from "framer-motion";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      login(data.data, data.token);
      if (data.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    },
    onError: (err: any) => {
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials.",
      );
    },
  });

  const onSubmit = (data: LoginForm) => {
    setError(null);
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7]/30 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -mr-96 -mt-96"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <Link
            to="/"
            className="inline-flex flex-col items-center gap-3 mb-8 group"
          >
            <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center border border-zinc-50 group-hover:rotate-12 transition-all duration-500">
              <img
                src="/bedzzz-logo.png"
                alt="Bedzzz Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-zinc-900 font-black text-5xl tracking-tighter uppercase italic">
              Bed<span className="text-primary italic-none">zzz</span>
            </span>
          </Link>
          <h1 className="text-4xl font-black text-zinc-900 uppercase tracking-tighter italic">
            Welcome Home
          </h1>
          <p className="text-zinc-500 mt-3 font-medium italic">
            Return to your personal sanctuary of comfort.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-3xl border border-white p-10 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(255,140,167,0.15)]"
        >
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 p-5 bg-rose-50 border border-rose-100 rounded-3xl text-rose-500 text-sm font-black italic shadow-sm"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-4">
                Email Address
              </label>
              <Input
                placeholder="you@sanctuary.com"
                type="email"
                {...register("email")}
                className="rounded-2xl h-14 border-zinc-50 bg-white/50 focus:bg-white transition-all shadow-sm"
                error={errors.email?.message}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between mx-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[10px] text-primary font-black uppercase tracking-widest hover:underline shadow-sm"
                >
                  Forgot?
                </a>
              </div>
              <Input
                placeholder="••••••••"
                type="password"
                {...register("password")}
                className="rounded-2xl h-14 border-zinc-50 bg-white/50 focus:bg-white transition-all shadow-sm"
                error={errors.password?.message}
              />
            </div>

            <Button
              type="submit"
              className="w-full h-16 gap-3 rounded-[1.5rem] shadow-2xl shadow-primary/30 font-black uppercase tracking-[0.2em]"
              isLoading={mutation.isPending}
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </Button>
          </form>
        </motion.div>

        <p className="text-center mt-10 text-zinc-400 font-bold italic">
          New to the family?{" "}
          <Link
            to="/signup"
            className="text-primary font-black hover:underline tracking-tight not-italic ml-1"
          >
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
