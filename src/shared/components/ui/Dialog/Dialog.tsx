import closeIcon from '@/shared/assets/closeIcon.svg';
import { cn } from '@/shared/lib/utils/cn';
import {
  createContext,
  useContext,
  useEffect,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';

type DialogContextType = {
  onClose: () => void;
};

const DialogContext = createContext<DialogContextType | null>(null);

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return createPortal(
    <DialogContext.Provider value={{ onClose: () => onOpenChange(false) }}>
      <div className="fixed inset-0 z-50 overflow-hidden">{children}</div>
    </DialogContext.Provider>,
    document.body,
  );
}

export function DialogOverlay() {
  const ctx = useContext(DialogContext);
  if (!ctx) return null;

  return (
    <div
      onClick={ctx.onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-[2px] animate-in fade-in"
    />
  );
}

type DialogContentProps = {
  children: ReactNode;
  className?: string;
};

export function DialogContent({ children, className }: DialogContentProps) {
  const ctx = useContext(DialogContext);
  if (!ctx) return null;

  return (
    <>
      <DialogOverlay />
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-3 sm:p-6">
        <div
          className={cn(
            'relative flex w-full max-w-[min(960px,calc(100vw-1.5rem))] max-h-[92dvh] min-w-0 flex-col overflow-hidden border border-border bg-background shadow-2xl animate-in fade-in zoom-in-95 sm:rounded-xl',
            className,
          )}
        >
          {children}
          <button
            type="button"
            onClick={ctx.onClose}
            className="absolute right-4 top-4 z-20 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
          >
            <img src={closeIcon} className="h-4 w-4 bg-amber-50 rounded-2xl" />
            <span className="sr-only">Close</span>
          </button>
        </div>
      </div>
    </>
  );
}

export function DialogHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(`flex flex-col space-y-2 text-left`, className)}
      {...props}
    />
  );
}

export function DialogTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        `text-2xl font-medium leading-tight tracking-tight md:text-3xl`,
        className,
      )}
      {...props}
    />
  );
}

export function DialogTextTag({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        `text-xs uppercase tracking-[0.18em] text-accent`,
        className,
      )}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn(`text-sm text-accent`, className)} {...props} />;
}
