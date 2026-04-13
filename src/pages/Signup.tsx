import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { authService } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { UserPlus, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignupForm = z.infer<typeof signupSchema>;

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = React.useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const mutation = useMutation({
    mutationFn: authService.signup,
    onSuccess: (data) => {
      login(data.data, data.token);
      navigate('/');
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || 'Signup failed. Email may already be in use.');
    },
  });

  const onSubmit = (data: SignupForm) => {
    setError(null);
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7]/30 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -ml-96 -mt-96" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 30, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -mr-48" 
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex flex-col items-center gap-3 mb-8 group">
             <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-2xl flex items-center justify-center border border-zinc-50 group-hover:scale-110 transition-all duration-500">
                <img src="/bedzzz-logo.png" alt="Bedzzz Logo" className="w-14 h-14 object-contain" />
              </div>
            <span className="text-zinc-900 font-black text-4xl tracking-tighter uppercase italic">Bed<span className="text-primary italic-none">zzz</span></span>
          </Link>
          <h1 className="text-4xl font-black text-zinc-900 uppercase tracking-tighter italic">Join the Family</h1>
          <p className="text-zinc-500 mt-3 font-medium italic">Start your journey to better sleep today.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-3xl border border-white p-10 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(255,140,167,0.15)] relative"
        >
          <motion.div 
            animate={{ rotate: 12, y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-3xl shadow-2xl border border-zinc-50"
          >
            <ShieldCheck className="w-8 h-8 text-emerald-500" />
          </motion.div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 p-5 bg-rose-50 border border-rose-100 rounded-3xl text-rose-500 text-sm font-black italic shadow-sm"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-4">Full Name</label>
              <Input
                placeholder="Hamza Ali"
                {...register('name')}
                className="rounded-2xl h-14 border-zinc-50 bg-white/50 focus:bg-white transition-all shadow-sm"
                error={errors.name?.message}
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-4">Email Address</label>
              <Input
                placeholder="hamza@gmail.com"
                type="email"
                {...register('email')}
                className="rounded-2xl h-14 border-zinc-50 bg-white/50 focus:bg-white transition-all shadow-sm"
                error={errors.email?.message}
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-4">Password</label>
              <Input
                placeholder="••••••••"
                type="password"
                {...register('password')}
                className="rounded-2xl h-14 border-zinc-50 bg-white/50 focus:bg-white transition-all shadow-sm"
                error={errors.password?.message}
              />
            </div>

            <div className="flex items-center gap-3 py-4 px-2">
              <input type="checkbox" className="accent-primary w-5 h-5 rounded-lg border-zinc-200 cursor-pointer" required />
              <label className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-none">
                I agree to the <a href="#" className="text-primary hover:underline">Terms</a> & <a href="#" className="text-primary hover:underline">Privacy</a>
              </label>
            </div>

            <Button type="submit" className="w-full h-16 gap-3 rounded-[1.5rem] shadow-2xl shadow-primary/30 font-black uppercase tracking-[0.2em] text-lg mt-4" isLoading={mutation.isPending}>
              <UserPlus className="w-5 h-5" />
              Start Dreaming
            </Button>
          </form>
        </motion.div>

        <p className="text-center mt-10 text-zinc-400 font-bold italic">
          Part of the family?{' '}
          <Link to="/login" className="text-primary font-black hover:underline tracking-tight not-italic ml-1">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
