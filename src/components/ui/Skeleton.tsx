import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}

export function Skeleton({ className, variant = 'rectangular' }: SkeletonProps) {
  return (
    <motion.div
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={cn(
        "bg-white/5",
        variant === 'circular' ? "rounded-full" : "rounded-lg",
        className
      )}
    />
  );
}

export function StatisticSkeleton() {
  return (
    <div className="glass p-10 rounded-[2rem] border border-white/5 relative overflow-hidden h-[300px] flex flex-col justify-center">
      <Skeleton className="h-20 w-32 mb-6" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-6" />
      <Skeleton className="h-3 w-1/4" />
    </div>
  );
}

export function TipSkeleton() {
  return (
    <div className="glass p-8 rounded-3xl border border-white/5 border-b-white/10 h-full flex flex-col">
      <Skeleton className="w-12 h-12 mb-6 circular" />
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
