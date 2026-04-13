'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';

/**
 * Toast — Component #35
 * Fixed bottom-right, void-700 bg, 4px left accent bar, 5s auto-dismiss
 * Animate: slide-up + fade-in 200ms; slide-down + fade-out 200ms
 */

type ToastVariant = 'success' | 'error' | 'warning' | 'info';

interface ToastItem {
  id: string;
  message: string;
  variant: ToastVariant;
}

interface ToastContextType {
  toast: (message: string, variant?: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

const VARIANT_ACCENT: Record<ToastVariant, string> = {
  success: 'bg-success',
  error:   'bg-error',
  warning: 'bg-warning',
  info:    'bg-cobalt-500',
};

function ToastItem({ item, onDismiss }: { item: ToastItem; onDismiss: (id: string) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(item.id), 5000);
    return () => clearTimeout(timer);
  }, [item.id, onDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
      className="relative flex items-start gap-3 bg-void-700 border border-void-600 rounded-lg px-5 py-4 shadow-card min-w-[280px] max-w-[360px] overflow-hidden"
      role="status"
      aria-live="polite"
    >
      {/* Left accent bar */}
      <div className={cn('absolute left-0 top-0 bottom-0 w-1 rounded-l-lg', VARIANT_ACCENT[item.variant])} />
      <p className="flex-1 font-body text-sm text-signal-white/80 pl-1">{item.message}</p>
      <button
        onClick={() => onDismiss(item.id)}
        className="flex-shrink-0 text-signal-white/40 hover:text-signal-white transition-colors duration-fast"
        aria-label="Dismiss notification"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </motion.div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((message: string, variant: ToastVariant = 'info') => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev.slice(-3), { id, message, variant }]);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 items-end pointer-events-none">
        <AnimatePresence>
          {toasts.map((item) => (
            <div key={item.id} className="pointer-events-auto">
              <ToastItem item={item} onDismiss={dismiss} />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextType {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
