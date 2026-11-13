import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export function ScrollReveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();

  const initialOffset =
    prefersReduced || direction === 'none'
      ? { x: 0, y: 0 }
      : direction === 'up'
      ? { x: 0, y: 22 }
      : direction === 'left'
      ? { x: -24, y: 0 }
      : { x: 24, y: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.48,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedNumberProps {
  value: string;
  className?: string;
}

export function AnimatedNumber({ value, className = '' }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView || prefersReduced) {
      setDisplayValue(value);
      return;
    }

    const match = value.match(/^([^\d]*)(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];
    const duration = 900;
    const startTime = performance.now();

    let rafId = 0;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplayValue(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, prefersReduced, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

interface HighlightWordProps {
  children: ReactNode;
  variant?: 'amber' | 'teal';
}

export function HighlightWord({ children, variant = 'amber' }: HighlightWordProps) {
  const colorClasses =
    variant === 'amber'
      ? 'text-amber-400 decoration-amber-400/70'
      : 'text-teal-400 decoration-teal-400/70';

  return (
    <span
      className={`font-bold underline decoration-2 underline-offset-4 ${colorClasses}`}
    >
      {children}
    </span>
  );
}
