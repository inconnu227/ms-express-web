import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;   // ⬅️ AJOUT
}

const MotionButton = motion.button;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external,
      fullWidth = false,   // ⬅️ AJOUT
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 active:scale-95',
      size === 'sm' && 'px-4 h-10 text-sm',
      size === 'md' && 'px-6 h-12 text-base',
      size === 'lg' && 'px-8 h-14 text-lg',
      variant === 'primary' &&
        'bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-glow',
      variant === 'secondary' &&
        'bg-bg-card border border-border text-text-primary hover:bg-bg-hover hover:border-primary/50',
      variant === 'ghost' &&
        'text-text-secondary hover:text-text-primary hover:bg-bg-card',
      fullWidth && 'w-full',   // ⬅️ AJOUT
      className
    );

    const motionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.97 },
      transition: { type: 'spring' as const, stiffness: 400, damping: 15 },
    };

    if (href) {
      return (
        <MotionButton
          {...motionProps}
          onClick={() =>
            window.open(href, external ? '_blank' : '_self')
          }
          className={baseClasses}
          {...(props as any)}
        >
          {children}
        </MotionButton>
      );
    }

    return (
      <MotionButton
        {...motionProps}
        ref={ref}
        className={baseClasses}
        {...(props as any)}
      >
        {children}
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';