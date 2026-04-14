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
      if (data.data.role !== "admin") {
        setError("Access denied. This login is for administrators only.");
        return;
      }
      login(data.data, data.token);
      navigate("/admin");
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
    <div className="min-h-screen premium-gradient-bg flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full -ml-40 -mb-40" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <Link
            to="/"
            className="inline-flex flex-col items-center gap-3 mb-6 group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-zinc-100">
              <img
                src="/bedzzz-logo.png"
                alt="Bedzzz Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-zinc-900 font-bold text-2xl tracking-tight">
              Bedzzz
            </span>
          </Link>
          <h1 className="text-[28px] font-bold text-zinc-900 uppercase tracking-tight">
            Admin Portal
          </h1>
          <p className="text-zinc-500 mt-2 font-medium">
            Sign in to manage your sanctuary.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-zinc-100 p-8 rounded-3xl shadow-xl"
        >
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-500 text-sm font-semibold shadow-sm"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                Email Address
              </label>
              <Input
                placeholder="you@bedzzz.com"
                type="email"
                {...register("email")}
                className="rounded-xl h-12 border-zinc-100 bg-zinc-50 focus:bg-white transition-all shadow-sm"
                error={errors.email?.message}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[10px] text-primary font-bold uppercase tracking-widest hover:underline"
                >
                  Forgot?
                </a>
              </div>
              <Input
                placeholder="••••••••"
                type="password"
                {...register("password")}
                className="rounded-xl h-12 border-zinc-100 bg-zinc-50 focus:bg-white transition-all shadow-sm"
                error={errors.password?.message}
              />
            </div>

            <Button
              type="submit"
              className="w-full h-14 gap-2 rounded-xl shadow-lg font-bold uppercase tracking-widest text-sm"
              isLoading={mutation.isPending}
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </Button>
          </form>
        </motion.div>

        <p className="text-center mt-8">
          <Link
            to="/"
            className="text-primary font-bold hover:underline text-sm tracking-tight"
          >
            ← Back to Gallery
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
